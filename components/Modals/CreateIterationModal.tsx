import React, { ReactElement, useEffect, useState } from 'react'
import { changeModalAction } from '../../app/feature/User.slice'
import { useAppDispatch } from '../../app/store/hooks'
import {BASE_API_INSTANCE} from '../../helpers/api/BaseInstance'
import { getKeyValue } from '../../logic/getKeyValue'
import { LabelCont, QuestionCreateForm, QuestionCreateModal } from '../../styles/components/styled-blocks/CreateQuestionModal.style'
import { Title } from '../../styles/components/styled-blocks/FormQuestion.style'
import { ModalFORM_STY } from '../../styles/components/styled-blocks/Modal_Style/ModalCont.style'
import MyEditor from '../MyEditor'
import { autoErrorToaster } from '../Notify/AutoErrorToaster'
import { autoSuccessToaster } from '../Notify/AutoSuccessToast'
import { errorToastFunc } from '../Notify/ErrorToasts'


interface Props {
}


function CreateIterationModal({}: Props): ReactElement {
    const [questionValue, setQuestionValue] = useState({title:"", content:""})
    const [tags, settags] = useState<string[]>([])
    const [category, setCategory] = useState<string>("1")

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
            autoSuccessToaster(resp.data.message)
        } catch (error:any) {
            autoErrorToaster(error.response.data)
        }
    }

    return (
        <ModalFORM_STY onSubmit={sendCreateQuestionModal}>
            <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                <button type="button" onClick={() => dispatch(changeModalAction('iterationCreate'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
            </div>
            <LabelCont>
                <label htmlFor="title">iteration Title</label>
                <input onChange={questionChange}  value={questionValue.title}  type="text" name="title"/>
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
