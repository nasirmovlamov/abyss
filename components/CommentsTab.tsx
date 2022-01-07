import React, { ReactElement, useEffect, useState } from 'react'
import { set_overflowy } from '../app/feature/App.slice'
import { changeModalAction, is_Logged, user_data } from '../app/feature/User.slice'
import { closeComments, comments,   comments_types, is_answer, is_question, showComments } from '../app/feature/Comments.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { addAnswerComment, addQuestionComment } from '../app/thunks/CommentsThunk'
import { AllCommentsCont, CommentAvatar, CommentChangeContent, CommentContent, CommentNameAndContentCont, CommentsCloseButton, CommentsForm,  CommentsTabMainNameStyle, CommentsTabStyle, CommentsTabTitleStyle, CommentStyle, CommentUserName, PostComment, TakeCommentsToSideMakeAbsolute,  } from '../styles/components/styled-blocks/CommentsTab.style'
import { errorToastFunc } from './Notify/ErrorToasts'
import { autoErrorToasterWithMessage } from './Notify/AutoSuccessToast'
import Comment from './Comment'
import { useCommentsTabHook } from '../hooks/useCommentsTabHook'

interface Props {
}


function CommentModal({}: Props): ReactElement {
    const commentsType:any = useAppSelector(comments_types)
    const Comments = useAppSelector(comments)
    const {dontShowComments, setNewComment, newComment , commentOnChange , submitComment} = useCommentsTabHook(commentsType)

    

   
    return (
        <TakeCommentsToSideMakeAbsolute>
            {
                commentsType.type !== null  && 
                <CommentsTabStyle>
                    <CommentsTabMainNameStyle> 
                        <CommentsCloseButton onClick={() => dontShowComments()}>X</CommentsCloseButton>
                    </CommentsTabMainNameStyle>
                    
                    <AllCommentsCont>
                        {
                            Comments.map(comment => <Comment  key={comment.id} comment={comment}/>)
                        }
                    </AllCommentsCont>

                    <CommentsForm onSubmit={submitComment}>
                        <CommentChangeContent onChange={commentOnChange} value={newComment} placeholder="Write a comment"></CommentChangeContent>
                        <PostComment type="submit">Add Comment</PostComment>
                    </CommentsForm>
                </CommentsTabStyle>
            }
        </TakeCommentsToSideMakeAbsolute>
    )
}

export default CommentModal
