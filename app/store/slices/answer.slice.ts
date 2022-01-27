import { AnyAction, createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import answerService from 'app/api/services/answer.service';
import { withHandleRequestError } from 'app/hof/withHandleRequestError';
import { Answer } from 'app/interfaces/Answer';
import { Comment } from 'app/interfaces/Comment';

type voteType = 'upvote' | 'downvote'

interface State {
  items: Answer[]
  currentItem: Answer | null
  comments: Comment[]
  myVote: voteType | null
  isLoading: boolean
  successMsg: string | null
  errorMsg: string | null
  errors: any[] | null
}

const initialState: State = {
  items: [],
  currentItem: null,
  comments: [],
  myVote: null,
  isLoading: false,
  successMsg: '',
  errorMsg: '',
  errors: null,
}

// Thunks
export const answerGetAll = createAsyncThunk(
  'answer/getAll',
  withHandleRequestError(async (threadID: number) => {
    return await answerService.getAll(threadID)
  }),
)

export const answerCreate = createAsyncThunk(
  'answer/create',
  withHandleRequestError(async ({ threadID, data }: { threadID: number; data: Answer }) => {
    return await answerService.create(threadID, data)
  }),
)

export const answerUpdate = createAsyncThunk(
  'answer/update',
  withHandleRequestError(async ({ id, data }: { id: number; data: Answer }) => {
    return await answerService.update(id, data)
  }),
)

export const answerDelete = createAsyncThunk(
  'answer/delete',
  withHandleRequestError(async (id: number) => {
    return await answerService.delete(id)
  }),
)

export const answerVote = createAsyncThunk(
  'answer/vote',
  withHandleRequestError(async ({ id, type }: { id: number; type: string }) => {
    return await answerService.vote(id, type)
  }),
)

export const answerCancelVote = createAsyncThunk(
  'answer/answerCancelVote',
  withHandleRequestError(async ({ id, type }: { id: number; type: string }) => {
    return await answerService.cancelVote(id, type)
  }),
)

export const answerGetComments = createAsyncThunk(
  'answer/getComments',
  withHandleRequestError(async (threadID: number) => {
    return await answerService.getComments(threadID)
  }),
)

export const answerCreateComment = createAsyncThunk(
  'answer/createComment',
  withHandleRequestError(async ({ threadID, content }: { threadID: number; content: string }) => {
    return await answerService.createComment(threadID, content)
  }),
)

export const answerUpdateComment = createAsyncThunk(
  'answer/updateComment',
  withHandleRequestError(async ({ id, content }: { id: number; content: string }) => {
    return await answerService.updateComment(id, content)
  }),
)

export const answerDeleteComment = createAsyncThunk(
  'answer/deleteComment',
  withHandleRequestError(async (id: number) => {
    return await answerService.deleteComment(id)
  }),
)

const answerActions = [
  answerGetAll,
  answerCreate,
  answerUpdate,
  answerDelete,
  answerVote,
  answerCancelVote,
  answerGetComments,
  answerCreateComment,
  answerUpdateComment,
  answerDeleteComment,
]

const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Answer CRUD
    builder.addCase(answerGetAll.fulfilled, (state, { payload }: { payload: any }) => {
      state.items = payload
    })

    builder.addCase(answerCreate.fulfilled, (state, { payload }: { payload: any }) => {
      state.items.push(payload)
    })

    builder.addCase(answerUpdate.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.items.findIndex(({ id }) => id === payload.id)
      state.items[index] = payload
    })

    builder.addCase(answerDelete.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.items.findIndex(({ id }) => id === payload.id)
      state.items.splice(index, 1)
    })

    // Vote
    builder.addCase(
      answerVote.fulfilled,
      (state, { payload }: { payload: { voteable_id: number; type: voteType } }) => {
        state.myVote = payload.type
        const index = state.items.findIndex(({ id }) => id === payload.voteable_id)
        state.items[index][payload.type]++
      },
    )

    builder.addCase(
      answerCancelVote.fulfilled,
      (state, { payload }: { payload: { voteable_id: number; type: voteType } }) => {
        state.myVote = null
        const index = state.items.findIndex(({ id }) => id === payload.voteable_id)
        state.items[index][payload.type]--
      },
    )

    // Comments CRUD
    builder.addCase(answerGetComments.fulfilled, (state, { payload }: { payload: any }) => {
      state.comments = payload
    })

    builder.addCase(answerCreateComment.fulfilled, (state, { payload }: { payload: any }) => {
      state.comments.push(payload)
    })

    builder.addCase(answerUpdateComment.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.comments.findIndex(({ id }) => id === payload.id)
      state.comments[index] = payload
    })

    builder.addCase(answerDeleteComment.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.comments.findIndex(({ id }) => id === payload.id)
      state.comments.splice(index, 1)
    })

    // Add default behavior for all actions
    builder.addMatcher((isFulfilled as any)(...answerActions), (state, { payload }: AnyAction) => {
      state.isLoading = false
      state.errorMsg = ''
      state.errors = null
      if (payload) state.successMsg = payload.message
    })
    builder.addMatcher((isPending as any)(...answerActions), (state) => {
      state.isLoading = true
    })
    builder.addMatcher((isRejected as any)(...answerActions), (state, { payload }: AnyAction) => {
      state.isLoading = false
      state.successMsg = ''
      if (payload) {
        state.errors = payload.errors
        state.errorMsg = payload.message
      }
    })
  },
})

export const answerReducer = answerSlice.reducer
