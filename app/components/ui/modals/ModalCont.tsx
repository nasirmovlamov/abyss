import React, { ReactChild, ReactElement } from 'react'

import { ModalCont_STY } from '../../../styles/ui/modules/Modal_Style/ModalCont.style'

interface Props {
  children: any
}

export default function ModalCont({ children }: Props): ReactElement {
  return <ModalCont_STY>{children}</ModalCont_STY>
}
