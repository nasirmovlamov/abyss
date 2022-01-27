import { AnyAction, createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import threadService from 'app/api/services/thread.service';
import { withHandleRequestError } from 'app/hof/withHandleRequestError';
import { Comment } from 'app/interfaces/Comment';
import { Product } from 'app/interfaces/Product';
import { Thread } from 'app/interfaces/Thread';

type voteType = 'upvote' | 'downvote'

interface State {
  items: Thread[]
  currentItem: Thread | null
  comments: Comment[]
  mentionedProducts: Product[]
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
  mentionedProducts: [],
  myVote: null,
  isLoading: false,
  successMsg: '',
  errorMsg: '',
  errors: null,
}

// Thunks
export const threadSearch = createAsyncThunk(
  'thread/getAll',
  withHandleRequestError(
    async ({
      type,
      keyword,
      tags,
      mustNot,
    }: {
      type: number
      keyword: string
      tags: string[]
      mustNot: string[]
    }) => {
      return await threadService.search(type, keyword, tags, mustNot)
    },
  ),
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

export const threadVote = createAsyncThunk(
  'thread/vote',
  withHandleRequestError(async ({ id, type }: { id: number; type: string }) => {
    return await threadService.vote(id, type)
  }),
)

export const threadCancelVote = createAsyncThunk(
  'thread/cancelVote',
  withHandleRequestError(async ({ id, type }: { id: number; type: string }) => {
    return await threadService.cancelVote(id, type)
  }),
)

export const threadGetMentionedProducts = createAsyncThunk(
  'thread/getMentionedProducts',
  withHandleRequestError(async ({ id, type }: { id: number; type: string }) => {
    return await threadService.cancelVote(id, type)
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
  'thread/updateComment',
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
  threadSearch,
  threadGet,
  threadCreate,
  threadUpdate,
  threadDelete,
  threadVote,
  threadCancelVote,
  threadGetMentionedProducts,
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
    // Thread CRUD
    builder.addCase(threadSearch.fulfilled, (state, { payload }: { payload: any }) => {
      state.items = payload
    })

    builder.addCase(threadGet.fulfilled, (state, { payload }: { payload: any }) => {
      state.currentItem = payload
    })

    builder.addCase(threadCreate.fulfilled, (state, { payload }: { payload: any }) => {
      state.items.push(payload)
    })

    builder.addCase(threadUpdate.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.items.findIndex(({ id }) => id === payload.id)
      state.items[index] = payload
    })

    builder.addCase(threadDelete.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.items.findIndex(({ id }) => id === payload)
      state.items.splice(index, 1)
    })

    // Vote
    builder.addCase(
      threadVote.fulfilled,
      (state, { payload }: { payload: { voteable_id: number; type: voteType } }) => {
        state.myVote = payload.type
        const index = state.items.findIndex(({ id }) => id === payload.voteable_id)
        state.items[index][payload.type]++
      },
    )

    builder.addCase(
      threadCancelVote.fulfilled,
      (state, { payload }: { payload: { voteable_id: number; type: voteType } }) => {
        state.myVote = null
        const index = state.items.findIndex(({ id }) => id === payload.voteable_id)
        state.items[index][payload.type]--
      },
    )

    // Mentioned products
    builder.addCase(
      threadGetMentionedProducts.fulfilled,
      (state, { payload }: { payload: any }) => {
        state.mentionedProducts = payload
      },
    )

    // Comments CRUD
    builder.addCase(threadGetComments.fulfilled, (state, { payload }: { payload: any }) => {
      state.comments = payload
    })

    builder.addCase(threadCreateComment.fulfilled, (state, { payload }: { payload: any }) => {
      state.comments.push(payload)
    })

    builder.addCase(threadUpdateComment.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.comments.findIndex(({ id }) => id === payload.id)
      state.comments[index] = payload
    })

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
