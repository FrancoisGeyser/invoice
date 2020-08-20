import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import RouterComponent from './routes/router';
import SidebarComponent from './components/sidebar';
import GlobalStyles from './GlobalStyles';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 20%) 1fr;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <MainContainer>
          <SidebarComponent />
          <RouterComponent />
        </MainContainer>
      </Router>
    </>
  );
}

export default App;
