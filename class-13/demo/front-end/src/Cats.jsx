import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import UpdateCatForm from './UpdateCatForm';

function Cats({ cats, onDelete, onUpdate }) {

  const [selectedCat, setSelectedCat] = useState(null);

  function handleCatSelect(cat) {
    setSelectedCat(cat);
  };

  function handleClose() {
    setSelectedCat(null);
  }

  return (
    <>
      <ListGroup>
        {cats.length && cats.map(cat => (
          <ListGroup.Item key={cat._id} >
            <Cat info={cat} onDelete={onDelete} onSelect={handleCatSelect} />
          </ListGroup.Item>
        ))}
      </ListGroup>
      {selectedCat && (

        <UpdateCatForm cat={selectedCat} show={selectedCat !== null} onUpdate={onUpdate} onClose={handleClose} />
      )}
    </>
  )
}

function Cat({ info, onDelete, onSelect })

  function update() {
    onSelect(info);
  }

  function delete() {
    onDelete(info._id);
  }

    return (
      <>
        <h3>
          {info.name}
          ,color: {info.color}
          ,hasClaws: {String(info.hasClaws)}
        </h3>
        <p>
          <span onClick={update}>[Update]</span>
          <span onClick={delete}>[Delete]</span>
        </p>
      </>

    );
}

export default Cats;
