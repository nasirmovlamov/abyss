//useFetch.js
import axios from 'axios';
import { useState, useEffect } from 'react';
import { showComments } from '../app/feature/Comments.slice';
import { setDeleteOptions } from '../app/feature/Question.slice';
import { changeModalAction, user_data } from '../app/feature/User.slice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { BASE_API_INSTANCE } from '../helpers/api/BaseInstance';



export const useCommentHook = ({comment, commentType}:any) =>  {
    const dispatch = useAppDispatch()
    

    const deleteComment = () => {
        dispatch(setDeleteOptions({comment_id:comment.id, comment_type:commentType.type}))
        dispatch(changeModalAction('areYouSureDelete_Comment'))
    }


    const editComment = (content:string) => {
        dispatch(editCommentContent_onChange(content))
    }

    const enableEditingFunc = () => {
        dispatch(enableCommentEditing({id:answer.id , new_content:answer.content,direction:direction}))
    }

    const cancelCommentEditingFunc = () => {
        dispatch(disableEditing(null))
    }


    const saveCommentEditingFunc = () => {
        const form_data = new FormData()
        form_data.append("content", editAnswerData!.new_content)
        dispatch(editAnswerThunk({id:answer.id , new_content:answer.new_content, direction:direction, form_data:form_data}))
    }


    return {deleteComment , editComment, enableEditingFunc, saveCommentEditingFunc, cancelCommentEditingFunc}
}