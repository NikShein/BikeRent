import { useEffect, useState } from 'react';
import { useHttp } from './hooks/http.hook';
import AvailableBicycle from './components/AvailableBicycle';
import Form from './components/Form';
import RentBicycle from './components/RentBicycle';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(false);
  const [form, setForm] = useState({
    bikeName: '',
    bikeType: '',
    rentPrice: '',
  });
  const request = useHttp();

  const formValidate = () => {};

  const changeFormHandler = (event) => {
    setAlert((prev) => false);
    setForm((prev) => {
      return {
        ...form,
        [event.target.name]: event.target.value,
      };
    });
  };

  const addBike = async () => {
    console.log(form.bikeName, form.bikeType, form.rentPrice);
    if (form.bikeName === '' || form.bikeType === '' || form.rentPrice === '') {
      setAlert((prev) => true);
    } else {
      try {
        const data = await request('/api/add', 'POST', { ...form });
        setAlert((prev) => false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="container">
      <h1>Awesome Bike Rental</h1>
      <h2>&#129297; Create new rent</h2>
      <Alert alert={alert} />

      <Form
        changeFormHandler={changeFormHandler}
        addBike={addBike}
        alert={alert}
        formValidate={formValidate}
      />
      <h2>&#129321; Your rent (Total: $12.99)</h2>
      <RentBicycle />
      <h2>&#128690; Available bicycles (3)</h2>
      <AvailableBicycle />
    </div>
  );
}

export default App;
