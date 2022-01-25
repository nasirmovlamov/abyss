import { ReactElement } from 'react';

import { useCommentsTabHook } from '../../../hooks/useCommentsTab.hook';
import { comments, comments_types } from '../../../store/slices/Comments.slice';
import { useAppSelector } from '../../../store/states/store.hooks';
import {
  AllCommentsCont,
  CommentChangeContent,
  CommentsCloseButton,
  CommentsForm,
  CommentsTabMainNameStyle,
  CommentsTabStyle,
  PostComment,
  TakeCommentsToSideMakeAbsolute,
} from '../../../styles/styled-components/components/modules/CommentsTab.style';

interface Props {}

function CommentModal({}: Props): ReactElement {
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
            {Comments.map((comment) => (
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
