import Counter from '../Counter/Counter.jsx';

function Person( props ) {

  function handleCount() {
    // handlVote is a function that is passed down from App.jsx
    props.handleVote(props.person);
  }

  return (
    <div>
      <h2>{props.person.name}</h2>
      <Counter handleCount={handleCount} currentCount={props.person.count} />
    </div>
  )

}

export default Person;
