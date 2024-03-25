import teen from './assets/teen.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Child(props) {

  function askParentFor10Dollars() {
    props.askForMoney(10);
  }

  function askParentFor20Dollars() {
    props.askForMoney(20);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={teen} />
      <Card.Body>
        <Card.Title>Billy</Card.Title>
        <Card.Text>
          I am the Billy. I have {props.billysMoney} dollars.
        </Card.Text>
        <Button onClick={askParentFor10Dollars} variant="primary">Ask parent for 10 dollars</Button>
        <Button onClick={askParentFor20Dollars} variant="primary">Ask parent for 20 dollars</Button>
      </Card.Body>
    </Card>
  );
}

export default Child;
