import {
  CreateQuestionActions,
  create_question_data,
} from '../../../../../store/slices/CreateQuestionFeatures/CreateQuestion.slice'
import {
  CreateThreadActions,
  create_thread_data,
} from '../../../../../store/slices/CreateThread/CreateThread.slice'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch, useAppSelector } from '../../../../../store/states/store.hooks'

import { CreateThread_Step3_STY } from '../../../../../styles/ui/modules/CreateThread_Style/Steps/CreateThread_Step3.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

interface Props {}

const CreateThread_Step3 = (props: Props) => {
  const threadData = useAppSelector(create_thread_data)
  const dispatch = useAppDispatch()

  const validationData_question = useAppSelector(create_question_data)

  useEffect(() => {
    if (threadData.threadType === 'question') {
      dispatch(CreateQuestionActions.validateQuestionCreate(null))
    }
    if (threadData.threadType === 'discussion') {
      dispatch(CreateQuestionActions.validateQuestionCreate(null))
    }
    if (threadData.threadType === 'request') {
      dispatch(CreateQuestionActions.validateQuestionCreate(null))
    }
  }, [])

  const prevoiusStep_CreateThread = () => {
    dispatch(CreateThreadActions.goPrevoiusStep(null))
  }

  return (
    <CreateThread_Step3_STY>
      {threadData.threadType === 'question' &&
      validationData_question.validation_check === 'valid' ? (
        <div className="threadValid">
          <FontAwesomeIcon icon={faCheckCircle} />
          <p>Your {threadData.threadType} is ready to go !</p>
        </div>
      ) : (
        <div className="errorCont">
          <FontAwesomeIcon icon={faExclamationCircle} />
          <p>Please go to the previous section and fill required gaps</p>
          <button type="button" onClick={prevoiusStep_CreateThread}>
            Go Prevoius
          </button>
        </div>
      )}
    </CreateThread_Step3_STY>
  )
}

export default CreateThread_Step3
