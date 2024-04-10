import {useState} from 'react';

function DogEditForm(props) {
 
    const [dog, setDog] = useState( props.dog || {} );

    function handleChange(event) {
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        let name = event.target.name;
        setDog({ ...dog, [name]: value });
    }

    function handleSubmit(event) { 
        event.preventDefault();
        props.updateDog(dog);
    }

    return (
        <div>
          <h1>Edit Dog</h1>
          <form onSubmit={handleSubmit}>
            <div><input name="name" type="text" value={dog.name} placeholder="Name" onChange={handleChange} /></div>
            <div><input name="breed" type="text" value={dog.breed} placeholder="Breed" onChange={handleChange} /></div>
            <div><input name="color" type="text" value={dog.color} placeholder="Color" onChange={handleChange} /></div>
            <div><input name="age" type="text" value={dog.age} placeholder="Age" onChange={handleChange} /></div>
            <div><input name="hasTail" type="checkbox" checked={dog.hasTail} onChange={handleChange} /><span>Has Tail?</span></div>
            <button type="submit">Update Dog</button>
          </form>
        </div>
    )

}

export default DogEditForm;