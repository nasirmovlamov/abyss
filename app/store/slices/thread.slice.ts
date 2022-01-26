import { AnyAction, createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import threadService from 'app/api/services/thread.service';
import { withHandleRequestError } from 'app/hof/withHandleRequestError';
import { Comment } from 'app/interfaces/Comment';
import { Thread } from 'app/interfaces/Thread';

interface State {
  items: Thread[]
  currentItem: Thread | null
  comments: Comment[]
  isVoted: boolean | null
  isLoading: boolean
  successMsg: string | null
  errorMsg: string | null
  errors: any[] | null
}

const initialState: State = {
  items: [],
  currentItem: null,
  comments: [],
  isVoted: null,
  isLoading: false,
  successMsg: '',
  errorMsg: '',
  errors: null,
}

// Thunks
export const threadGetAll = createAsyncThunk(
  'thread/getAll',
  withHandleRequestError(async (_: void) => {
    return await threadService.getAll()
  }),
)

export const threadGet = createAsyncThunk(
  'thread/get',
  withHandleRequestError(async ({ id, keyword }: { id: number; keyword: string }) => {
    return await threadService.get(id, keyword)
  }),
)

export const threadCreate = createAsyncThunk(
  'thread/create',
  withHandleRequestError(async (data: Thread) => {
    return await threadService.create(data)
  }),
)

export const threadUpdate = createAsyncThunk(
  'thread/update',
  withHandleRequestError(async ({ id, data }: { id: number; data: Thread }) => {
    return await threadService.update(id, data)
  }),
)

export const threadDelete = createAsyncThunk(
  'thread/delete',
  withHandleRequestError(async (id: number) => {
    return await threadService.delete(id)
  }),
)

export const threadUpVote = createAsyncThunk(
  'thread/upVote',
  withHandleRequestError(async ({ id, type }: { id: number; type: string }) => {
    return await threadService.upVote(id, type)
  }),
)

export const threadDownVote = createAsyncThunk(
  'thread/downVote',
  withHandleRequestError(async ({ id, type }: { id: number; type: string }) => {
    return await threadService.downVote(id, type)
  }),
)

export const threadGetComments = createAsyncThunk(
  'thread/getComments',
  withHandleRequestError(async (threadID: number) => {
    return await threadService.getComments(threadID)
  }),
)

export const threadCreateComment = createAsyncThunk(
  'thread/createComment',
  withHandleRequestError(async ({ threadID, content }: { threadID: number; content: string }) => {
    return await threadService.createComment(threadID, content)
  }),
)

export const threadUpdateComment = createAsyncThunk(
  'thread/createComment',
  withHandleRequestError(async ({ id, content }: { id: number; content: string }) => {
    return await threadService.updateComment(id, content)
  }),
)

export const threadDeleteComment = createAsyncThunk(
  'thread/deleteComment',
  withHandleRequestError(async (id: number) => {
    return await threadService.deleteComment(id)
  }),
)

const threadActions = [
  threadGetAll,
  threadGet,
  threadCreate,
  threadUpdate,
  threadDelete,
  threadUpVote,
  threadDownVote,
  threadGetComments,
  threadCreateComment,
  threadUpdateComment,
  threadDeleteComment,
]

const threadSlice = createSlice({
  name: 'thread',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all
    builder.addCase(threadGetAll.fulfilled, (state, { payload }: { payload: any }) => {
      state.items = payload
    })

    // Get
    builder.addCase(threadGet.fulfilled, (state, { payload }: { payload: any }) => {
      state.currentItem = payload
    })

    // Create
    builder.addCase(threadCreate.fulfilled, (state, { payload }: { payload: any }) => {
      state.items.push(payload)
    })

    // Update
    builder.addCase(threadUpdate.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.items.findIndex(({ id }) => id === payload.id)
      state.items[index] = payload
    })

    // Delete
    builder.addCase(threadUpdate.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.items.findIndex(({ id }) => id === payload)
      state.items.splice(index, 1)
    })

    // Up vote
    builder.addCase(threadUpVote.fulfilled, (state, { payload }: { payload: any }) => {
      state.isVoted = true
      const index = state.items.findIndex(({ id }) => id === payload.voteable_id)
      state.items[index].upvote++
    })

    // Down vote
    builder.addCase(threadDownVote.fulfilled, (state, { payload }: { payload: any }) => {
      state.isVoted = false
      const index = state.items.findIndex(({ id }) => id === payload.voteable_id)
      state.items[index].downvote++
    })

    // Cancel vote with unvote

    // Get comments
    builder.addCase(threadGetComments.fulfilled, (state, { payload }: { payload: any }) => {
      state.comments = payload
    })

    // Create comment
    builder.addCase(threadCreateComment.fulfilled, (state, { payload }: { payload: any }) => {
      state.comments.push(payload)
    })

    // Update comment
    builder.addCase(threadUpdateComment.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.comments.findIndex(({ id }) => id === payload.id)
      state.comments[index] = payload
    })

    // Delete comment
    builder.addCase(threadDeleteComment.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.comments.findIndex(({ id }) => id === payload.id)
      state.comments.splice(index, 1)
    })

    // Add default behavior for all actions
    builder.addMatcher((isFulfilled as any)(...threadActions), (state, { payload }: AnyAction) => {
      state.isLoading = false
      state.errorMsg = ''
      state.errors = null
      if (payload) state.successMsg = payload.message
    })
    builder.addMatcher((isPending as any)(...threadActions), (state) => {
      state.isLoading = true
    })
    builder.addMatcher((isRejected as any)(...threadActions), (state, { payload }: AnyAction) => {
      state.isLoading = false
      state.successMsg = ''
      if (payload) {
        state.errors = payload.errors
        state.errorMsg = payload.message
      }
    })
  },
})

export const threadReducer = threadSlice.reducer
