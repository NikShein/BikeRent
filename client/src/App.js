import React, { useEffect, useState } from 'react';
import { useHttp } from './hooks/http.hook';
import { useMessage } from './hooks/message.hook';
import AvailableBicycle from './components/AvailableBicycle';
import Form from './components/Form';
import RentBicycle from './components/RentBicycle';
import Alert from './components/Alert';
import Loader from './components/Loader';
import { findCard, clearForm } from './helpers';

export const MainContext = React.createContext();

function App() {
  const [available, setAvailable] = useState([]);
  const [rent, setRent] = useState([]);
  const [timePrice, setTimePrice] = useState('');
  const [findPrice, setFindPrice] = useState('');
  const [modeBtn, setModeBtn] = useState(false);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    bicycleName: '',
    bicycleType: '',
    rentPrice: '',
  });
  const { request } = useHttp();
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
      } catch (e) {
        message(e.message);
      }
      getAvailableBicycles();
      clearForm();
    }
  };

  const getAvailableBicycles = async () => {
    setLoading(true);
    try {
      const bicycles = await request('/api/bicycle', 'GET', null);
      setAvailable(bicycles);
    } catch (e) {
      message(e.message);
    }
    setLoading(false);
  };

  const getRentBicycles = async () => {
    setLoading(true);
    try {
      const rents = await request('/api/rent-bicycles', 'GET', null);
      setRent(rents);
    } catch (e) {
      message(e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAvailableBicycles();
    getRentBicycles();
  }, []);

  const addBicycleToRent = async (event, bicycle) => {
    setModeBtn(true);
    const time = selectRentTime(event.target.id);
    if (time >= 20) {
      setTimePrice(
        `$${Number(time) * (bicycle.rentPrice / 2)} for ${time} hours`
      );
    } else {
      setTimePrice(`$${Number(time) * bicycle.rentPrice} for ${time} hours`);
    }

    try {
      const data = await request('/api/add-to-rent', 'POST', bicycle);
      await request('/api/remove-from-available', 'POST', bicycle);
      message(data.message);
    } catch (e) {
      message(e.message);
    }
    getAvailableBicycles();
    getRentBicycles();
    setModeBtn(false);
  };

  const removeBicycleFromRent = async (bicycle) => {
    setModeBtn(true);
    try {
      const data = await request('/api/remove-from-rent', 'POST', bicycle);
      await request('/api/add', 'POST', bicycle);
      message(data.message);
    } catch (e) {
      message(e.message);
    }
    getAvailableBicycles();
    getRentBicycles();

    setModeBtn(false);
  };

  async function removeFromAvailable(bicycle) {
    setModeBtn(true);

    try {
      await request('/api/remove-from-available', 'POST', bicycle);
    } catch (e) {
      message(e.message);
    }
    setAvailable(findCard(available, bicycle));
    setModeBtn(false);
  }

  function selectRentTime(ind) {
    let selects = Array.from(document.querySelectorAll('.times'));
    let select = selects.filter((select) => select.id === ind);
    const timeRent = select[0].value.replace(/[^0-9]/g, '');
    return timeRent;
  }

  return (
    <MainContext.Provider
      value={{
        alert,
        text,
        modeBtn,
        timePrice,
        findPrice,
        changeFormHandler,
        addBicycles,
        available,
        addBicycleToRent,
        rent,
        removeBicycleFromRent,
        removeFromAvailable,
      }}
    >
      <div className="container">
        <h1>Awesome Bike Rental</h1>
        <h2>&#129297; Create new rent</h2>
        <Alert />

        <Form />

        {loading ? (
          <Loader />
        ) : (
          <>
            <RentBicycle />
            <AvailableBicycle />
          </>
        )}
      </div>
    </MainContext.Provider>
  );
}

export default App;
