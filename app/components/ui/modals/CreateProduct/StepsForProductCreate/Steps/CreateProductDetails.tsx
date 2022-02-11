import RichEditor from 'app/components/ui/editors/RichEditor';
import { AddProductStepProps } from 'app/interfaces';
import {
  CreateProduct_Tags_STY,
  CreateProduct_TagsCont_STY,
  CreateProductLabelCont,
  CreateProductStep2_CONT_STY,
} from 'app/styles/styled-components/base/modules/CreateProduct_Style/Steps/CreateProduct_Step2.style';

interface CreateProductDetailsProps extends AddProductStepProps {
  addDetailBlock: () => void
  updateDetailBlock: (key: string, label?: string, value?: string) => void
  deleteDetailBlock: (key: string) => void
  addTag: (tag: string) => void
  deleteTag: (index: number) => void
}

const CreateProductDetails = ({
  state,
  handleValueChange,
  addDetailBlock,
  updateDetailBlock,
  deleteDetailBlock,
  addTag,
  deleteTag,
}: CreateProductDetailsProps) => {
  const createTag = (event: any) => {
    if (event.code === 'Space' || event.code === 'Enter') {
      if (event.target.value.trim()) {
        addTag(event.target.value)
        event.target.value = ''

        // Remove space created by keypress
        setTimeout(() => (event.target.value = ''))
      }
    }
  }

  return (
    <CreateProductStep2_CONT_STY>
      <CreateProductLabelCont>
        <label className="title" htmlFor="title">
          Title
        </label>
        <input
          className="input1"
          value={state.productTitle}
          onChange={(e) => handleValueChange('productTitle', e.target.value)}
          type="text"
        />
        <span className="error"></span>
      </CreateProductLabelCont>

      {state.details?.map((item) => (
        <CreateProductLabelCont key={item.key}>
          <input
            className="title editorTitle"
            type="text"
            value={item.label}
            onChange={(e) => updateDetailBlock(item.key, e.target.value, undefined)}
            readOnly={!item.isEditable}
          />
          {item.isEditable && (
            <button style={{ color: 'white' }} onClick={() => deleteDetailBlock(item.key)}>
              Delete block
            </button>
          )}

          <RichEditor
            contentValueChanged={(value) => updateDetailBlock(item.key, undefined, value)}
            value={item.value}
          />
        </CreateProductLabelCont>
      ))}

      <CreateProduct_TagsCont_STY>
        <label htmlFor="" className="titleTags">
          Tags
        </label>
        <CreateProduct_Tags_STY style={{ display: 'flex', columnGap: '10px' }}>
          {state.tags?.map((tag, index) => (
            <div key={Math.random().toString()} className="tag">
              {tag}
              <button onClick={() => deleteTag(index)} className="deleteTag">
                x
              </button>
            </div>
          ))}
          <input onKeyDown={createTag} />
        </CreateProduct_Tags_STY>
        <span className="error"></span>
      </CreateProduct_TagsCont_STY>

      <button
        type="button"
        className="addNewSection"
        onClick={addDetailBlock}
        disabled={state.details && state.details.length > 7}
      >
        <p>Add new block</p>
      </button>
    </CreateProductStep2_CONT_STY>
  )
}

export default CreateProductDetails
