import React, { ReactElement, useEffect, useState } from 'react'
import { changeModalAction } from '../../app/feature/UserSlice'
import { useAppDispatch } from '../../app/store/hooks'
import {BASE_API_INSTANCE} from '../../helpers/api/BaseInstance'
import { accessToken } from '../../helpers/token/TokenHandle'
import { getKeyValue } from '../../logic/getKeyValue'
import { LabelCont, QuestionCreateForm, QuestionCreateModal } from '../../styles/components/styled-elements/CreateQuestionModal.style'
import { Title } from '../../styles/components/styled-elements/FormQuestion.style'
import MyEditor from '../MyEditor'
import { autoErrorToaster } from '../Notify/AutoErrorToaster'
import { autoSuccessToaster } from '../Notify/AutoSuccessToast'
import { errorToastFunc } from '../Notify/ErrorToasts'


interface Props {
}


function CreateQuestionModal({}: Props): ReactElement {
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
            console.log(resp.data.message)
            dispatch(changeModalAction('questionCreate'))
        } catch (error:any) {
            autoErrorToaster(error.response.data)
            
        }
    }

    return (
        <QuestionCreateModal>
            <QuestionCreateForm onSubmit={sendCreateQuestionModal}>
                <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                    <button type="button" onClick={() => dispatch(changeModalAction('questionCreate'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                </div>
                <LabelCont>
                    <label htmlFor="title">Title</label>
                    <input onChange={questionChange}  value={questionValue.title}  type="text" name="title"/>
                    <label htmlFor="title">validate</label>
                </LabelCont>

                <LabelCont>
                    <label htmlFor="content">Content</label>
                    <MyEditor content={questionValue} onChange={(code:any) => setQuestionValue(code)}/>
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
                        {tags.map((tag:string , index:number) => <div key={index}>{tag}</div>)}
                        <input onKeyDown={createTag} type="text" name="tags"/>
                    </div>
                </LabelCont>

                <button type="submit">Post</button>
            </QuestionCreateForm>
        </QuestionCreateModal>
    )
}

export default CreateQuestionModal
