import React, { ReactElement, useEffect, useState } from 'react'
import { addNewQuestion, errorToast, successToast } from '../../app/containers/AppSlice'
import { useAppDispatch } from '../../app/store/hooks'
import {BASE_API_INSTANCE} from '../../helpers/api/BaseInstance'
import { accessToken } from '../../helpers/token/TokenHandle'
import { getKeyValue } from '../../logic/getKeyValue'
import { LabelCont, QuestionCreateForm, QuestionCreateModal } from '../../styles/components/styled-elements/CreateQuestionModal.style'
import { Title } from '../../styles/components/styled-elements/FormQuestion.style'


interface Props {
}


function CreateQuestionModal({}: Props): ReactElement {
    const [questionValue, setQuestionValue] = useState({title:"", content:""})
    const [tags, settags] = useState<string[] | Blob>([])
    const [category, setCategory] = useState<string>("")

    const dispatch = useAppDispatch()

    const questionChange = (e:any) => {
        setQuestionValue({...questionValue, [e.target.name]:e.target.value})
    }

    const createTag = (event:any) => {
        if(event.code === "Space")
        {
            settags([...tags, event.target.value])
            event.target.value = ""
        }
    }

    const sendCreateQuestionModal = async (e:any) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("category_id" , category)
            formData.append("title" , questionValue.title)
            formData.append("content" , questionValue.content)
            formData.append("tags" , JSON.stringify(tags))
            const resp = await BASE_API_INSTANCE.post("/forum/create", formData) 
            dispatch(successToast({side:"top-right" , content:resp.data.message}))
        } catch (error) {
            
            dispatch(errorToast({side:"bottom-right" , content:"error.response.data"}))
        }
    }

    return (
        <QuestionCreateModal>
            <QuestionCreateForm onSubmit={sendCreateQuestionModal}>
                <LabelCont>
                    <label htmlFor="title">Title</label>
                    <input onChange={questionChange}  value={questionValue.title}  type="text" name="title"/>
                    <label htmlFor="title">validate</label>
                </LabelCont>

                <LabelCont>
                    <label htmlFor="content">Content</label>
                    <input onChange={questionChange} value={questionValue.content} type="text" name="content"/>
                    <label htmlFor="content">validate</label>
                </LabelCont>


                <LabelCont>
                    <label htmlFor="content">Category</label>
                    <select onChange={(e) => setCategory(e.target.value)} name="category" id=""> 
                        <option value="1">Test</option>
                        <option value="2">Test2</option>
                    </select>
                    <label htmlFor="content">validate</label>
                </LabelCont>

                <LabelCont>
                    <label htmlFor="title">Tags</label>
                    <div className="tags d-f ">
                        {tags.map(tag => <div>{tag}</div>)}
                        <input onKeyDown={createTag} type="text" name="tags"/>
                    </div>
                </LabelCont>

                <button type="submit">Post</button>
            </QuestionCreateForm>
        </QuestionCreateModal>
    )
}

export default CreateQuestionModal
