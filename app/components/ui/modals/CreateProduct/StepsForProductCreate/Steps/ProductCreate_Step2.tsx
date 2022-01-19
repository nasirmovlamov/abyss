import {
  CreateProductLabelCont,
  CreateProductStep2_CONT_STY,
  CreateProduct_ClipsCont_STY,
  CreateProduct_DragCont_STY,
  CreateProduct_TagsCont_STY,
  CreateProduct_Tags_STY,
} from '../../../../../../styles/ui/modules/CreateProduct_Style/Steps/CreateProduct_Step2.style'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import {
  ProductCreateStep2OnChanges,
  addNewSection,
  changeClipPosition,
  deleteClip,
  deleteSection,
  product_create_step2_data,
  sections_product,
  updateKey,
  updateLabel,
  updateSectionsOrder,
} from '../../../../../../store/slices/CreateProductFeatures/CreateProduct.slice'
import { useAppDispatch, useAppSelector } from '../../../../../../store/states/store.hooks'

import EditorForProductCreate from '../../../../../modules/editors/EditorForProductCreate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SectionOfProduct } from '../../../../../../store/states/interfaces/CreateProduct.interface'
import { addFile } from '../../../../../../store/thunks/CreateProduct.thunk'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { getClipsIndex } from '../../../../../../helpers/functions/CreateProduct'
import { useState } from 'react'

interface Props {}

export const ProductCreate_Step2 = (props: Props) => {
  const [tagCreator, settagCreator] = useState('')

  const dispatch = useAppDispatch()
  const sectionsProduct = useAppSelector(sections_product)
  const createProductStep2 = useAppSelector(product_create_step2_data)
  const { validators, validated, details_data } = createProductStep2
  const productName = createProductStep2.details_data.product_name
  const product_tags = details_data.product_tags

  function handleOnDragEnd(result: any) {
    if (result.source.droppableId === 'main') {
      if (!result.destination) return
      const items = Array.from(sectionsProduct)
      const [reorderedItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderedItem)
      dispatch(updateSectionsOrder(items))
    } else if (result.destination.droppableId === 'main-clip') {
      if (!result.destination) return
      const items = Array.from(sectionsProduct[getClipsIndex(sectionsProduct)].isClips.clips)
      const [reorderedItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index - 1, 0, reorderedItem)
      dispatch(changeClipPosition(items))
    } else if (result.source.droppableId === 'clips') {
      if (result.source.draggableId === 'main-clip-drg-id') {
        if (!result.destination) return
        const items = Array.from(sectionsProduct[getClipsIndex(sectionsProduct)].isClips.clips)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        dispatch(changeClipPosition(items))
      }
      if (!result.destination) return
      const items = Array.from(sectionsProduct[getClipsIndex(sectionsProduct)].isClips.clips)
      const [reorderedItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderedItem)
      dispatch(changeClipPosition(items))
    }
  }

  const addNewBlock = () => {
    dispatch(addNewSection(null))
    return null
  }
  const deleteBlock = (index: number) => {
    dispatch(deleteSection(index))
  }
  const createTag = (event: any) => {
    if (event.code === 'Space') {
      dispatch(
        ProductCreateStep2OnChanges({
          type: 'product_tags',
          actionType: 'add',
          value: event.target.value,
        }),
      )
      event.target.value = ''
    }
  }
  const deleteTag = (id: number) => {
    dispatch(ProductCreateStep2OnChanges({ type: 'product_tags', actionType: 'delete', id: id }))
  }
  const productsOnBlurs = (type: string) => {
    // dispatch(ProductCreateStep2OnBlurs({type:type}))
  }
  const productNameHandle = (e: any) => {
    dispatch(ProductCreateStep2OnChanges({ type: 'product_name', value: e.target.value }))
  }

  return (
    <CreateProductStep2_CONT_STY>
      <CreateProductLabelCont key={0}>
        <label className="title" htmlFor="title">
          Title
        </label>
        <input className="input1" value={productName} onChange={productNameHandle} type="text" />
        <label className="error" htmlFor="title">
          {validated === 'not-valid' &&
            !validators.isNameFilled.valid &&
            validators.isNameFilled.message}
        </label>
      </CreateProductLabelCont>

      <CreateProductLabelCont key={0}>
        {sectionsProduct[0].isEditor && (
          <input className="title editorTitle" type="text" value={sectionsProduct[0].label_key} />
        )}
        {sectionsProduct[0].isEditor && (
          <EditorForProductCreate
            display={'block'}
            content={sectionsProduct[0].label_value}
            onChange={(content: any) => dispatch(updateLabel({ index: 0, content: content }))}
          />
        )}
        {sectionsProduct[0].isEditor && (
          <label className="error" htmlFor="title">
            {validated === 'not-valid' &&
              !validators.isDescriptionFilled.valid &&
              validators.isDescriptionFilled.message}
          </label>
        )}
      </CreateProductLabelCont>

      <CreateProductLabelCont key={1}>
        {sectionsProduct[1].isEditor && (
          <input className="title editorTitle" type="text" value={sectionsProduct[1].label_key} />
        )}
        {sectionsProduct[1].isEditor && (
          <EditorForProductCreate
            display={'block'}
            content={sectionsProduct[1].label_value}
            onChange={(content: any) => dispatch(updateLabel({ index: 1, content: content }))}
          />
        )}
        {sectionsProduct[1].isEditor && (
          <label className="error" htmlFor="title">
            {validated === 'not-valid' &&
              !validators.isApplicabilityFilled.valid &&
              validators.isApplicabilityFilled.message}
          </label>
        )}
      </CreateProductLabelCont>

      <CreateProductLabelCont key={2}>
        {sectionsProduct[2].isEditor && (
          <input className="title editorTitle" type="text" value={sectionsProduct[2].label_key} />
        )}
        {sectionsProduct[2].isEditor && (
          <EditorForProductCreate
            display={'block'}
            content={sectionsProduct[2].label_value}
            onChange={(content: any) => dispatch(updateLabel({ index: 2, content: content }))}
          />
        )}
        {sectionsProduct[2].isEditor && (
          <label className="error" htmlFor="title">
            {validated === 'not-valid' &&
              !validators.isProblemFormulationFilled.valid &&
              validators.isProblemFormulationFilled.message}
          </label>
        )}
      </CreateProductLabelCont>

      <CreateProduct_TagsCont_STY>
        <label htmlFor="" className="titleTags">
          Tags
        </label>
        <CreateProduct_Tags_STY style={{ display: 'flex', columnGap: '10px' }}>
          {product_tags.map((element: any) => (
            <div key={element.id} className="tag">
              {element.value}
              <button onClick={() => deleteTag(element.id)} className="deleteTag">
                x
              </button>
            </div>
          ))}
          <input onKeyDown={createTag} />
        </CreateProduct_Tags_STY>
        <label className="error">
          {validated === 'not-valid' &&
            !validators.isTagsFilled.valid &&
            validators.isTagsFilled.message}
        </label>
      </CreateProduct_TagsCont_STY>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="main">
          {(provided, snapshot) => (
            <CreateProduct_DragCont_STY
              key={'77'}
              style={{
                // background: snapshot.isDraggingOver
                //     ? "black"
                //     : "gray",
                width: '100%',
              }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {sectionsProduct.map(
                (
                  { id, label_key, label_value, isEditor, isClips }: SectionOfProduct,
                  index: any,
                ) => {
                  if (index > 2) {
                    return (
                      <Draggable draggableId={id.toString()} index={index} key={id}>
                        {(provided, snapshot) => (
                          <div
                            key={id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            style={{
                              userSelect: 'none',
                              margin: '0 0 8px 0',
                              minHeight: '50px',
                              ...provided.draggableProps.style,
                            }}
                          >
                            <CreateProductLabelCont className="customBlock">
                              {isEditor && (
                                <button
                                  className="delEditorBtn"
                                  disabled={id === 1 || id === 2 || id === 3}
                                  type="button"
                                  onClick={() => dispatch(deleteSection({ index: index }))}
                                >
                                  x
                                </button>
                              )}
                              <span {...provided.dragHandleProps} className="dragEditorBtn">
                                <FontAwesomeIcon icon={faEllipsisH} />
                              </span>
                              {isEditor && (
                                <input
                                  className="title editorTitle"
                                  type="text"
                                  value={label_key}
                                  onChange={(e: any) =>
                                    dispatch(updateKey({ index: index, content: e.target.value }))
                                  }
                                />
                              )}
                              {isEditor && (
                                <EditorForProductCreate
                                  display={'block'}
                                  content={label_value}
                                  onChange={(content: any) =>
                                    dispatch(updateLabel({ index: index, content: content }))
                                  }
                                />
                              )}
                              {/* {isEditor &&<label htmlFor="title">validate</label>} */}
                              {isClips.status && (
                                <CreateProduct_ClipsCont_STY>
                                  {isClips.status && (
                                    <input
                                      className="titleClips"
                                      type="text"
                                      disabled={true}
                                      value={label_key}
                                    />
                                  )}
                                  <div className="clipsSectionCont">
                                    <Droppable droppableId="main-clip" type={`main-clip`}>
                                      {(provided, snapshot) => (
                                        <div {...provided.droppableProps} ref={provided.innerRef}>
                                          <div
                                            className="clipsLeftSection"
                                            style={{
                                              userSelect: 'none',
                                              // backgroundColor: snapshot.isDragging
                                              // ? "red"
                                              // : "pink",
                                              width: '100%',
                                            }}
                                          >
                                            {isClips.clips[0] && (
                                              <img
                                                width={'450px'}
                                                className="imgPreview"
                                                id="imgPreview"
                                                src={isClips.clips[0].src}
                                                alt=""
                                              />
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </Droppable>

                                    <Droppable droppableId="clips" type={`clips`}>
                                      {(provided, snapshot) => (
                                        <div
                                          className="clipsRightSection"
                                          style={{
                                            // background: snapshot.isDraggingOver
                                            // // ? "lightblue"
                                            // // : "lightgrey",
                                            width: '100%',
                                          }}
                                          {...provided.droppableProps}
                                          ref={provided.innerRef}
                                        >
                                          {isClips.clips.map(({ id, src }, index) => {
                                            return (
                                              <Draggable
                                                key={id}
                                                draggableId={id.toString()}
                                                index={index}
                                              >
                                                {(provided, snapshot) => (
                                                  <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    style={{
                                                      userSelect: 'none',
                                                      margin: '0 0 8px 0',
                                                      // backgroundColor: snapshot.isDragging
                                                      // ? "#263B4A"
                                                      // : "#456C86",
                                                      color: 'white',
                                                      ...provided.draggableProps.style,
                                                    }}
                                                    className="clipItem"
                                                  >
                                                    <img
                                                      className="imgPreview"
                                                      id="imgPreview"
                                                      src={src}
                                                      width="auto"
                                                      height="100px"
                                                      alt=""
                                                    />
                                                    <span
                                                      className="move"
                                                      style={{
                                                        marginRight: '10px',
                                                        color: 'black',
                                                      }}
                                                      {...provided.dragHandleProps}
                                                    >
                                                      <FontAwesomeIcon icon={faEllipsisH} />
                                                    </span>
                                                    {id}
                                                    <button
                                                      type="button"
                                                      className="del"
                                                      onClick={() =>
                                                        dispatch(deleteClip({ index: index }))
                                                      }
                                                    >
                                                      x
                                                    </button>
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

                                  <button className="addClipImage">
                                    <p className="text">Upload File</p>
                                    <input
                                      onChangeCapture={(e: any) =>
                                        dispatch(addFile(e.target.files[0]))
                                      }
                                      value={''}
                                      type="file"
                                      placeholder="add Image"
                                    />
                                  </button>
                                </CreateProduct_ClipsCont_STY>
                              )}
                            </CreateProductLabelCont>
                          </div>
                        )}
                      </Draggable>
                    )
                  } else {
                    return null
                  }
                },
              )}
              {provided.placeholder}
            </CreateProduct_DragCont_STY>
          )}
        </Droppable>
      </DragDropContext>

      <button
        type="button"
        className="addNewSection"
        onClick={addNewBlock}
        disabled={sectionsProduct.length > 7}
      >
        <p>Add new block</p>{' '}
      </button>
    </CreateProductStep2_CONT_STY>
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
