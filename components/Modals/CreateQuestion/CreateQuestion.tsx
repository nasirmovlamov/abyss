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
import { linked_products, mentioned_users, question_value } from '../../../app/feature/CreateQuestionFeatures/CreateQuestion.slice'
import * as CreateQuestion_STY from '../../../styles/components/styled-blocks/CreateThread_Style/CreateQuestion.style' 


const DynamicComponentWithNoSSR = dynamic(
    () => import('../../EditorForQuestionCreateMentions'),
    { ssr: false }
)
interface Props {
}


function CreateQuestion({}: Props): ReactElement {
    const [inBrowser, setinBrowser] = useState(false)
    const linkedProducts = useAppSelector(linked_products)
    const mentionedUsers = useAppSelector(mentioned_users)
    const [questionValue, setQuestionValue] = useState({title:"", content:""})
    const [tags, settags] = useState<string[]>([])
    const [searchedProducts, setsearchedProducts] = useState<{id:number, name:string, avatar:string}[]>([])
    const [linkedProductsWithObject, setlinkedProductsWithObject] = useState<{id:number, name:string, avatar:string}[]>([])
    const [searchProductQuery, setsearchProductQuery] = useState<string>('')
    const [mentionedProducts, setmentionedProducts] = useState([])

    const questionContent =  useAppSelector(question_value)

    const [category, setCategory] = useState<string>("1")

    const dispatch = useAppDispatch()

    const questionChange = (e:any) => {
        setQuestionValue({...questionValue, title:e.target.value})
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
            const idOFLinkedProducts = linkedProducts.map(element => element.id)
            const idOFMentionedUsers = mentionedUsers.map(element => element.id)
            const formData = new FormData()
            formData.append("category_id" , category)
            formData.append("title" , questionValue.title)
            formData.append("content" , questionContent)
            formData.append("tags" , JSON.stringify(tags))
            formData.append("linked_products" , JSON.stringify(idOFLinkedProducts))
            formData.append("mentioned_users" , JSON.stringify(idOFMentionedUsers))
            const resp = await BASE_API_INSTANCE.post("/forum/create", formData) 
            autoSuccessToaster(resp.data.message)
            dispatch(changeModalAction('questionCreate'))
        } catch (error:any) {
            autoErrorToaster(error.response.data)
            
        }
    }

    const ProductLinkHandler = async (e:any) => {
        const value = e.target.value
        setsearchProductQuery(value)
        // setlinkedProductQuery(value)
    } 

    useEffect(() => {
        setinBrowser(true)
    }, [])
    

    return (
            <CreateQuestion_STY.CreateQuestion_BLock >
                <div className='label-cont'>
                    <CreateQuestion_STY.CreateQuestion_Title1 htmlFor="title " className='title title1'>Title</CreateQuestion_STY.CreateQuestion_Title1>
                    <input className="input1" onChange={questionChange}  value={questionValue.title}  type="text" name="title"/>
                    <label htmlFor="title" className='error'>validate</label>
                </div>

                


                <LabelCont>
                    <label htmlFor="content" className='title'>Content</label>
                    {inBrowser && <DynamicComponentWithNoSSR/>}
                    <MyEditor  display={"none"} content={questionValue.content} onChange={(content:any) => console.log(content)} />
                    {/* <EditorNewVersion/> */}
                    <label htmlFor="content" className='error'>validate</label>
                </LabelCont>

                

                <LabelCont>
                    <label className='title'>Tags</label>
                    <div className="tags d-f ">
                        {tags.map((tag:string , index:number) => <div key={index}>{tag}</div>)}
                        <input onKeyDown={createTag} type="text" name="tags"/>
                    </div>
                    <label htmlFor="content" className='error'>validate</label>
                </LabelCont>


               

            </CreateQuestion_STY.CreateQuestion_BLock>
    )
}

export default CreateQuestion
