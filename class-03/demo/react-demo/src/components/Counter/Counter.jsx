// This is the only component (in this app) that holds state
function Counter(props) {

  return (
    <>
      <p>
        Current Count: {props.currentCount}
      </p>
      <button onClick={props.handleCount}>Increment</button>
    </>
  );
}

export default Counter;
