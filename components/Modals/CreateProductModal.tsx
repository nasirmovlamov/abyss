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
import { addNewSection, deleteSection, sections_product, updateKey, updateLabel, updateSectionsOrder } from '../../app/feature/CreateProductSlice'
import { SectionOfProduct } from '../../app/store/state-Interfaces/CreateProductInterface'
import { faRulerVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
}





function CreateProductModal(this: any, {}: Props): ReactElement {

    const sectionsProduct = useAppSelector(sections_product)
    const [clips, setclips] = useState<{id2:number , src:strng}[]>([])
    



    const dispatch = useAppDispatch()

    

    



    function handleOnDragEnd(result:any) {
        if(result.source.droppableId === 'main')
        {
            if (!result.destination) return;
            console.log(result)
            const items = Array.from(sectionsProduct);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            dispatch(updateSectionsOrder(items));
        }
        else if (result.source.droppableId === 'clips')
        {
            if (!result.destination) return;
            const items = Array.from(clips);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            setclips(items)
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
        console.log(sectionsProduct)
    }, [sectionsProduct])


    


    const [isLoading, setIsLoading] = useState(false);

    const addClip = (e) => {
        if(e.target.files[0]) {
            setclips(
            [...clips , 
            {
                id2: Date.now(),
                src: URL.createObjectURL(e.target.files[0]),
            }
            ])    
        }   
    }
    const deleteClip = (index) => {
        let oldclips = [...clips] 
        oldclips.splice(index, 1)
        setclips(oldclips)
    }

    return (
        <ProductCreateModal>
            <ProductCreateForm>
                <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                    <button type="button" onClick={() => dispatch(changeModalAction('productCreate'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
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
                                                        <span {...provided.dragHandleProps}  style={{marginRight:"10px" , color:"black"}} ><FontAwesomeIcon icon={faRulerVertical}  >block</FontAwesomeIcon></span>
                                                        {isClips && <input type='text' disabled={true} value={label_key} />}
                                                        {isEditor &&<input type='text' value={label_key} onChange={(e:any) => dispatch(updateKey({index:index , content:e.target.value}))} />}
                                                        {isEditor && <MyEditor content={label_value}  onChange={(content:any) => dispatch(updateLabel({index:index , content:content}))}/>}
                                                        {isEditor &&<label htmlFor="title">validate</label>}
                                                        {isClips && 
                                                            <div style={{width:'100%', height:'450px', display:'flex' , flexDirection:'column'}}>
                                                                <Droppable droppableId="clips"  type={`${1}`}>
                                                                    {(provided , snapshot) => (
                                                                        <div  style={{
                                                                            background: snapshot.isDraggingOver
                                                                            ? "lightblue"
                                                                            : "lightgrey",
                                                                            padding: 4,
                                                                            width: "100%",
                                                                        }} {...provided.droppableProps} ref={provided.innerRef}>
                                                                            {clips.map(({id2, src}, index) => {
                                                                                return (
                                                                                    <Draggable key={id2} draggableId={id2.toString()} index={index}>
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
                                                                                                {id2}
                                                                                                <button type="button" onClick={() => deleteClip(index)}>delete img</button>
                                                                                            </div>  
                                                                                        )}
                                                                                    </Draggable>
                                                                                )
                                                                            })}
                                                                            {provided.placeholder}
                                                                        </div>
                                                                    )}
                                                                </Droppable>

                                                                <button><input onChangeCapture={addClip} value={""} type="file" placeholder="add Image"/></button>
                                                            </div>
                                                        }



                                                    </ProductLabelCont>
                                                </div>
                                            )}
                                        </Draggable>
                                    );
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
