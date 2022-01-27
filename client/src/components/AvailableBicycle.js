import { useContext } from 'react';
import { MainContext } from '../App';

function AvailableBicycle() {
  const { availables, addBicycleToRent, removeAvailable } =
    useContext(MainContext);

  return (
    <>
      <h2>&#128690; Available bicycles ({availables.length})</h2>
      {availables.map((bicycle) => {
        return (
          <div className="rentBicycle" key={bicycle._id}>
            <div className="data-bicycle">
              <p>{bicycle.bicycleName}</p>
              <p>{bicycle.bicycleType}</p>
              <p>${bicycle.rentPrice}</p>
            </div>
            <div>
              <button
                className="rent"
                onClick={() => addBicycleToRent(bicycle)}
              >
                Rent
              </button>
              <button
                className="cancel-rent"
                onClick={() => {
                  removeAvailable(bicycle);
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
