import {
  AllCommentsCont,
  CommentChangeContent,
  CommentsCloseButton,
  CommentsForm,
  CommentsTabMainNameStyle,
  CommentsTabStyle,
  PostComment,
  TakeCommentsToSideMakeAbsolute,
} from 'app/styles/styled-components/base/modules/CommentsTab.style';
import { ReactElement } from 'react';

import { useCommentsTabHook } from '../../../hooks/useCommentsTab.hook';
import { comments, comments_types } from '../../../store/slices/Comments.slice';
import { useAppSelector } from '../../../store/states/store.hooks';
import Comment from '../elements/Comment';

const CommentModal = () => {
  const commentsType: any = useAppSelector(comments_types)
  const Comments = useAppSelector(comments)
  const { dontShowComments, setNewComment, newComment, commentOnChange, submitComment } =
    useCommentsTabHook(commentsType)

  return (
    <TakeCommentsToSideMakeAbsolute>
      {commentsType.type !== null && (
        <CommentsTabStyle>
          <CommentsTabMainNameStyle>
            <CommentsCloseButton onClick={() => dontShowComments()}>X</CommentsCloseButton>
          </CommentsTabMainNameStyle>

          <AllCommentsCont>
            {Comments.map((comment: any) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </AllCommentsCont>

          <CommentsForm onSubmit={submitComment}>
            <CommentChangeContent
              onChange={commentOnChange}
              value={newComment}
              placeholder="Write a comment"
            ></CommentChangeContent>
            <PostComment type="submit">Add Comment</PostComment>
          </CommentsForm>
        </CommentsTabStyle>
      )}
    </TakeCommentsToSideMakeAbsolute>
  )
}

export default CommentModal
