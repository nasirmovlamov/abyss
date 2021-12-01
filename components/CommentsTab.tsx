import React, { ReactElement, useEffect, useState } from 'react'
import { set_overflowy } from '../app/feature/App.slice'
import { changeModalAction, is_Logged, user_data } from '../app/feature/User.slice'
import { closeComments, comments,   comments_types, is_answer, is_question, showComments } from '../app/feature/Comments.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { addAnswerComment, addQuestionComment } from '../app/thunks/CommentsThunk'
import { AllCommentsCont, CommentAvatar, CommentChangeContent, CommentContent, CommentNameAndContentCont, CommentsCloseButton, CommentsForm,  CommentsTabMainNameStyle, CommentsTabStyle, CommentsTabTitleStyle, CommentStyle, CommentUserName, PostComment, TakeCommentsToSideMakeAbsolute,  } from '../styles/components/styled-blocks/CommentsTab.style'
import { errorToastFunc } from './Notify/ErrorToasts'
import { autoErrorToasterWithMessage } from './Notify/AutoSuccessToast'

interface Props {
}


function CommentModal({}: Props): ReactElement {
    const [newComment, setNewComment] = useState("")
    const commentsType = useAppSelector(comments_types)
    const Comments = useAppSelector(comments)
    const isQuestion = useAppSelector(is_question)
    const isAnswer = useAppSelector(is_answer)
    const userData = useAppSelector(user_data)
    const dispatch = useAppDispatch()
    const isLogged = useAppSelector(is_Logged)

    if(commentsType === null)
    {
        return <></>
    }

   

    const submitComment = (e:any) => {
        e.preventDefault()
        if(!isLogged)
        {
            autoErrorToasterWithMessage('You must be logged in to submit an answer')
            dispatch(changeModalAction('login'))
            return null
        }

        const comment={
            parent_id: commentsType.id,
            content: newComment
        }

        if(commentsType.type === "answer")
        {
            dispatch(addAnswerComment(comment))
        }
        else if(commentsType.type === "question")
        {
            dispatch(addQuestionComment(comment))
            setNewComment("")
        }
    }


    const dontShowComments = () => {
        dispatch(closeComments(null))
        dispatch(set_overflowy(""))
    }

    const commentOnChange = (e:any) => {
        setNewComment(e.target.value)
        if(e.keyCode === 13)
        {
            submitComment(e)
        }
    }

   
    return (
        <TakeCommentsToSideMakeAbsolute>
            {
                commentsType.type !== null  && 
                <CommentsTabStyle>
                    <CommentsTabMainNameStyle> 
                        <CommentsCloseButton onClick={() => dontShowComments()}>X</CommentsCloseButton>
                    </CommentsTabMainNameStyle>
                    
                    <AllCommentsCont>
                        {Comments.map(comment => 
                        <CommentStyle key={comment.id}>
                            <CommentAvatar>

                            </CommentAvatar>
                            <CommentNameAndContentCont>
                                <CommentUserName>{comment.user.name}</CommentUserName>
                                <CommentContent>{comment.content}</CommentContent>
                            </CommentNameAndContentCont>
                        </CommentStyle>)}
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
