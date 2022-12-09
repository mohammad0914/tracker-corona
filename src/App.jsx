import './App.css';
import image from './images/image.png'
import Card from './components/Card';
import Chart from './components/Chart';

function App() {
  return (
    <div className="container">
      <div>
        <img src={image} alt="covid" />
      </div>
      <div className="card">
        <Card type="Infected" number={1} date={"Mon 2021"} />
        <Card type="Recovered" number={31} date={"Mon 2021"}/>
        <Card type="Desthed" number={2} date={"Mon 2021"}/>
      </div>
      <div>
        <Chart />
      </div>

    </div>
  );
}

export default App;
