import React, { ReactElement } from 'react';

import { MainPartOfPageStyle } from '../../styles/pages/Page.styled';

interface Props {
  children: any
}

function PageMainLayout({ children }: Props): ReactElement {
  return <MainPartOfPageStyle>{children}</MainPartOfPageStyle>
}

export default PageMainLayout
