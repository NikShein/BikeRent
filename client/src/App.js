import React, { useEffect, useState } from 'react';
import { useHttp } from './hooks/http.hook';
import { useMessage } from './hooks/message.hook';
import AvailableBicycle from './components/AvailableBicycle';
import Form from './components/Form';
import RentBicycle from './components/RentBicycle';
import Alert from './components/Alert';
import Loader from './components/Loader';

export const MainContext = React.createContext();

function App() {
  const [rents, setRents] = useState([]);
  const [availables, setAvsilable] = useState([]);
  const [render, setRender] = useState(false);
  const [form, setForm] = useState({
    bicycleName: '',
    bicycleType: '',
    rentPrice: '',
  });
  const { request, loading } = useHttp();
  const { message, alert, text } = useMessage();

  const changeFormHandler = (event) => {
    setForm((prev) => {
      return {
        ...form,
        [event.target.name]: event.target.value,
      };
    });
  };

  const addBicycles = async () => {
    if (
      form.bicycleName === '' ||
      form.bicycleType === '' ||
      form.rentPrice === ''
    ) {
      message('Заполните все поля!');
    } else if (Number.isNaN(Number(form.rentPrice))) {
      message('Введите корректную цену!');
    } else {
      try {
        const data = await request('/api/add', 'POST', { ...form });
        message(data.message);
        setRender(!render);
      } catch (e) {
        message(e.message);
      }
    }
  };

  const getAvailableBicycles = async () => {
    try {
      const data = await request('/api/bicycle', 'GET', null);
      setAvsilable((prev) => data);
    } catch (e) {
      message(e.message);
    }
  };

  const addBicycleToRent = async (bicycle) => {
    setRents([...rents, bicycle]);
    try {
      const data = await request('/api/add-to-rent', 'POST', bicycle);
      message(data.message);
    } catch (e) {
      message(e.message);
    }
    removeAvailable(bicycle, 'Велосипед арендован!');
  };

  const removeRentBicycle = async (bicycle) => {
    try {
      const data = await request('/api/remove-from-rent', 'POST', bicycle);
      message(data.message);
    } catch (e) {
      message(e.message);
    }
    try {
      request('/api/add', 'POST', bicycle);
      setRender(!render);
    } catch (e) {
      message(e.message);
    }
  };

  const removeAvailable = async (bicycle, text) => {
    try {
      const data = await request('/api/remove-from-available', 'POST', bicycle);
      setRender(!render);
      text ? message(text) : message(data.message);
    } catch (e) {
      message(e.message);
    }
  };

  const getRentBicycles = async () => {
    try {
      const data = await request('/api/rent-bicycles', 'GET', null);
      setRents(data);
    } catch (e) {
      message(e.message);
    }
  };

  useEffect(() => {
    getAvailableBicycles();
    getRentBicycles();
  }, [render]);

  return (
    <MainContext.Provider
      value={{
        alert,
        text,
        changeFormHandler,
        addBicycles,
        availables,
        addBicycleToRent,
        rents,
        removeRentBicycle,
        removeAvailable,
      }}
    >
      <div className="container">
        <h1>Awesome Bike Rental</h1>
        <h2>&#129297; Create new rent</h2>
        <Alert />

        <Form />

        <RentBicycle />

        {loading ? <Loader /> : <AvailableBicycle />}
      </div>
    </MainContext.Provider>
  );
}

export default App;
