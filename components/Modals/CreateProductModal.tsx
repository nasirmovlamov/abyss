import React, { ReactElement, useEffect, useState } from 'react'
import { changeModalAction } from '../../app/feature/UserSlice'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import {BASE_API_INSTANCE} from '../../helpers/api/BaseInstance'
import { accessToken } from '../../helpers/token/TokenHandle'
import { getKeyValue } from '../../logic/getKeyValue'
import { ProductCreateForm, ProductCreateModal, ProductLabelCont } from '../../styles/components/styled-elements/CreateProductModal.style'
import { Title } from '../../styles/components/styled-elements/FormQuestion.style'
import MyEditor from '../MyEditor'
import { autoErrorToaster } from '../Notify/AutoErrorToaster'
import { autoSuccessToaster } from '../Notify/AutoSuccessToast'
import { errorToastFunc } from '../Notify/ErrorToasts'
import {DragDropContext, Droppable , Draggable} from 'react-beautiful-dnd'
import {  addNewSection, deleteSection, deleteClip, sections_product, updateKey, updateLabel, updateSectionsOrder, changeClipPosition } from '../../app/feature/CreateProductSlice'
import { SectionOfProduct } from '../../app/store/state-Interfaces/CreateProductInterface'
import { faRulerVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { getClipsIndex } from '../../logic/createProduct'
import { addFile } from '../../app/thunks/CreateProductThunk'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

interface Props {
}





function CreateProductModal(this: any, {}: Props): ReactElement {

    const sectionsProduct = useAppSelector(sections_product)
    const dispatch = useAppDispatch()
    const [productCode, setproductCode] = useState<string>()
    

    



    function handleOnDragEnd(result:any) {
        console.log(result)
        if(result.source.droppableId === 'main')
        {
            if (!result.destination) return;
            console.log(result)
            const items = Array.from(sectionsProduct);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            dispatch(updateSectionsOrder(items));
        }
        else if (result.destination.droppableId === 'main-clip')
        {
            if (!result.destination) return;
            const items = Array.from(sectionsProduct[getClipsIndex(sectionsProduct)].isClips.clips)
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index-1, 0, reorderedItem);
            console.log(items)
            dispatch(changeClipPosition(items))
        }
        else if (result.source.droppableId === 'clips')
        {
            if(result.source.draggableId === "main-clip-drg-id") 
            {
                if (!result.destination) return;
                const items = Array.from(sectionsProduct[getClipsIndex(sectionsProduct)].isClips.clips)
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);
                dispatch(changeClipPosition(items))
            }
            if (!result.destination) return;
            const items = Array.from(sectionsProduct[getClipsIndex(sectionsProduct)].isClips.clips)
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            dispatch(changeClipPosition(items))
        }
    }
    


    
  





    const addNewBlock = (index:number , content:any) =>{
        dispatch(addNewSection(null))
        return null
    }

    const deleteBlock = (index:number) =>{
        console.log(index)
        dispatch(deleteSection(index))
    }


    useEffect(() => {
        // console.log(sectionsProduct)
    }, [sectionsProduct])

    
    

    const getCodefromfile = (file:any) => {
        const reader = new FileReader();
        let textFile = /text.*/;
         if (file.type.match(textFile)) {
            reader.onload = function (event) {
               setproductCode(event.target.result);
            }
         } else {
            alert("IT IS NOT TEXT FILE")
         }
         reader.readAsText(file);
    }
    

    return (
        <ProductCreateModal>
            <ProductCreateForm>
                <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                    <button type="button" onClick={() => dispatch(changeModalAction('productCreate'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                </div>
                <button >get code from file <input  value={""} type="file" placeholder="add Image" onChange={(e) => getCodefromfile(e.target.files[0])} /></button>

                <CodeMirror
                value={productCode}
                height="200px"
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                    setproductCode(value);
                }}
                />


                <div  key={0}   style={{
                    userSelect: "none",
                    padding: 16,
                    margin: "0 0 8px 0",
                    backgroundColor: "#263B4A",
                    color: "white",
                    height: "auto",
                    }}>   
                    <ProductLabelCont >
                        <span   style={{marginRight:"10px" , color:"gray"}} ><FontAwesomeIcon  icon={faRulerVertical}  >block</FontAwesomeIcon></span>
                        {sectionsProduct[0].isEditor && <input type='text' value={sectionsProduct[0].label_key}  />}
                        {sectionsProduct[0].isEditor && <MyEditor content={sectionsProduct[0].label_value}  onChange={(content:any) => dispatch(updateLabel({index:0 , content:content}))}/>}
                        {sectionsProduct[0].isEditor && <label htmlFor="title">validate</label>}
                    </ProductLabelCont>
                </div>

                <div  key={1}   style={{
                    userSelect: "none",
                    padding: 16,
                    margin: "0 0 8px 0",
                    backgroundColor: "#263B4A",
                    color: "white",
                    height: "auto",
                    }}>   
                    <ProductLabelCont >
                        <span   style={{marginRight:"10px" , color:"gray"}} ><FontAwesomeIcon  icon={faRulerVertical}  >block</FontAwesomeIcon></span>
                        {sectionsProduct[1].isEditor && <input type='text' value={sectionsProduct[1].label_key}  />}
                        {sectionsProduct[1].isEditor && <MyEditor content={sectionsProduct[1].label_value}  onChange={(content:any) => dispatch(updateLabel({index:1 , content:content}))}/>}
                        {sectionsProduct[1].isEditor && <label htmlFor="title">validate</label>}
                    </ProductLabelCont>
                </div>




                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="main" >
                        {(provided , snapshot) => (
                            <div key={"77"}  style={{
                                background: snapshot.isDraggingOver
                                  ? "lightblue"
                                  : "lightgrey",
                                padding: 4,
                                width: "100%",
                              }} {...provided.droppableProps} ref={provided.innerRef}>
                                {sectionsProduct.map(({id , label_key , label_value , isEditor , isClips}:SectionOfProduct, index) => {
                                    if(index > 1) 
                                    {
                                        return (
                                            <Draggable draggableId={id.toString()} index={index}  key={id}>
                                                {(provided , snapshot) => (
                                                    <div  key={id}  ref={provided.innerRef} {...provided.draggableProps} style={{
                                                        userSelect: "none",
                                                        padding: 16,
                                                        margin: "0 0 8px 0",
                                                        minHeight: "50px",
                                                        backgroundColor: snapshot.isDragging
                                                          ? "#263B4A"
                                                          : "#456C86",
                                                        color: "white",
                                                        ...provided.draggableProps.style
                                                      }}>   
                                                        <ProductLabelCont >
                                                            {isEditor &&<button disabled={id === 1 ||  id === 2 || id === 3} type='button' onClick={()=>dispatch(deleteSection({index:index}))}>x</button>}
                                                            <span {...provided.dragHandleProps}  style={{marginRight:"10px" , color:"black"}} ><FontAwesomeIcon  icon={faRulerVertical}  >block</FontAwesomeIcon></span>
                                                            {isClips.status && <input type='text' disabled={true} value={label_key} />}
                                                            {isEditor &&<input type='text' value={label_key} onChange={(e:any) => dispatch(updateKey({index:index , content:e.target.value}))} />}
                                                            {isEditor && <MyEditor content={label_value}  onChange={(content:any) => dispatch(updateLabel({index:index , content:content}))}/>}
                                                            {isEditor &&<label htmlFor="title">validate</label>}
                                                            {isClips.status && 
                                                                <div style={{display:"flex" , flexDirection:"column"}}>
                                                                    <div style={{width:'100%', minHeight:'450px', display:'flex' }}>
                                                                                <div  style={{
                                                                                    width: "100%",
                                                                                    backgroundColor: snapshot.isDraggingOver
                                                                                                    ? "lightred"
                                                                                                    : "green",
                                                                                }} >
                                                                                                <div  style={{
                                                                                                    userSelect: "none",
                                                                                                    padding: 16,
                                                                                                    margin: "0 0 8px 0",
                                                                                                    backgroundColor: snapshot.isDragging
                                                                                                    ? "red"
                                                                                                    : "pink",
                                                                                                    color: "white",
                                                                                                    width: "100%",
                                                                                                    ...provided.draggableProps.style
                                                                                                }}>
                                                                                                    {isClips.clips[0] && <img width={"100%"}  className="imgPreview" id="imgPreview" src={isClips.clips[0].src} alt=""/>}
                                                                                                    {/* {id2} */}
                                                                                                    <button type="button" onClick={() => dispatch(deleteClip(index))}>delete img</button>
                                                                                                </div>  
                                                                                </div>
                                                                                    
                                                                            <Droppable droppableId="clips"  type={`clips`}>
                                                                                {(provided , snapshot) => (
                                                                                    <div  style={{
                                                                                        background: snapshot.isDraggingOver
                                                                                        ? "lightblue"
                                                                                        : "lightgrey",
                                                                                        padding: 4,
                                                                                        width: "500px",
                                                                                    }} {...provided.droppableProps} ref={provided.innerRef}>
                                                                                        
    
    
                                                                                        
    
    
                                                                                        {isClips.clips.map(({id, src}, index) => {
                                                                                            return (
                                                                                                <Draggable key={id} draggableId={id.toString()} index={index}>
                                                                                                    {(provided , snapshot) => (
                                                                                                        <div  ref={provided.innerRef} {...provided.draggableProps} style={{
                                                                                                            userSelect: "none",
                                                                                                            padding: 16,
                                                                                                            margin: "0 0 8px 0",
                                                                                                            backgroundColor: snapshot.isDragging
                                                                                                            ? "#263B4A"
                                                                                                            : "#456C86",
                                                                                                            color: "white",
                                                                                                            
                                                                                                            ...provided.draggableProps.style
                                                                                                        }}>
                                                                                                            <img className="imgPreview" id="imgPreview" src={src} width="auto" height="100px" alt=""/>
                                                                                                            <span style={{marginRight:"10px" , color:"black"}} {...provided.dragHandleProps}><FontAwesomeIcon icon={faRulerVertical}  >block</FontAwesomeIcon></span>
                                                                                                            {id}
                                                                                                            <button type="button" onClick={() => dispatch(deleteClip({index:index}))}>delete img</button>
                                                                                                        </div>  
                                                                                                    )}
                                                                                                </Draggable>
                                                                                            )
                                                                                        })}
    
    
                                                                                        {provided.placeholder}
                                                                                    </div>
                                                                                )}
                                                                            </Droppable>
    
                                                                    </div>
                                                                    <button><input onChangeCapture={(e) => dispatch(addFile(e.target.files[0]))} value={""} type="file" placeholder="add Image"/></button>
                                                                </div>
                                                            }
    
    
    
                                                        </ProductLabelCont>
                                                    </div>
                                                )}
                                            </Draggable>
                                        )
                                    } 
                                    else 
                                    {
                                        return <div></div>
                                    }
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                {/* <ProductLabelCont>
                    <input type='text' defaultValue={"Description"} />
                    <MyEditor content={questionValue} onChange={(code:any) => setQuestionValue(code)}/>
                    <label htmlFor="title">validate</label>
                </ProductLabelCont>

                <ProductLabelCont>
                    <input type='text' defaultValue={"Aplicability"} />
                    <MyEditor content={questionValue} onChange={(code:any) => setQuestionValue(code)}/>
                    <label htmlFor="title">validate</label>
                </ProductLabelCont> */}


                

                


                
                <button type="button" disabled={sectionsProduct.length > 7} onClick={addNewBlock}>add new block</button>
                <button type="submit">Post</button>
            </ProductCreateForm>
        </ProductCreateModal>
    )
}

export default CreateProductModal
