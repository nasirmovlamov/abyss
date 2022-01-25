import { ModalCont_STY } from 'app/styles/styled-components/base/modules/Modal_Style/ModalCont.style';
import React, { ReactChild, ReactElement } from 'react';

interface Props {
  children: any
}

export default function ModalCont({ children }: Props): ReactElement {
  return <ModalCont_STY>{children}</ModalCont_STY>
}
