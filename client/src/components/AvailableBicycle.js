import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../App';

function AvailableBicycle() {
  const {
    modeBtn,
    available,
    addBicycleToRent,
    removeFromAvailable,
    changeRentPrice,
  } = useContext(MainContext);

  return (
    <>
      <h2>&#128690; Available bicycles ({available.length})</h2>
      {available.map((bicycle, index) => {
        return (
          <div className="rentBicycle" key={index}>
            <div className="data-bicycle">
              <p>{bicycle.bicycleName}</p>
              <p>{bicycle.bicycleType}</p>
              <p>${bicycle.rentPrice} / 1 hour</p>
            </div>

            <div>
              <select className="times" id={index}>
                <option>1 hour</option>
                <option>5 hours</option>
                <option>10 hours</option>
                <option>20 hours</option>
                <option>24 day</option>
              </select>
              <button
                id={index}
                className="rent"
                onClick={(event) => addBicycleToRent(event, bicycle)}
                disabled={modeBtn}
              >
                Rent
              </button>
              <button
                disabled={modeBtn}
                className="cancel-rent"
                onClick={() => {
                  removeFromAvailable(bicycle);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AvailableBicycle;
