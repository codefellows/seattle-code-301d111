import { useState } from 'react';
import Child from './Child';
import mom from './assets/mom.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Parent(props) {

  const [billysMoney, setBillysMoney] = useState(0);
  const [money, setMoney] = useState(100);

  function giveMoneyToBilly(dollars) {
    const parentBalance = money - dollars;
    setBillysMoney(billysMoney + dollars);
    setMoney(parentBalance);

    if (parentBalance < 0) {
      props.onOverdraft();
    }
  }

    return (
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={mom} />
          <Card.Body>
            <Card.Title>Parent</Card.Title>
            <Card.Text>
              I am the parent. I have {money} dollars.
            </Card.Text>
          </Card.Body>
        </Card>
        <Child
          askForMoney={giveMoneyToBilly}
          billysMoney={state.billysMoney}
        />
      </CardGroup>
    );
  }

export default Parent;
