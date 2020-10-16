import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Card from './Card';
import AddNewCard from './AddNewCard';
import { Link } from 'react-router-dom';

const MyCards = () => {
  return (
    <>
      <h1 className='text-center mb-5'>My Cards</h1>
      <Row>
        <Col md={6}>
          <Card
            userName='SASA TESIC'
            provider='visa'
            cardNum={{
              partOne: '1456',
              partTwo: '1298',
              partThree: '6574',
              partFour: '1287',
            }}
            expiresOn='11/22'
          />
        </Col>
        <Col md={6}>
          <Link to='/cards/add'>
            <AddNewCard />
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default MyCards;
