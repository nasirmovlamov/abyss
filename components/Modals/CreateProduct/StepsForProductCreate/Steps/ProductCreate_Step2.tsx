import React, { useState } from 'react'
import {  addNewSection, deleteSection, deleteClip, sections_product, updateKey, updateLabel, updateSectionsOrder, changeClipPosition, product_create_step2_data, ProductCreateStep2OnChanges } from '../../../../../app/feature/CreateProductFeatures/CreateProduct.slice'
import { useAppDispatch, useAppSelector } from '../../../../../app/store/hooks';
import {DragDropContext, Droppable , Draggable} from 'react-beautiful-dnd'
import { SectionOfProduct } from '../../../../../app/store/state-Interfaces/CreateProductInterface'
import { faRulerVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { getClipsIndex } from '../../../../../logic/createProduct'
import EditorForProductCreate from '../../../../EditorForProductCreate'
import { Title } from '../../../../../styles/components/styled-elements/FormQuestion.style'
import {  ProductLabelCont } from '../../../../../styles/components/styled-elements/CreateProductModal.style'
import { addFile } from '../../../../../app/thunks/CreateProductThunks';


interface Props {
    
}

export const ProductCreate_Step2 = (props: Props) => {
    const [tagCreator, settagCreator] = useState('')

    const dispatch = useAppDispatch()
    const sectionsProduct = useAppSelector(sections_product)
    const createProductStep2 = useAppSelector(product_create_step2_data)
    const {validators , validated , details_data} = createProductStep2
    const productName = createProductStep2.details_data.product_name
    const product_tags = details_data.product_tags

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
    
    const addNewBlock = () =>{
        dispatch(addNewSection(null))
        return null
    }
    const deleteBlock = (index:number) =>{
        console.log(index)
        dispatch(deleteSection(index))
    }
    const createTag = (event:any) => {
        if(event.code === "Space")
        {
            dispatch(ProductCreateStep2OnChanges({type:"product_tags" , actionType:"add" , value:event.target.value}))
            event.target.value = ""
        }
    }
    const deleteTag = (id:number) => {
        dispatch(ProductCreateStep2OnChanges({type:"product_tags" , actionType:"delete" , id:id}))

    }   
    const productsOnBlurs = (type:string) => {
        // dispatch(ProductCreateStep2OnBlurs({type:type}))
    } 
    const productNameHandle = (e:any) => {  
        console.log(e.target.value)
        dispatch(ProductCreateStep2OnChanges({type:"product_name" , value:e.target.value}))
    }

    return (
        <div>
            
            
            <div  key={0}   style={{
                userSelect: "none",
                padding: 16,
                margin: "0 0 8px 0",
                backgroundColor: "#263B4A",
                color: "white",
                height: "auto",
                }}>   
                <ProductLabelCont >
                    <span   style={{marginRight:"10px" , color:"gray"}} ><FontAwesomeIcon  icon={faRulerVertical} /> block</span>
                    <input value={productName} onChange={productNameHandle} type="text"/>
                    <label style={{color:"red"}} htmlFor="title">{(validated === 'not-valid' && !validators.isNameFilled.valid) && validators.isNameFilled.message}</label>
                </ProductLabelCont>
            </div>



            <div  key={0}   style={{
                userSelect: "none",
                padding: 16,
                margin: "0 0 8px 0",
                backgroundColor: "#263B4A",
                color: "white",
                height: "auto",
                }}>   
                <ProductLabelCont >
                    <span   style={{marginRight:"10px" , color:"gray"}} ><FontAwesomeIcon  icon={faRulerVertical} /> block</span>
                    {sectionsProduct[0].isEditor && <input type='text' value={sectionsProduct[0].label_key}  />}
                    {sectionsProduct[0].isEditor && <EditorForProductCreate  display={"block"} content={sectionsProduct[0].label_value} onChange={(content:any) => dispatch(updateLabel({index:0 , content:content}))}/>}
                    {sectionsProduct[0].isEditor && <label style={{color:"red"}} htmlFor="title">{(validated === 'not-valid' && !validators.isDescriptionFilled.valid) && validators.isDescriptionFilled.message}</label>}
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
                    <span   style={{marginRight:"10px" , color:"gray"}} ><FontAwesomeIcon  icon={faRulerVertical}  />block</span>
                    {sectionsProduct[1].isEditor && <input type='text' value={sectionsProduct[1].label_key}  />}
                    {sectionsProduct[1].isEditor && <EditorForProductCreate display={"block"} content={sectionsProduct[1].label_value}  onChange={(content:any) => dispatch(updateLabel({index:1 , content:content}))}/>}
                    {sectionsProduct[1].isEditor && <label style={{color:"red"}} htmlFor="title">{(validated === 'not-valid' && !validators.isApplicabilityFilled.valid) && validators.isApplicabilityFilled.message}</label>}
                </ProductLabelCont>
            </div>

            <div  key={2}   style={{
                userSelect: "none",
                padding: 16,
                margin: "0 0 8px 0",
                backgroundColor: "#263B4A",
                color: "white",
                height: "auto",
                }}>   
                <ProductLabelCont >
                    <span   style={{marginRight:"10px" , color:"gray"}} ><FontAwesomeIcon  icon={faRulerVertical}  />block</span>
                    {sectionsProduct[2].isEditor && <input type='text' value={sectionsProduct[2].label_key}  />}
                    {sectionsProduct[2].isEditor && <EditorForProductCreate display={"block"} content={sectionsProduct[2].label_value}  onChange={(content:any) => dispatch(updateLabel({index:2 , content:content}))}/>}
                    {sectionsProduct[2].isEditor && <label style={{color:"red"}} htmlFor="title">{(validated === 'not-valid' && !validators.isProblemFormulationFilled.valid) && validators.isProblemFormulationFilled.message}</label>}
                </ProductLabelCont>
            </div>

            <div>
                <input onKeyDown={createTag}/>
                <div style={{display:"flex" , columnGap:"10px"}}>{product_tags.map
                (element => 
                    <div key={element.id} style={{display:"flex" , columnGap:"2px" , border:"1px solid gray"}}>
                        {element.value} 
                        <button onClick={() => deleteTag(element.id)}>del</button>
                    </div>
                )}
                </div>
                <div style={{color:'red'}}>{(validated === 'not-valid' && !validators.isTagsFilled.valid) && validators.isTagsFilled.message}</div>
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
                                if(index > 2) 
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
                                                        <span {...provided.dragHandleProps}  style={{marginRight:"10px" , color:"black"}} ><FontAwesomeIcon  icon={faRulerVertical}  />block</span>
                                                        {isClips.status && <input type='text' disabled={true} value={label_key} />}
                                                        {isEditor &&<input type='text' value={label_key} onChange={(e:any) => dispatch(updateKey({index:index , content:e.target.value}))} />}
                                                        {isEditor && <EditorForProductCreate display={"block"} content={label_value}  onChange={(content:any) => dispatch(updateLabel({index:index , content:content}))}/>}
                                                        {isEditor &&<label htmlFor="title">validate</label>}
                                                        {isClips.status && 
                                                            <div style={{display:"flex" , flexDirection:"column"}}>
                                                                <div style={{width:'100%', minHeight:'450px', display:'flex' }}>
                                                                            <div  style={{
                                                                                width: "100%",
                                                                                backgroundColor: snapshot.draggingOver
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
                                                                                                        <span style={{marginRight:"10px" , color:"black"}} {...provided.dragHandleProps}><FontAwesomeIcon icon={faRulerVertical}  />block</span>
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
                                                                <button><input onChangeCapture={(e:any) => dispatch(addFile(e.target.files[0]))} value={""} type="file" placeholder="add Image"/></button>
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


            <button type="button"  onClick={addNewBlock} disabled={sectionsProduct.length > 7} >add new block</button>
            
        </div>
    )
}









// <ProductLabelCont>
//     <input type='text' defaultValue={"Description"} />
//     <EditorForProductCreate content={questionValue} onChange={(code:any) => setQuestionValue(code)}/>
//     <label htmlFor="title">validate</label>
// </ProductLabelCont>

// <ProductLabelCont>
//     <input type='text' defaultValue={"Aplicability"} />
//     <EditorForProductCreate content={questionValue} onChange={(code:any) => setQuestionValue(code)}/>
//     <label htmlFor="title">validate</label>
// </ProductLabelCont> 