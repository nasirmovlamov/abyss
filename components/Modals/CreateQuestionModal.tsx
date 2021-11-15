import React, { ReactElement, useEffect, useState } from 'react'
import { changeModalAction } from '../../app/feature/UserSlice'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import {BASE_API_INSTANCE} from '../../helpers/api/BaseInstance'
import { getKeyValue } from '../../logic/getKeyValue'
import { LabelCont, QuestionCreateForm, QuestionCreateModal } from '../../styles/components/styled-elements/CreateQuestionModal.style'
import { Title } from '../../styles/components/styled-elements/FormQuestion.style'
import MyEditor from '../MyEditor'
import {  autoErrorToaster } from '../Notify/AutoErrorToaster'
import { errorToastFunc } from '../Notify/ErrorToasts'
import Image from 'next/image'
import { autoSuccessToaster , autoErrorToasterWithMessage } from '../Notify/AutoSuccessToast'
// import {EditorNewVersion} from '../EditorNewVersion'
// import EditorClassVersion from '../EditorClassVersion'

import dynamic from 'next/dynamic'
import { linked_products, mentioned_users, question_value } from '../../app/feature/CreateQuestionFeatures/CreateQuestionFeatures'

const DynamicComponentWithNoSSR = dynamic(
    () => import('../EditorForQuestionCreateMentions'),
    { ssr: false }
)
interface Props {
}


function CreateQuestionModal({}: Props): ReactElement {
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

            console.log(linkedProducts)
            const formData = new FormData()


            formData.append("category_id" , category)
            formData.append("title" , questionValue.title)
            formData.append("content" , questionContent)
            formData.append("tags" , JSON.stringify(tags))
            formData.append("linked_products" , JSON.stringify(idOFLinkedProducts))
            formData.append("mentioned_users" , JSON.stringify(idOFMentionedUsers))
            const resp = await BASE_API_INSTANCE.post("/forum/create", formData) 
            autoSuccessToaster(resp.data.message)
            console.log(resp.data.message)
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
    

//     const getLinkedProductswithURL = async (e:any) => {
//         let paste = (e.clipboardData).getData('text');
//         console.log(paste)
//         const value = paste
//         const id = paste.split("/")[4]
//         const slug = paste.split("/")[5]
//         if(!linkedProducts.includes(parseInt(id)))
//         {
//             try {
//                 const resp = await BASE_API_INSTANCE.get(`/store/${id}/${slug}`)
//                 setsearchProductQuery('')
//                 setlinkedProducts([...linkedProducts, parseInt(id)])
//                 const product = {id:parseInt(id), name:resp.data.data.name, avatar:""}
//                 setlinkedProductsWithObject([...linkedProductsWithObject, product])
//                 console.log(linkedProductsWithObject)
//             } catch (error) {
                
//             }
//         }else 
//         {
//             autoErrorToasterWithMessage("Product already added")
//         }
        
//     }


//     const getLinkedProductswithquery = async () => {
//         const urldetector = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm

//         if(searchProductQuery.length > 0 && !urldetector.test(searchProductQuery))
//         {
//             try {
//                 const resp = await BASE_API_INSTANCE.get(`/forum/product/${searchProductQuery}`)
//                 const products = resp.data.data.map((element:any) => {return {name:element.name , id:element.id , avatar:""}})
//                 setsearchedProducts(products)   
//             } catch (error) {
//                 autoErrorToasterWithMessage("Product not exist")
//             }
//         } 
       
        
//     }


//    const addSearchedProduct = (id:number) => {
//         if(!linkedProducts.includes(id))
//         {
//             const product = searchedProducts.find((element:any) => element.id === id)
//             if(product)
//             {
//                 setlinkedProducts([...linkedProducts, id])
//                 setlinkedProductsWithObject([...linkedProductsWithObject, product])
//                 // setsearchProductQuery('')
//             }
//         }else
//         {
//             autoErrorToasterWithMessage("Product already added")
//         }
//     }

        
    
    // useEffect(() => {
    //     getLinkedProductswithquery()
    // }, [searchProductQuery])


    // const deleteLinkedProduct = (id:number) => {
    //     const newLinkedProducts = linkedProducts.filter((item:number) => item !== id)
    //     const newLinkedProductsWithObject = linkedProductsWithObject.filter((item:any) => item.id !== id)
    //     setlinkedProducts(newLinkedProducts)
    //     setlinkedProductsWithObject(newLinkedProductsWithObject)
    // }

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
                    <MyEditor  display={"none"} content={questionValue.content} onChange={(content:any) => console.log(content)} />
                    <label htmlFor="content">validate</label>
                </LabelCont>


                <LabelCont>
                    <label htmlFor="content">Content</label>
                    {inBrowser && <DynamicComponentWithNoSSR/>}
                    {/* <EditorNewVersion/> */}
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


                <LabelCont>
                    <label htmlFor="title">Mention Products</label>
                    <div className="tags d-f " style={{flexDirection:"column", rowGap:"10px", height:"auto"}}>
                        <div style={{display:"flex"}}>
                            <input 
                                // onChange={(e:any) => setlinkedProductQuery(e.target.value)} 
                                value={searchProductQuery} 
                                onChange={ProductLinkHandler} 
                                // onPaste={getLinkedProductswithURL}
                                type="text" 
                                name="tags"/>
                            {/* <button>Add from Link</button> */}
                        </div>
                        <div style={{display:'flex' , columnGap:"10px" , rowGap:"10px" , flexWrap:"wrap" , width:"500px" , padding:"10px" , height:'auto', justifyContent:"flex-start", paddingLeft:"0px"}}>
                            {
                                searchedProducts.map((searchedProduct:any , index:number) => 
                                <div key={index} style={{display:"flex" , flexDirection:"column" , border:"1px solid gray" , width:"200px" , height:"auto" , background:"lightgray"}}>
                                    {/* <Image src={linkedProduct.avatar} alt={linkedProduct.title  +  " image"} /> */}
                                    {/* <button type='button' onClick={() => addSearchedProduct(searchedProduct.id)}>add</button> */}
                                    <p style={{textAlign:"center"}}>{searchedProduct.name}</p>
                                </div>
                            )}
                        </div>

                        <div style={{display:'flex' , columnGap:"10px" , rowGap:"10px" , flexWrap:"wrap" , width:"500px" , padding:"10px" , height:'auto', justifyContent:"flex-start", paddingLeft:"0px"}}>
                            {
                                linkedProductsWithObject.map((linkedProduct:any , index:number) => 
                                <div key={index} style={{display:"flex" , flexDirection:"column" , border:"1px solid gray" , width:"200px" , height:"auto" , background:"lightgray"}}>
                                    {/* <Image src={linkedProduct.avatar} alt={linkedProduct.title  +  " image"} /> */}
                                    {/* <button type='button' onClick={() => deleteLinkedProduct(linkedProduct.id)}>del</button> */}
                                    <p style={{textAlign:"center"}}>{linkedProduct.name}</p>
                                    <p style={{textAlign:"center"}}>{linkedProduct.id}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </LabelCont>

                <button type="submit">Post</button>
            </QuestionCreateForm>
        </QuestionCreateModal>
    )
}

export default CreateQuestionModal
