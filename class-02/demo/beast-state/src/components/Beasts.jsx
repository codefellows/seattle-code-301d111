import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Beasts(props) {

  const beastImages = props.imageUrls;

  return (
    <div>
      <h2>{props.message}</h2>

      <Container>
        <Row>
          <Col>
            <BeastImage image_url={beastImages[0].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[1].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[2].image_url} />
          </Col>
        </Row>
        <Row>
          <Col>
            <BeastImage image_url={beastImages[3].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[4].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[5].image_url} />
          </Col>
        </Row>

      </Container>
    </div>
  );
}


function BeastImage(props) {

  const [status, setStatus] = useState("Yay");

  function handleClick() {
    setStatus(status === "Nay" ? "Yay" : "Nay");
  }

  return (
    <div onClick={handleClick}>
      <Image src={props.image_url} alt="some horned beast" rounded fluid />
      <h3>{status}</h3>
    </div>
  );
}
