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

    return {deleteComment}
}