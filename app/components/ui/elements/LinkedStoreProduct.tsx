import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEye, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from 'react';

import { getOptionsForMentionOfProduct } from '../../../store/slices/Question.slice';
import { changeModalAction } from '../../../store/slices/User.slice';
import { useAppDispatch } from '../../../store/states/store.hooks';
import {
  AddCave,
  AddCaveAndMentionsCont,
  Iterations,
  LanguageContForTextAndIcon,
  LanguageInfo,
  LinesofCodeContForIconAndText,
  MentionsCont,
  MentionsCount,
  MentionsText,
  ProductContent,
  ProductContentCont,
  ProductDescription,
  ProductDescriptionContent,
  ProductDescriptionTitle,
  ProductDetailCont,
  ProductImageAndContent,
  ProductImageOverlay,
  ProductLanguageAndImage,
  ProductSideDetailsCont,
  ProductSoldCont,
  ProductStarCont,
  ProductTags,
  ProductTitle,
  ProductViewCont,
  StoreListingProductStyle,
} from '../../../styles/styled-components/base/modules/ListingStoreProduct.styled';
import NavLink from '../elements/NavLink';
import StarCountShow from '../elements/StarCountShow';

interface Props {
  data: any
}

function LinkedStoreProduct({ data }: Props): ReactElement {
  const dispatch = useAppDispatch()

  const openMentionsModal = () => {
    dispatch(getOptionsForMentionOfProduct({ productId: data.id }))
    dispatch(changeModalAction('productMentions'))
  }

  return (
    <StoreListingProductStyle touchDown={false}>
      <ProductImageAndContent>
        <ProductLanguageAndImage>
          {/* <ProductPerson src={data.avatar}/> */}

          <ProductImageOverlay></ProductImageOverlay>
          <LanguageInfo>
            <LanguageContForTextAndIcon>
              <FontAwesomeIcon icon={faLaptopCode} />
              {/* <LanguageText>{data.programingLanguage}</LanguageText> */}
            </LanguageContForTextAndIcon>

            <LinesofCodeContForIconAndText>
              <FontAwesomeIcon icon={faPython} />
              {/* <LinesofCodeText>{data.lineCount}</LinesofCodeText> */}
            </LinesofCodeContForIconAndText>
          </LanguageInfo>
        </ProductLanguageAndImage>

        <ProductContentCont>
          <ProductContent>
            <NavLink content="product" href={'store/1/test'}>
              <ProductTitle>{data.name}</ProductTitle>
            </NavLink>
            <ProductDetailCont>
              <ProductStarCont>
                <StarCountShow count={4.3} /> {data.starCount}
              </ProductStarCont>
              <ProductSoldCont>
                <FontAwesomeIcon icon={faDownload} /> {data.download_count}
              </ProductSoldCont>
              <ProductViewCont>
                <FontAwesomeIcon icon={faEye} /> {data.view_count}
              </ProductViewCont>
            </ProductDetailCont>
            <ProductTags>
              {/* {data.tags.map((tag , index) => index < 3 && <ProductTag>{tag}</ProductTag>)} */}
            </ProductTags>
            {/* <ProductPriceCont>{data.price}$</ProductPriceCont> */}
          </ProductContent>

          <ProductDescription>
            <ProductDescriptionTitle>Description</ProductDescriptionTitle>
            <ProductDescriptionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi expedita minima
              velit nemo sint fuga voluptatem reprehenderit quas blanditiis repellendus dicta modi
              iste, laudantium nam cupiditate, tenetur, dolorem cumque.
            </ProductDescriptionContent>
          </ProductDescription>
        </ProductContentCont>
      </ProductImageAndContent>

      <ProductSideDetailsCont>
        <AddCaveAndMentionsCont>
          <AddCave>+ Cave</AddCave>
          <MentionsCont>
            <MentionsCount>8</MentionsCount>
            <MentionsText>Mentions</MentionsText>
          </MentionsCont>
        </AddCaveAndMentionsCont>
        <Iterations onClick={openMentionsModal}>Show Mentions</Iterations>
      </ProductSideDetailsCont>
    </StoreListingProductStyle>
  )
}

export default LinkedStoreProduct
