import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import {
  AddCave,
  ProductContent,
  ProductContentCont,
  ProductDetailCont,
  ProductImageAndContent,
  ProductSoldCont,
  ProductStarCont,
  ProductTag,
  ProductTags,
  ProductTitle,
  ProductViewCont,
  Side_ProductSideDetailsCont,
  StoreSideProductStyle,
} from '../../../styles/styled-components/components/modules/ListingStoreProduct.styled';
import NavLink from './NavLink';
import StarCountShow from './StarCountShow';

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

function SideProduct({ data }: Props): ReactElement {
  return (
    <StoreSideProductStyle style={{ height: 'auto', padding: '15px', rowGap: '5px' }}>
      <ProductImageAndContent>
        <ProductContentCont>
          <ProductContent>
            <NavLink content="text" href={'store/1/test'}>
              <ProductTitle>{data.name}</ProductTitle>
            </NavLink>
            <ProductDetailCont>
              <ProductStarCont>
                <StarCountShow count={4.3} /> {data.starCount} 612
              </ProductStarCont>
              <ProductSoldCont>
                <FontAwesomeIcon icon={faDownload} /> {data.download_count}
              </ProductSoldCont>
              <ProductViewCont>
                <FontAwesomeIcon icon={faEye} /> {data.view_count} 25
              </ProductViewCont>
            </ProductDetailCont>
            <ProductTags></ProductTags>
            {/* <ProductPriceCont>{data.price}$</ProductPriceCont> */}
          </ProductContent>

          {/* <ProductDescription>
                            <ProductDescriptionTitle>Description</ProductDescriptionTitle>
                            <ProductDescriptionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi expedita minima velit nemo sint fuga voluptatem reprehenderit quas blanditiis repellendus dicta modi iste, laudantium nam cupiditate, tenetur, dolorem cumque.</ProductDescriptionContent>
                        </ProductDescription> */}
        </ProductContentCont>
      </ProductImageAndContent>

      <Side_ProductSideDetailsCont style={{ display: 'flex' }}>
        <div className="tags" style={{ display: 'flex', width: '100px', columnGap: '10px' }}>
          {['php', 'laravel', 'react', 'javascript'].map(
            (tag, index) => index < 3 && <ProductTag>{tag}</ProductTag>,
          )}
        </div>
        <AddCave>+ Cave</AddCave>
        {/* <Side_MentionsCont>
                        <MentionsCount>8</MentionsCount>
                        <MentionsText>Mentions</MentionsText>
                    </Side_MentionsCont>
                    <Iterations>Iterations</Iterations> */}
      </Side_ProductSideDetailsCont>
    </StoreSideProductStyle>
  )
}

export default SideProduct
