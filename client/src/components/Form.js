function Form() {
  return (
    <form className="form">
      <div>
        <label htmlFor="name">Bike name</label>
        <input
          id="name"
          type="text"
          name="bikeName"
          placeholder="Select name"
        ></input>
      </div>

      <div>
        <label htmlFor="type">Bike type</label>
        <select id="type" name="bikeType">
          <option>Пункт 1</option>
          <option>Пункт 2</option>
        </select>
      </div>

      <div>
        <label htmlFor="price">Rent Price</label>
        <input
          id="price"
          type="text"
          name="rentPrice"
          placeholder="Select price"
        ></input>
      </div>

      <button className="submit" type="submit">
        Submit rent
      </button>
    </form>
  );
}

export default Form;
