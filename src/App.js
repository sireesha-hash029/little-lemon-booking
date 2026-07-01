import "./App.css";
import { useState } from "react";

function App() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Reservation made for ${guests} guests on ${date} at ${time}`
    );

    setDate("");
    setTime("17:00");
    setGuests("");
  };

  return (
    <div className="container">

      <h1>Little Lemon</h1>

      <h2>Book a Table</h2>

      <form onSubmit={handleSubmit}>

        <label>Date</label>

        <input
          type="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Time</label>

        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
        </select>

        <label>Guests</label>

        <input
          type="number"
          min="1"
          max="10"
          required
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <button type="submit">
          Reserve Table
        </button>

      </form>

    </div>
  );
}

export default App;