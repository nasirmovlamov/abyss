import React, { ReactElement, useEffect, useState } from 'react'
import { changeModalAction } from '../../../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import {BASE_API_INSTANCE} from '../../../helpers/api/BaseInstance'
import { getKeyValue } from '../../../logic/getKeyValue'
import { LabelCont, QuestionCreateForm, QuestionCreateModal } from '../../../styles/components/styled-blocks/CreateQuestionModal.style'
import { Title } from '../../../styles/components/styled-blocks/FormQuestion.style'
import MyEditor from '../../MyEditor'
import {  autoErrorToaster } from '../../Notify/AutoErrorToaster'
import { errorToastFunc } from '../../Notify/ErrorToasts'
import Image from 'next/image'
import { autoSuccessToaster , autoErrorToasterWithMessage } from '../../Notify/AutoSuccessToast'
// import {EditorNewVersion} from '../EditorNewVersion'
// import EditorClassVersion from '../EditorClassVersion'

import dynamic from 'next/dynamic'
import { CreateQuestionActions, create_question_data, linked_products, mentioned_users, question_value } from '../../../app/feature/CreateQuestionFeatures/CreateQuestion.slice'
import * as CreateQuestion_STY from '../../../styles/components/styled-blocks/CreateThread_Style/CreateQuestion.style' 
import { ErrorLabel } from '../../ErrorLabel'


const DynamicComponentWithNoSSR = dynamic(
    () => import('../../Editors/EditorForQuestionCreateMentions'),
    { ssr: false }
)
interface Props {
}


function CreateQuestion({}: Props): ReactElement {
    const dispatch = useAppDispatch()
    const questionContent =  useAppSelector(question_value)
    const createQuestionData = useAppSelector(create_question_data)
    const {validation_check , validations , tags , tagValue , questionTitle , questionValue} = createQuestionData 
    const linkedProducts = useAppSelector(linked_products)
    const mentionedUsers = useAppSelector(mentioned_users)


    const spaceCheckerRegex = /\s/g


    const questionTitleChange = (e:any) => {
        if(!spaceCheckerRegex.test(e.target.value)){
        }
        dispatch(CreateQuestionActions.questionTitleOnChange(e.target.value))
    }

    const tagValueChange = (e:any) => {
        dispatch(CreateQuestionActions.questionTagValueOnChangeHandler(e.target.value))
    }


    const createTag = (event:any) => {
        if(event.code === "Backspace"){
            if(event.target.value.length === 0){
                dispatch(CreateQuestionActions.questionDeleteLastTagOnClickHandler(null))
            }
        }
        if(event.code === "Enter" )
        {
            if(event.target.value.length > 0 ){

                dispatch(CreateQuestionActions.questionCreateTagOnClickHandler(null))
                dispatch(CreateQuestionActions.questionTagValueOnChangeHandler(''))
            }
        }
    }

    const deleteTag = (tag:any) => {
        dispatch(CreateQuestionActions.questionDeleteTagOnClickHandler(tag))
    }

    
    return (
            <CreateQuestion_STY.CreateQuestion_BLock >
                <div className='label-cont'>
                    <CreateQuestion_STY.CreateQuestion_Title1 htmlFor="title " className='title title1'>Title</CreateQuestion_STY.CreateQuestion_Title1>
                    <input className="input1" onChange={questionTitleChange}  value={questionTitle}  type="text" name="question-title"/>
                    <ErrorLabel 
                        validation={validation_check} 
                        validators={validations.questionTitle}
                    />
                </div>

                
                <LabelCont>
                    <label htmlFor="content" className='title'>Content</label>
                    {<DynamicComponentWithNoSSR/>}
                    <MyEditor  display={"none"} content={''} onChange={(content:any) => content} />
                    {/* <EditorNewVersion/> */}
                    <ErrorLabel 
                        validation={validation_check} 
                        validators={validations.questionValue}
                    />
                </LabelCont>

                

                <LabelCont>
                    <label htmlFor='tags' className='title'>Tags</label>
                    <CreateQuestion_STY.CreateQuestion_Tags_STY className="tags d-f ">
                        {tags.map((tag:any) => 
                            <div className='tag' key={tag.id}>
                                {tag.name} 
                                <button onClick={() => deleteTag(tag)} type='button' className='deleteTag'>x</button>
                            </div>)
                        }
                        <input onChange={tagValueChange} value={tagValue} onKeyDown={createTag} type="tags" name="tags"/>
                    </CreateQuestion_STY.CreateQuestion_Tags_STY>
                    <ErrorLabel 
                        validation={validation_check} 
                        validators={validations.tags}
                    />
                </LabelCont>
                

               

            </CreateQuestion_STY.CreateQuestion_BLock>
    )
}

export default CreateQuestion
