import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './routes/router';
import SidebarComponent from './components/sidebar';
import PageLayout from './components/layout/pagelayout';

function App() {
  return (
    <Router>
      <PageLayout>
        <SidebarComponent />
        <RouterComponent />
      </PageLayout>
    </Router>
  );
}

export default App;
