// This needs to know the # of withdrawals we made and a function to do a withdrawal

// Props we are getting:
// props.withdraw: function to do a withdrawal
// props.deposit: function to do a deposit
// props.withdrawals: # of withdrawals we made
// props.name: name of the account

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Account(props) {

  console.log("Account Component Got Props from the Bank", props);

  function handleWithdraw(amount) {
    props.withdraw(amount, props.name);
  }

  function handleDeposit(amount) {
    props.deposit(amount);
  }


  return (

    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
       <Alert variant="primary">Withdrawals Used: {props.withdrawals}</Alert>
      </Card.Text>
      <Button onClick={ () => handleWithdraw(100) }>Withdraw $100</Button>
      <Button onClick={ () => handleDeposit(50) }>Deposit $50</Button>
    </Card.Body>
  </Card>

  );
}

export default Account;
