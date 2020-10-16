import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

import Card from './Card';

const AddCard = () => {
  const [userName, setUserName] = useState('');
  const [cardNum, setCardNum] = useState({
    partOne: '',
    partTwo: '',
    partThree: '',
    partFour: '',
  });
  const [expiresOn, setExpiresOn] = useState('');
  const [cardNumAlert, setCardNumAlert] = useState(false);
  const [expiresOnAlert, setExpiresOnAlert] = useState(false);

  const handleChangeUserName = (e) => {
    let regEx = /^[a-zA-Z\s]*$/;
    const { value } = e.target;

    if (value === '' || regEx.test(value)) {
      setUserName(() => {
        if (value) return value.toUpperCase();
        return '';
      });
    }
  };

  const handleCardNumChange = (e) => {
    const regEx = /^[0-9\b]+$/;
    const regExFirstDig = /^(4|5|6)$/;
    const { value, name } = e.target;

    if (value !== '' && name === 'partOne' && !regExFirstDig.test(value[0])) {
      setCardNumAlert(true);
    } else {
      setCardNumAlert(false);
    }

    if (value === '' || (regEx.test(value) && value.length <= 4)) {
      setCardNum(() => {
        if (value) return { ...cardNum, [name]: value };
        return { ...cardNum, [name]: '' };
      });
    }
  };

  const handleExpiresOnChange = (e) => {
    const regEx = /^[0-9/]+$/;
    const { value } = e.target;

    if (value === '' || regEx.test(e.target.value)) {
      if (value.length === 5) {
        let year = 2000 + parseInt(value.split('/')[1]);
        let month = parseInt(value.split('/')[0]);
        let date = new Date(year, month);

        if (date < Date.now()) {
          setExpiresOnAlert(true);
        } else {
          setExpiresOn(value);
          setExpiresOnAlert(false);
        }
      }
    }

    // if (new Date(value) > Date.now()) {
    //   setExpiresOn(formatedDate);
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className='text-center'>Add Card</h1>

      <Row>
        <Col style={{ height: '150px' }} />
        <Col style={{ height: '150px' }}>
          <Card userName={userName} cardNum={cardNum} expiresOn={expiresOn} />
        </Col>
        <Col />
      </Row>
      <Col style={{ height: '150px' }} />
      <Form>
        <Row>
          <Col md={3} />
          <Col>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                name='userName'
                value={userName}
                onChange={handleChangeUserName}
              />
            </Form.Group>
          </Col>
          <Col md={3} />
        </Row>
        <Row>
          <Col md={3} />
          <Col>
            <Form.Row>
              <Form.Group as={Col} controlId='formGridCity'>
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  onChange={handleCardNumChange}
                  name='partOne'
                  value={cardNum.partOne}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridState'>
                <Form.Control
                  onChange={handleCardNumChange}
                  name='partTwo'
                  value={cardNum.partTwo}
                  style={{ marginTop: '32px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridZip'>
                <Form.Control
                  onChange={handleCardNumChange}
                  name='partThree'
                  value={cardNum.partThree}
                  style={{ marginTop: '32px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridZip'>
                <Form.Control
                  onChange={handleCardNumChange}
                  name='partFour'
                  value={cardNum.partFour}
                  style={{ marginTop: '32px' }}
                />
              </Form.Group>
            </Form.Row>
            {cardNumAlert ? (
              <p className='text-danger'>Wrong card number</p>
            ) : null}
          </Col>
          <Col md={3} />
        </Row>
        <Row>
          <Col md={3} />
          <Col>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Expires On</Form.Label>
              <Form.Control
                type='text'
                name='expiresOn'
                onChange={handleExpiresOnChange}
                placeholder=''
              />
            </Form.Group>
            {expiresOnAlert ? <p className='text-danger'>Wrong date</p> : null}
          </Col>
          <Col md={3} />
        </Row>

        <Row>
          <Col />
          <Col>
            <Form.Group controlId='formBasicEmail'>
              <Form.Control
                type='submit'
                className='btn btn-primary'
                onChange={handleExpiresOnChange}
                placeholder=''
              />
            </Form.Group>
          </Col>
          <Col />
        </Row>
      </Form>
    </>
  );
};

export default AddCard;
