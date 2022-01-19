import React from 'react';

import { AreYouSureButtonsCont, ModalFORM_STY } from '../../styles/components/styled-blocks/Modal_Style/ModalCont.style';

interface Props {

}

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
