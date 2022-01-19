//useFetch.js
import { useState, useEffect } from 'react'
import axios from 'axios'
import { showComments } from '../app/feature/Comments.slice'
import { disableAnswerEditing, editAnswerContent_onChange, edit_answer_data, enableAnswerEditing, question_status, setDeleteOptions, single_question_data } from '../app/feature/Question.slice'
import { changeModalAction, user_data } from '../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { question_data_interface } from '../app/store/state-Interfaces/QuestionInterface'
import { getAnswerComments, getQuestionComments } from '../app/thunks/CommentsThunk'
import { editAnswerThunk, unVoteAnswer, unVoteQuestion, voteAnswer, voteQuestion } from '../app/thunks/QuestionThunk'
import { BASE_API_INSTANCE } from '../helpers/api/BaseInstance'



export const useAnswerHook = ({ answer, direction }: { answer: any, direction: string }) => {
    const dispatch = useAppDispatch()
    const userData = useAppSelector(user_data)
    const editAnswerData = useAppSelector(edit_answer_data)
    const vote = () => {
        if (userData === null) {
            dispatch(changeModalAction('login'))
            return null
        }
        if (answer.user_votes === null || answer.user_votes.type === "downvote") {
            dispatch(voteAnswer({ id: answer.id, type: "upvote", direction: `${direction}` }))
        } else {
            dispatch(unVoteAnswer({ id: answer.id, type: "upvote", direction: `${direction}` }))
        }
        return null
    }

    const downvote = () => {
        if (userData === null) {
            dispatch(changeModalAction('login'))
            return null
        }

        if (answer.user_votes === null || answer.user_votes.type === "upvote") {
            dispatch(voteAnswer({ id: answer.id, type: "downvote", direction: direction }))
        }
        else {
            dispatch(unVoteAnswer({ id: answer.id, type: "downvote", direction: direction }))
        }
        return null
    }

    const clickToOpenComments = () => {
        document.querySelector(`#answer${answer.id}`)?.setAttribute("style", "border: 1px solid white !important;position:relative;")
        dispatch(
            showComments(
                {
                    isQuestion: null,
                    isAnswer: true,
                    id: answer.id,
                    user: answer.user,
                    title: answer.content,
                    type: "answer",
                    showComments: true
                }
            )
        )
        dispatch(getAnswerComments(answer.id))
    }

    const deleteAnswer = () => {
        dispatch(setDeleteOptions({ answer_id: answer.id, direction: direction }))
        dispatch(changeModalAction('areYouSureDelete_Answer'))
    }

    const editAnswer = (content: string) => {
        dispatch(editAnswerContent_onChange(content))
    }

    const enableEditingFunc = () => {
        dispatch(enableAnswerEditing({ id: answer.id, new_content: answer.content, direction: direction }))
    }

    const cancelEditingFunc = () => {
        dispatch(disableAnswerEditing(null))
    }


    const saveEditingFunc = () => {
        const form_data = new FormData()
        form_data.append("content", editAnswerData!.new_content)
        dispatch(editAnswerThunk({ id: answer.id, new_content: answer.new_content, direction: direction, form_data: form_data }))
    }

    return { clickToOpenComments, vote, downvote, deleteAnswer, editAnswer, enableEditingFunc, cancelEditingFunc, saveEditingFunc }
}