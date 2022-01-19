import React, { FC } from 'react'
import {
  question_errors,
  question_status,
  single_question_data,
} from '../app/feature/Question.slice'
import router, { useRouter } from 'next/router'

import Loader from 'react-spinners/ScaleLoader'
import { QuestionMiddleLayout } from './QuestionMain.layout'
import { useAppSelector } from '../app/store/hooks'

interface Props {}

const QuestionLayout: FC<Props> = ({ children, ...props }) => {
  const questionStatus = useAppSelector(question_status)
  const questionData = useAppSelector(single_question_data)
  const errors = useAppSelector(question_errors)
  const router = useRouter()
  if (questionStatus === 'loading') {
    return (
      <>
        <h1 className="custom-loading-cont">Loading...</h1>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Loader loading={true} color={'white'} />
        </div>
      </>
    )
  } else if (questionStatus === 'failed') {
    return (
      <>
        <h1 className="custom-error-cont">Error occured.</h1>
        <button onClick={() => router.push('/')}>Go Back</button>
        {/* <h2>{errors.message}</h2>
                {Object.keys(errors.errors).map(error =>  
                    <p key={error}>{errors.errors[error]}</p>
                )} */}
      </>
    )
  } else if (questionStatus === 'idle') {
    return (
      <>
        <QuestionMiddleLayout />
      </>
    )
  } else {
    return (
      <>
        <p>Something went wrong.</p>
      </>
    )
  }
}

export default QuestionLayout
