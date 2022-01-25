import {
  create_question_data,
  CreateQuestionActions,
  linked_products,
  mentioned_users,
  question_value,
} from 'app/store/slices/CreateQuestionFeatures/CreateQuestion.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { LabelCont } from 'app/styles/styled-components/components/modules/CreateQuestionModal.style';
import * as CreateQuestion_STY from 'app/styles/styled-components/components/modules/CreateThread_Style/CreateQuestion.style';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';

import MyEditor from '../../../modules/editors/MyEditor';
import { ErrorLabel } from '../../elements/ErrorLabel';

// import {EditorNewVersion} from '../EditorNewVersion'
// import EditorClassVersion from '../EditorClassVersion'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../../../modules/editors/EditorForQuestionCreateMentions'),
  { ssr: false },
)
interface Props {}

function CreateQuestion({}: Props): ReactElement {
  const dispatch = useAppDispatch()
  const questionContent = useAppSelector(question_value)
  const createQuestionData = useAppSelector(create_question_data)
  const { validation_check, validations, tags, tagValue, questionTitle, questionValue } =
    createQuestionData
  const linkedProducts = useAppSelector(linked_products)
  const mentionedUsers = useAppSelector(mentioned_users)

  const spaceCheckerRegex = /\s/g

  const questionTitleChange = (e: any) => {
    if (!spaceCheckerRegex.test(e.target.value)) {
    }
    dispatch(CreateQuestionActions.questionTitleOnChange(e.target.value))
  }

  const tagValueChange = (e: any) => {
    dispatch(CreateQuestionActions.questionTagValueOnChangeHandler(e.target.value))
  }

  const createTag = (event: any) => {
    if (event.code === 'Backspace') {
      if (event.target.value.length === 0) {
        dispatch(CreateQuestionActions.questionDeleteLastTagOnClickHandler(null))
      }
    }
    if (event.code === 'Enter') {
      if (event.target.value.length > 0) {
        dispatch(CreateQuestionActions.questionCreateTagOnClickHandler(null))
        dispatch(CreateQuestionActions.questionTagValueOnChangeHandler(''))
      }
    }
  }

  const deleteTag = (tag: any) => {
    dispatch(CreateQuestionActions.questionDeleteTagOnClickHandler(tag))
  }

  return (
    <CreateQuestion_STY.CreateQuestion_BLock>
      <div className="label-cont">
        <CreateQuestion_STY.CreateQuestion_Title1 htmlFor="title " className="title title1">
          Title
        </CreateQuestion_STY.CreateQuestion_Title1>
        <input
          className="input1"
          onChange={questionTitleChange}
          value={questionTitle}
          type="text"
          name="question-title"
        />
        <ErrorLabel validation={validation_check} validators={validations.questionTitle} />
      </div>

      <LabelCont>
        <label htmlFor="content" className="title">
          Content
        </label>
        {<DynamicComponentWithNoSSR />}
        <MyEditor display={'none'} content={''} onChange={(content: any) => content} />
        {/* <EditorNewVersion/> */}
        <ErrorLabel validation={validation_check} validators={validations.questionValue} />
      </LabelCont>

      <LabelCont>
        <label htmlFor="tags" className="title">
          Tags
        </label>
        <CreateQuestion_STY.CreateQuestion_Tags_STY className="tags d-f ">
          {tags.map((tag: any) => (
            <div className="tag" key={tag.id}>
              {tag.name}
              <button onClick={() => deleteTag(tag)} type="button" className="deleteTag">
                x
              </button>
            </div>
          ))}
          <input
            onChange={tagValueChange}
            value={tagValue}
            onKeyDown={createTag}
            type="tags"
            name="tags"
          />
        </CreateQuestion_STY.CreateQuestion_Tags_STY>
        <ErrorLabel validation={validation_check} validators={validations.tags} />
      </LabelCont>
    </CreateQuestion_STY.CreateQuestion_BLock>
  )
}

export default CreateQuestion
