import React, { ReactElement } from 'react';

import { useAppDispatch } from '../../store/states/store.hooks';
import {
  FooterColumn,
  FooterElement,
  FooterRow,
  FooterStyle,
} from '../../styles/styled-components/components/modules/Footer.style';

interface Props {}

function Footer({}: Props): ReactElement {
  const dispatch = useAppDispatch()

  return (
    <FooterStyle>
      <FooterRow>
        <FooterColumn>
          <FooterElement>Terms of </FooterElement>
        </FooterColumn>

        <FooterColumn>
          <FooterElement>Privacy Policy</FooterElement>
        </FooterColumn>

        <FooterColumn>
          <FooterElement>About Us</FooterElement>
        </FooterColumn>

        <FooterColumn>
          <FooterElement>Careers</FooterElement>
        </FooterColumn>

        <FooterColumn>
          <FooterElement>Support</FooterElement>
        </FooterColumn>

        <FooterColumn>
          <FooterElement>Community</FooterElement>
        </FooterColumn>
      </FooterRow>
      <FooterRow>
        <FooterRow>
          <FooterElement>&#169; All rights reserved 2021</FooterElement>
          <FooterElement>Abyss</FooterElement>
        </FooterRow>
      </FooterRow>
    </FooterStyle>
  )
}

export default Footer
