import { BASE_API_INSTANCE } from 'app/helpers/api/BaseInstance';
import { changeModalAction } from 'app/store/slices/User.slice';
import { useAppDispatch } from 'app/store/states/store.hooks';
import { LabelCont } from 'app/styles/styled-components/base/modules/CreateQuestionModal.style';
import { ModalFORM_STY } from 'app/styles/styled-components/base/modules/Modal_Style/ModalCont.style';
import React, { ReactElement, useEffect, useState } from 'react';

import { autoErrorToaster } from '../toasters/AutoErrorToaster';
import { autoSuccessToaster } from '../toasters/AutoSuccessToast';

interface Props {}

function CreateIterationModal({}: Props): ReactElement {
  const [questionValue, setQuestionValue] = useState({ title: '', content: '' })
  const [tags, settags] = useState<string[]>([])
  const [category, setCategory] = useState<string>('1')

  const dispatch = useAppDispatch()

  const questionChange = (e: any) => {
    setQuestionValue({ ...questionValue, [e.target.name]: e.target.value })
  }

  const createTag = (event: any) => {
    if (event.code === 'Space') {
      settags([...tags, event.target.value])
      event.target.value = ''
    }
  }

  const sendCreateQuestionModal = async (e: any) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('category_id', category)
      formData.append('title', questionValue.title)
      formData.append('content', questionValue.content)
      formData.append('tags', JSON.stringify(tags))
      const resp = await BASE_API_INSTANCE.post('/forum/create', formData)
      autoSuccessToaster(resp.data.message)
    } catch (error: any) {
      autoErrorToaster(error.response.data)
    }
  }

  return (
    <ModalFORM_STY onSubmit={sendCreateQuestionModal}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          marginTop: '0px',
          marginBottom: '10px',
        }}
      >
        <button
          type="button"
          onClick={() => dispatch(changeModalAction('iterationCreate'))}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          X
        </button>
      </div>
      <LabelCont>
        <label htmlFor="title">iteration Title</label>
        <input onChange={questionChange} value={questionValue.title} type="text" name="title" />
        <label htmlFor="title">validate</label>
      </LabelCont>

      <LabelCont>
        <label htmlFor="content">iteration Content</label>
        <textarea></textarea>
        <label htmlFor="content">validate</label>
      </LabelCont>

      <button type="submit">Post</button>
    </ModalFORM_STY>
  )
}

export default CreateIterationModal
