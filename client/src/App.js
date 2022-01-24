import AvailableBicycle from './components/AvailableBicycle';
import Form from './components/Form';
import RentBicycle from './components/RentBicycle';

function App() {
  return (
    <div className="container">
      <h1>Awesome Bike Rental</h1>
      <h2>&#129297; Create new rent</h2>
      <Form />
      <h2>&#129321; Your rent (Total: $12.99)</h2>
      <RentBicycle />
      <h2>&#128690; Available bicycles (3)</h2>
      <AvailableBicycle />
    </div>
  );
}

export default App;
