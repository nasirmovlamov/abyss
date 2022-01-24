import { CommentsInterface } from '../interfaces/Comment.interface';
export const CommentsState: CommentsInterface = {
  comments: [],
  commentsType: null,
  commentsStatus: 'idle',
  isCommentOpened: false,
  isAnswer: null,
  isQuestion: null,
  delete_options: null,
  commentsErrors: {
    email: [],
    content: [],
    token: [],
  },
  edit_comment: null,
}
