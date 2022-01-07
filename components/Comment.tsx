import React from 'react'
import { CommentAvatar, CommentContent, CommentNameAndContentCont, CommentStyle, CommentUserName } from '../styles/components/styled-blocks/CommentsTab.style'
import { useCommentHook } from '../hooks/useCommentHook'
import * as SingleQuestion_STY from '../styles/pages/SingleQuestionPage.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from '../app/store/hooks'
import { user_data } from '../app/feature/User.slice'
import { comments_types } from '../app/feature/Comments.slice'

interface Props {
    comment:any
}

const Comment = ({comment}: Props) => {
    const userData = useAppSelector(user_data)
    const commentType = useAppSelector(comments_types)
    const {deleteComment} = useCommentHook({comment:comment , commentType:commentType})

    return (
        <CommentStyle>
            <CommentAvatar>

            </CommentAvatar>
            <CommentNameAndContentCont>
                <CommentUserName>{comment.user.name}</CommentUserName>
                <CommentContent>{comment.content}</CommentContent>
            </CommentNameAndContentCont>
            {
                (comment.user.id === userData?.id) &&
                <SingleQuestion_STY.QuestionStatisticElement_STY>
                    {/* <SingleQuestion_STY.QuestionStatisticText_STY>Give Vote</SingleQuestion_STY.QuestionStatisticText_STY> */}
                    <SingleQuestion_STY.Edit_Question_STY>
                        <FontAwesomeIcon icon={faEdit} />
                    </SingleQuestion_STY.Edit_Question_STY>
                    <SingleQuestion_STY.Delete_Question_STY onClick={deleteComment}>
                        <FontAwesomeIcon icon={faTrash} />
                    </SingleQuestion_STY.Delete_Question_STY>
                </SingleQuestion_STY.QuestionStatisticElement_STY>
            }
        </CommentStyle>
    )
}

export default Comment
