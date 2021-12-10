import { faCommentAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { CreateQuestionActions, create_question_data } from '../../../app/feature/CreateQuestionFeatures/CreateQuestion.slice'
import { CreateThreadActions, create_thread_data } from '../../../app/feature/CreateThread/CreateThread.slice'
import { changeModalAction } from '../../../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { createQuestionThunk } from '../../../app/thunks/CreateThread/CreateQuestion.thunk'
import { CreateProduct_Tabs } from '../../../styles/components/styled-blocks/CreateProduct_Style/CreateProduct.style'
import { CreateThreadFORM_STY } from '../../../styles/components/styled-blocks/CreateThread_Style/CreateThread.style'
import { 
    CreateThread_Tab, 
    CreateThread_Tabs, 
    CreateThread_Tab_Seperator, 
    ModalFORM_STY , 
    CreateThread_CloseButton_STY, 
    CreateThread_Buttons_Cont, 
    CreateThread_Button_NEXT, 
    CreateThread_Button_PREVOIUS, 
    CreateThread_RightButtons_flexer,
    CreateThread_StepCont} from '../../../styles/components/styled-blocks/Modal_Style/ModalCont.style'
import { autoErrorToasterWithMessage } from '../../Notify/AutoSuccessToast'
import CreateDiscussion from './CreateDiscussion'
import CreateQuestion from './CreateQuestion'
import CreateRequest from './CreateRequest'
import CreateThread_Step1 from './Steps/CreateThread_Step1'
import CreateThread_Step3 from './Steps/CreateThread_Step3'

interface Props {
    
}

const CreateThreadModal = (props: Props) => {
    const dispatch = useAppDispatch()
    const [disabledCheck, setdisabledCheck] = useState(true)
    const  threadData = useAppSelector(create_thread_data)
    const  createQuestionData = useAppSelector(create_question_data)

    const ThreadsType = {
        'not-selected': <CreateThread_Step1/>,
        'question': <CreateQuestion/>,
        'request': <CreateRequest/>,
        'discussion': <CreateDiscussion/>,
    }

    const createThreadSteps:{[key:number]:JSX.Element} = {
        1:<CreateThread_Step1/>,
        2:ThreadsType[threadData.threadType],
        3:<CreateThread_Step3/>
    }

    const stepValidations:{[key:number]:any} = {
        1:() => dispatch(CreateThreadActions.validateStep1(null)),
        2:() => dispatch(CreateThreadActions.validateStep1(null)),
        3:() => dispatch(CreateThreadActions.validateStep1(null)),
    }

    const nextStep_CreateThread = () => {
        stepValidations[threadData.currentStage]()
        dispatch(CreateThreadActions.goNextStep(null))
    }

    const prevoiusStep_CreateThread = () => {
        dispatch(CreateThreadActions.goPrevoiusStep(null))
    }

    const submitThread = (e:any) => {
        e.preventDefault()
        if(threadData.threadType === 'question'){
            if(createQuestionData.validation_check === 'valid'){
                try {
                    dispatch(createQuestionThunk(createQuestionData))
                    dispatch(changeModalAction('questionCreate'))
                } catch (error) {
                    autoErrorToasterWithMessage('Please try again.')                    
                }
            }
        }
        if(threadData.threadType === 'discussion'){
        }
        if(threadData.threadType === 'request'){
        }
    }

    const disabledChecker = () => {
        if(threadData.threadType === 'question'){
            if(createQuestionData.validation_check === 'valid'){
                setdisabledCheck(false)
            }
        }
        if(threadData.threadType === 'discussion'){
            if(createQuestionData.validation_check === 'valid'){
                setdisabledCheck(false)
            }
        }
        if(threadData.threadType === 'request'){
            if(createQuestionData.validation_check === 'valid'){
                setdisabledCheck(false)
            }
        }
    }

    

    useEffect(() => {
        disabledChecker()
    }, [createQuestionData.validation_check])

    return (
        <CreateThreadFORM_STY onSubmit={submitThread}>
            <CreateThread_CloseButton_STY type="button" onClick={() => dispatch(changeModalAction('questionCreate'))} >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
            </CreateThread_CloseButton_STY>

            <CreateThread_Tabs>
                <CreateThread_Tab stage={threadData.currentStage === 1} validated={false}/>
                <CreateThread_Tab_Seperator  validated={false}/>
                <CreateThread_Tab stage={threadData.currentStage === 2} validated={false}/>
                <CreateThread_Tab_Seperator  validated={false}/>
                <CreateThread_Tab stage={threadData.currentStage === 3} validated={false}/>
            </CreateThread_Tabs>

            <CreateThread_StepCont>
                {createThreadSteps[threadData.currentStage]}
            </CreateThread_StepCont>

            <CreateThread_Buttons_Cont>
                <CreateThread_Button_PREVOIUS type='button' onClick={prevoiusStep_CreateThread}>Previous</CreateThread_Button_PREVOIUS>

                <p className='stepError'>{threadData.currentStage === 1 && (threadData.validation[1].isValid === 'not-valid' && <>{threadData.validation[1].message}</>)} </p>

                <CreateThread_RightButtons_flexer>
                    <FontAwesomeIcon icon={faCommentAlt}/>
                    <FontAwesomeIcon icon={faQuestionCircle}/>
                    {
                        threadData.currentStage < 3 ?
                        <CreateThread_Button_NEXT type='button' onClick={nextStep_CreateThread}>Next</CreateThread_Button_NEXT>
                        :
                        <CreateThread_Button_NEXT disabled={disabledCheck} type='button' onClick={submitThread}>Submit</CreateThread_Button_NEXT>
                    }
                </CreateThread_RightButtons_flexer>
            </CreateThread_Buttons_Cont>

        </CreateThreadFORM_STY>
    )
}

export default CreateThreadModal
