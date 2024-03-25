import ListGroup from 'react-bootstrap/ListGroup'

function Cats({ cats, onDelete }) {
  return (
    <ListGroup>
      {cats.length && cats.map(cat => (
        <ListGroup.Item key={cat._id} >
          <Cat info={cat} onDelete={onDelete} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
}

function Cat({ info, onDelete }) {

  function delete () {
    onDelete(info);
  }

  return (
    <h3>{info.name} ({info.location}) <span onClick={delete}>[X]</span></h3>
  );
}

export default Cats;
