import Row from './Row';
import './grid.css';

function Grid() {
  return <div className="grid">
    <Row index={0} />
    <Row index={1} />
    <Row index={2} />
  </div>
}

export default Grid;
