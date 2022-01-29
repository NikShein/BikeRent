import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../App';

function RentBicycle() {
  const { rent, modeBtn, timePrice, removeBicycleFromRent } =
    useContext(MainContext);
  let price = 0;
  let totalPrice = 0;
  rent.forEach((element) => {
    price += Number(element.rentPrice);
  });
  if (price.toString().match(/\.(\d+)/)?.[1].length > 0) {
    totalPrice = price.toFixed(2);
  }

  return (
    <>
      <h2>&#129321; Your rent (Total: ${totalPrice})</h2>
      {rent.map((rentBicycle, index) => {
        return (
          <div className="rentBicycle" key={index}>
            <div className="data-bicycle">
              <p>{rentBicycle.bicycleName}</p>
              <p>{rentBicycle.bicycleType}</p>
              <p>${rentBicycle.rentPrice}</p>
              <p>{timePrice}</p>
            </div>
            <div>
              <button
                className="cancel-rent"
                disabled={modeBtn}
                onClick={() => removeBicycleFromRent(rentBicycle)}
              >
                Cancel rent
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default RentBicycle;
