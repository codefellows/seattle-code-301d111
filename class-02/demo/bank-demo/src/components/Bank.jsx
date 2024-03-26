import {useState} from 'react';

import Account from './Account.jsx';

import familyObject from '../family.json';

// Needs to manage the balance, the withdrawal count and the withdrawal function to give to the Account component
// We want to do this ... Account(numberOfWithrawals, withdrawal);
// but the tool we actually have is <Account />
// We will use properties to pass the state and the functions to the child component

function Bank() {

  // This like saying let balance = 1000; and setBalance = function(newValue) { balance = newValue; }
  // setWhatever always takes a new value and updates the state with that new value
  // in other words, you give it "the next state"
  const [balance, setBalance] = useState(1000);
  const [withdrawalCount, setWithdrawalCount] = useState({});

  let family = familyObject.family;

  function addMoney(amount) {
    setBalance(balance + amount);
  }

  function withdrawMoney(amount, person) {

    // This really should check the balance first and max withdrawals ... but we're ignoring that for now

    setBalance( balance - amount);

    // Use a "ternary" which is an if statement in one line
    // (if this is true) ? (do this) : (else do this)
    let numWithdrawals = withdrawalCount[person] ? withdrawalCount[person] : 0;
    setWithdrawalCount( {...withdrawalCount, [person]: numWithdrawals + 1} );

  }

  // Account( withdrawMoney, withdrawalCount["Zachary"], "Zachary");

  return (
    <>
      <h1>Banking with the Cokos Family</h1>
      <h2>Balance: {balance}</h2>
      <section class="deck">

       {
          family.map( (name, index) => {
            return <Account key={index} deposit={addMoney} withdraw={withdrawMoney} withdrawals={withdrawalCount[name]} name={name} />
          })
       }

      </section>
    </>
  )
}


export default Bank;

