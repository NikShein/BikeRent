import { useContext } from 'react';
import { MainContext } from '../App';

function RentBicycle() {
  const { rents, removeRentBicycle } = useContext(MainContext);
  let totalPrice = 0;
  rents.forEach((element) => {
    totalPrice += element.rentPrice;
  });

  return (
    <>
      <h2>&#129321; Your rent (Total: ${totalPrice})</h2>
      {rents.map((rentBicycle) => {
        return (
          <div className="rentBicycle" key={rentBicycle._id}>
            <div className="data-bicycle">
              <p>{rentBicycle.bicycleName}</p>
              <p>{rentBicycle.bicycleType}</p>
              <p>${rentBicycle.rentPrice}</p>
            </div>
            <div>
              <button
                className="cancel-rent"
                onClick={() => removeRentBicycle(rentBicycle)}
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
