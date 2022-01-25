import { faEdit, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mainLogo from 'app/../public/icons/main-logo.svg';
import { CaveProduct_STY } from 'app/styles/styled-components/base/modules/Cave_Style/CaveProduct.style';
import Image from 'next/image';
import React from 'react';

import StarCountShow from '../../ui/elements/StarCountShow';

interface Props {
  data: any
}

const CaveProduct = (props: Props) => {
  const { data } = props
  return (
    <CaveProduct_STY>
      <p className="title">{data.product.name}</p>

      <div className="details">
        <div className="logo">
          <Image src={mainLogo} width="22" height="22" alt="company-logo" />
        </div>

        <div className="flex">
          <StarCountShow count={4.5} />
          <span className="text">621</span>
        </div>

        <div className="flex">
          <span className="number">17.3K</span>
          <span className="text">views</span>
        </div>

        <div className="flex">
          <span className="number">9</span>
          <span className="text">iterations</span>
        </div>
      </div>

      <div className="actions">
        <div className="tags">
          <button className="tag">python</button>
          <button className="tag">nodejs</button>
          <button className="tag">react</button>
        </div>

        <div className="editCont">
          <button className="free">FREE</button>
          <div className="buttonsCont">
            <div className="button">
              <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="button">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
      </div>
    </CaveProduct_STY>
  )
}

export default CaveProduct
