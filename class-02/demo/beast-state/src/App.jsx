
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Hooter';
import Beasts from './components/Beasts';
import imageUrls from './data.json';

function App() {
  return (
    <Container>
      <Header title="Beast Judge" />
      <Beasts message="Make Your Beast Opinion Known" imageUrls={imageUrls} />
      <Footer text="Your opinion counts!" />
    </Container>
  );
}

export default App;
