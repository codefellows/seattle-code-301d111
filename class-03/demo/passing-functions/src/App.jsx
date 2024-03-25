import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Parent from './Parent';
import Header from './Header';
import OverdraftModal from './OverdraftModal';

function App() {

  const [showOverdraftWarning, setShowOverdraftWarning] = useState(false);

  function overdraftHandler() {
    setShowOverdraftWarning(true);
  }

  function closeHandler() {
    setShowOverdraftWarning(false);
  }

    return (
      <Container>
        <Header title={'Billy is a teenager'} />
        <Parent onOverdraft={overdraftHandler} />
        <OverdraftModal show={showOverdraftWarning} onClose={closeHandler} />
      </Container>
    );
}

export default App;
