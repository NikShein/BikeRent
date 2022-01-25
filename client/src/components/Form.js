function Form({ changeFormHandler, addBike, alert, formValidate }) {
  return (
    <div className="form">
      <div>
        <label htmlFor="name">Bike name</label>
        <input
          id="name"
          type="text"
          name="bikeName"
          placeholder="Select name"
          onChange={changeFormHandler}
          onInput={formValidate}
        />
      </div>

      <div>
        <label htmlFor="type">Bike type</label>
        <select id="type" name="bikeType" onBlur={changeFormHandler}>
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
          onInput={formValidate}
        ></input>
      </div>

      <button className="submit" onClick={addBike}>
        Submit rent
      </button>
    </div>
  );
}

export default Form;
