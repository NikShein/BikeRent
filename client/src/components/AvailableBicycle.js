function AvailableBicycle() {
  return (
    <div className="rentBicycle">
      <div className="data-bicycle">
        <p>Superfast bicycle</p>
        <p>Custom</p>
        <p>$12.99</p>
      </div>
      <div>
        <button className="rent" type="submit">
          Rent
        </button>
        <button className="cancel-rent" type="submit">
          Cancel rent
        </button>
      </div>
    </div>
  );
}

export default AvailableBicycle;
