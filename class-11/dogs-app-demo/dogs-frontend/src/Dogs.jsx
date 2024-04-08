function Dogs(props) { 

    return (
      <>
        <h2>Dogs</h2>
        <section>
            {props.dogs.map(dog => 
                <div key={dog._id}>
                    <h2>{dog.name}</h2>
                    <p>Age: {dog.age}</p>
                    <p>Breed: {dog.breed}</p>
                    <p>Color: {dog.color}</p>
                    <p>Has a Tail: {dog.hasTail.toString()}</p>
                </div>
            )
            }
        </section>
      </>
    );

}

export default Dogs;