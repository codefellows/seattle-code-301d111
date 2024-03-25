import './square.css';

export default function Square(props) {
  // eslint-disable-next-line react/prop-types
  return <button className="square">{props.value}</button>
}
