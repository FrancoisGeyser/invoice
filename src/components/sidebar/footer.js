import React from 'react';
import styled from 'styled-components';

const FooterLayout = styled.div`
  width: 100%;
  p {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.red};
  }
`;
const Footer = () => {
  return (
    <FooterLayout>
      <p>Copyright © 2019</p>
    </FooterLayout>
  );
};

export default Footer;
