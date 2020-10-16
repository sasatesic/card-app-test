import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import MyCards from './components/cards/MyCards';
import AddCard from './components/cards/AddCard';
import EditCard from './components/cards/EditCard';

function App() {
  return (
    <Router>
      <main className='py-3'>
        <Container>
          <Route path={`/cards`} component={MyCards} exact />
          <Route path={`/cards/add`} component={AddCard} />
          <Route path={`/cards/:id/edit`} component={EditCard} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
