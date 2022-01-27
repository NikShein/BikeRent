import { useContext } from 'react';
import { MainContext } from '../App';

function Form() {
  const { changeFormHandler, addBicycles } = useContext(MainContext);
  return (
    <div className="form">
      <div>
        <label htmlFor="name">Bicycle name</label>
        <input
          id="name"
          type="text"
          name="bicycleName"
          placeholder="Select name"
          onChange={changeFormHandler}
        />
      </div>

      <div>
        <label htmlFor="type">Bicycle type</label>
        <select id="type" name="bicycleType" onBlur={changeFormHandler}>
          <option value="">Choose type</option>
          <option>Road Bike</option>
          <option>Mountain Bike</option>
          <option>Touring Bike</option>
          <option>Folding Bike</option>
          <option>Fixed Gear/ Track Bike</option>
          <option>BMX</option>
          <option>Recumbent Bike</option>
          <option>Cruiser</option>
          <option>Hybrid Bike</option>
          <option>Cyclocross Bike</option>
          <option>Electric Bike</option>
        </select>
      </div>

      <div>
        <label htmlFor="price">Rent Price</label>
        <input
          id="price"
          type="text"
          name="rentPrice"
          placeholder="Select price"
          onChange={changeFormHandler}
        ></input>
      </div>

      <button className="submit" onClick={addBicycles}>
        Submit rent
      </button>
    </div>
  );
}

export default Form;
