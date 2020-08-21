import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 20%) 1fr;
  background-color: ${({ theme }) => theme.colors.background};
`;

const theme = {
  colors: {
    white: 'white',
    black: 'black',
    red: '#d40a10',
    gold: '#a1864f',
    silver: 'gray',
    background: '#f5ece1',
  },
};

const PageLayout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer>{props.children}</MainContainer>
    </ThemeProvider>
  );
};

export default PageLayout;
