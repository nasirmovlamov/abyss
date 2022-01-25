import { AreYouSureButtonsCont, ModalFORM_STY } from 'app/styles/styled-components/base/modules/Modal_Style/ModalCont.style';
import React from 'react';

interface Props {}

const CustomAreYouSureModal = (props: Props) => {
  return (
    <ModalFORM_STY>
      <p>Are you sure to delete ?</p>
      <AreYouSureButtonsCont>
        <button>Yes</button>
        <button>NO</button>
      </AreYouSureButtonsCont>
    </ModalFORM_STY>
  )
}

export default CustomAreYouSureModal
