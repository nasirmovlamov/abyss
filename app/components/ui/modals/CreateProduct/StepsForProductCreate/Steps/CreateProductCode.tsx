import CodeEditor from 'app/components/ui/editors/CodeEditor';
import { AddProductStepProps } from 'app/interfaces';
import {
  is_product_created,
  product_create_step1_data,
  ProductCreateStep1OnChanges,
} from 'app/store/slices/CreateProductFeatures/CreateProduct.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import {
  CreateProduct_Step1_Error,
  ProductCreate_Step1_Style,
  SelectLangType_STY,
} from 'app/styles/styled-components/base/modules/CreateProduct_Style/Steps/ProductCreate_Step1.style';
import HashLoader from 'react-spinners/HashLoader';

interface CreateProductCodeProps extends AddProductStepProps {
  supportedLangs: { key: string; label: string }[]
}

const CreateProductCode = ({
  state,
  handleValueChange,
  supportedLangs,
}: CreateProductCodeProps) => {
  const dispatch = useAppDispatch()
  const productCreateStep1Data = useAppSelector(product_create_step1_data)
  const productCreation = useAppSelector(is_product_created)
  const { validators } = productCreateStep1Data

  const getCodefromfile = (file: any) => {
    const reader = new FileReader()
    let textFile = /text.*/
    if (file.type.match(textFile)) {
      reader.onload = function (event: any) {
        dispatch(ProductCreateStep1OnChanges(event.target.result))
      }
    } else {
      alert('IT IS NOT TEXT FILE')
    }
    reader.readAsText(file)
  }

  return (
    <ProductCreate_Step1_Style>
      <div className="topCont">
        <p className="codeWord">
          <span> Code </span>{' '}
        </p>
        <div className="upload">
          <p className="info">Upload your code as a file (e.g js php c) or enter it below</p>
          <button>
            <input
              value={''}
              type="file"
              placeholder=""
              onChange={(e: any) => getCodefromfile(e.target.files[0])}
            />
            <p className="text">Upload File</p>
          </button>
        </div>
      </div>
      <CodeEditor
        language={state.lang || 'javascript'}
        value={state.code || ''}
        onChange={handleValueChange}
      />

      <SelectLangType_STY
        value={state.lang}
        onChange={(e) => handleValueChange('lang', e.target.value)}
      >
        {supportedLangs?.map((lang) => (
          <option key={lang.key} value={lang.key}>
            {lang.label}
          </option>
        ))}
      </SelectLangType_STY>

      <div>
        {productCreation.status === 'pending' && (
          <div>
            <span>Product is creating </span>{' '}
            <HashLoader size={15} loading={productCreation.status === 'pending'} />
          </div>
        )}
        {productCreation.plagirismLoading === 'loading' && (
          <div>
            <span>Plagirism is checking </span>{' '}
            <HashLoader size={15} loading={productCreation.plagirismLoading === 'loading'} />
          </div>
        )}
        {productCreation.plagirismLoading === 'valid' && (
          <div>
            <span>Plagirism is not Detected </span>{' '}
          </div>
        )}
        {productCreation.status === 'created' && (
          <div>
            <span>Product is created </span>{' '}
          </div>
        )}
      </div>

      <CreateProduct_Step1_Error>
        {productCreateStep1Data.validated === 'not-valid' &&
          !validators.isCodeFilled.valid &&
          validators.isCodeFilled.message}{' '}
      </CreateProduct_Step1_Error>
    </ProductCreate_Step1_Style>
  )
}

export default CreateProductCode
