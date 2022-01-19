import { faEdit, faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { comments_types, edit_comment_data } from '../app/feature/Comments.slice';
import { user_data } from '../app/feature/User.slice';
import { useAppSelector } from '../app/store/hooks';
import { useCommentHook } from '../hooks/useCommentHook';
import {
    CommentAvatar,
    CommentContent,
    CommentNameAndContentCont,
    CommentStyle,
    CommentUserName,
} from '../styles/components/styled-blocks/CommentsTab.style';
import * as SingleQuestion_STY from '../styles/pages/SingleQuestionPage.styled';

interface Props {
    comment: any
}

const Comment = ({ comment }: Props) => {
    const userData = useAppSelector(user_data)
    const commentType = useAppSelector(comments_types)
    const editCommentData = useAppSelector(edit_comment_data)
    const {
        deleteComment,
        editComment_change_func,
        enableEditingFunc,
        saveCommentEditingFunc,
        cancelCommentEditingFunc
    } = useCommentHook({ comment: comment, commentType: commentType })

    return (
        <CommentStyle>
            <CommentAvatar>

            </CommentAvatar>
            <CommentNameAndContentCont>
                <CommentUserName>{comment.user.name}</CommentUserName>
                {
                    (!(editCommentData === null) && comment.id === editCommentData.id)
                        ?
                        <div>
                            <textarea value={editCommentData.new_content} onChange={(e: any) => editComment_change_func(e.target.value)} name="" id="" cols={30} rows={10}></textarea>
                            <div>
                                <button onClick={cancelCommentEditingFunc}>cancel</button>
                                <button onClick={saveCommentEditingFunc} disabled={!(editCommentData.new_content.length > 0)}>save</button>
                            </div>
                        </div>
                        :
                        <>
                            <CommentContent>{comment.content}</CommentContent>
                        </>

                }
            </CommentNameAndContentCont>
            {
                (comment.user.id === userData?.id) &&

                <SingleQuestion_STY.QuestionStatisticOptForUser_STY >
                    <SingleQuestion_STY.QuestionStatisticDotsButton_STY >
                        <FontAwesomeIcon icon={faEllipsisV} color='white' />
                    </SingleQuestion_STY.QuestionStatisticDotsButton_STY>

                    <SingleQuestion_STY.QuestionStatisticElement_STY visible={true} >
                        <SingleQuestion_STY.Edit_Question_STY onClick={enableEditingFunc}>
                            <FontAwesomeIcon icon={faEdit} />
                        </SingleQuestion_STY.Edit_Question_STY>
                        <SingleQuestion_STY.Delete_Question_STY onClick={deleteComment}>
                            <FontAwesomeIcon icon={faTrash} />
                        </SingleQuestion_STY.Delete_Question_STY>
                    </SingleQuestion_STY.QuestionStatisticElement_STY>
                </SingleQuestion_STY.QuestionStatisticOptForUser_STY>
            }


        </CommentStyle>
    )
}

export default Comment
