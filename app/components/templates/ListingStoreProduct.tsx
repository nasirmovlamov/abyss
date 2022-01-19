import HTMLReactParser from 'html-react-parser';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';

import { changeProductTabActiveWithoutScroll } from '../../store/slices/PageTabs.slice';
import { goProductPage, single_product_data } from '../../store/slices/SingleProduct.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import { getSingleProduct } from '../../store/thunks/SingleProduct.thunk';
import {
  AddCave,
  AddCaveAndMentionsCont,
  CompanyLogoImageOverlay,
  DateCount,
  Iterations,
  LanguageContForTextAndIcon,
  LanguageInfo,
  ProductContent,
  ProductContentCont,
  ProductDescription,
  ProductDescriptionContent,
  ProductDetailCont,
  ProductImageAndContent,
  ProductImageOverlay,
  ProductLanguageAndImage,
  ProductSideDetailsCont,
  ProductStarCont,
  ProductTag,
  ProductTags,
  ProductTitle,
  ProductViewCont,
  StoreListingProductStyle,
} from '../../styles/ui/modules/ListingStoreProduct.styled';
import StarCountShow from '../ui/elements/StarCountShow';

interface Props {
  data:
  | {
    avatar: string
    programingLanguage: string
    lineCount: string
    name: string
    starCount: string
    soldCount: string
    price: string
    tags: string[]
  }
  | any
}

function ListingStoreProduct({ data }: Props): ReactElement {
  const singleProductData = useAppSelector(single_product_data)
  const router = useRouter()
  const [description, setdescription] = useState<any>()
  const dispatch = useAppDispatch()

  const [touchDown, settouchDown] = useState(false)

  const getDescription = () => {
    try {
      if (JSON.parse(data.description).hasOwnProperty('details_data')) {
        setdescription(
          HTMLReactParser(
            JSON.parse(data.description).details_data['sections_product'][0].label_value,
          ),
        )
      }
    } catch (error) {
      setdescription(HTMLReactParser(data.description))
    }
  }

  useEffect(() => {
    getDescription()
  }, [])

  const goProduct = () => {
    dispatch(changeProductTabActiveWithoutScroll({ id: 2 }))
    if (singleProductData.selectedID !== data.id) {
      dispatch(getSingleProduct({ id: data.id, slug: data.slug }))
    }
    dispatch(goProductPage({ id: data.id }))
    setTimeout(() => {
      router.push(`store/${data.id}/${data.slug}`)
    }, 250)
  }

  const mouseDownHandler = () => {
    settouchDown(true)
  }

  const mouseUpHandler = () => {
    settouchDown(false)
  }

  return (
    <StoreListingProductStyle
      touchDown={touchDown}
      id={`listingProduct${data.id}`}
      key={data.id}
      onClick={goProduct}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
    >
      <ProductImageAndContent>
        <ProductLanguageAndImage>
          <ProductImageOverlay>
            <CompanyLogoImageOverlay src={abyssLogo.src} />
          </ProductImageOverlay>

          <LanguageInfo>
            <LanguageContForTextAndIcon>
              <p className="shopName">Shops name</p>
              <p className="creatorName">Creators username</p>
            </LanguageContForTextAndIcon>

            {/* <LinesofCodeContForIconAndText>
                            <FontAwesomeIcon icon={faPython}/>
                            <LinesofCodeText>Python {data.lineCount}</LinesofCodeText> 
                        </LinesofCodeContForIconAndText> */}
          </LanguageInfo>
        </ProductLanguageAndImage>

        <ProductContentCont>
          <ProductContent>
            <ProductTitle>{data.name}</ProductTitle>
            <ProductDetailCont>
              <ProductStarCont>
                <StarCountShow count={2.3} /> {data.starCount} 2.3
              </ProductStarCont>
              <ProductViewCont>
                {' '}
                <span>{data.view_count}17K</span> <span>views</span>{' '}
              </ProductViewCont>
              <ProductViewCont>
                {' '}
                <span>{data.view_count}4</span> <span>iterations</span>{' '}
              </ProductViewCont>
            </ProductDetailCont>
            <ProductTags>
              {!data.tags.some((tag: any) => tag === '') &&
                data.tags.map(
                  (tag: any, index: any) => index < 3 && <ProductTag key={tag}>{tag}</ProductTag>,
                )}
            </ProductTags>
          </ProductContent>
          <ProductDescription>
            <ProductDescriptionContent>{description}</ProductDescriptionContent>
          </ProductDescription>
        </ProductContentCont>
      </ProductImageAndContent>

      <ProductSideDetailsCont>
        <AddCaveAndMentionsCont>
          <AddCave type="button">+ Cave</AddCave>
        </AddCaveAndMentionsCont>

        <div className="flex">
          <Iterations>8 Mentions</Iterations>
          <DateCount>{data.created_at.slice(0, 10)}</DateCount>
        </div>
      </ProductSideDetailsCont>
    </StoreListingProductStyle>
  )
}

export default ListingStoreProduct
