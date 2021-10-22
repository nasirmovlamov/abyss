import React, { ReactElement, useEffect, useState } from 'react'
import { set_overflowy } from '../app/feature/AppSlice'
import { user_data } from '../app/feature/UserSlice'
import { closeComments, comments,   comments_types, is_answer, is_question, showComments } from '../app/feature/CommentsSlice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { addAnswerComment, addQuestionComment } from '../app/thunks/CommentsThunk'
import { AllCommentsCont, CommentChangeContent, CommentsForm,  CommentsTabMainNameStyle, CommentsTabStyle, CommentsTabTitleStyle, CommentStyle, PostComment, TakeCommentsToSideMakeAbsolute,  } from '../styles/components/styled-elements/CommentsTab.style'
import { errorToastFunc } from './Notify/ErrorToasts'

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
    if(commentsType === null)
    {
        return <></>
    }

   

    const submitComment = (e:any) => {
        e.preventDefault()
        const comment={
            parent_id: commentsType.id,
            content: newComment
        }
        if(userData === null)
        {
            errorToastFunc("top-right","Login your account.")
            return 0 
        }

        if(commentsType.type === "answer")
        {
            dispatch(addAnswerComment(comment))
        }
        else if(commentsType.type === "question")
        {
            dispatch(addQuestionComment(comment))
        }
        setNewComment("")
    }


    const dontShowComments = () => {
        dispatch(closeComments(null))
        dispatch(set_overflowy(""))
    }
   
    return (
        <TakeCommentsToSideMakeAbsolute>
            <button onClick={() => dontShowComments()}>X</button>
            {
                commentsType.type !== null  && 
                <CommentsTabStyle>
                    <CommentsTabMainNameStyle>{commentsType.user.name} </CommentsTabMainNameStyle>
                    <AllCommentsCont>
                        {Comments.map(comment => <CommentStyle key={comment.id}>{comment.content}</CommentStyle>)}
                    </AllCommentsCont>

                    <CommentsForm onSubmit={submitComment}>
                        <CommentChangeContent onChange={(e)=> setNewComment(e.target.value)} placeholder="add comment"></CommentChangeContent>
                        <PostComment type="submit">Add Comment</PostComment>
                    </CommentsForm>
                </CommentsTabStyle>
            }
        </TakeCommentsToSideMakeAbsolute>
    )
}

export default CommentModal
