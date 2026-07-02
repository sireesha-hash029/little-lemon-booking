import { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage() {

  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00"
  ]);

  return (
    <section className="container">

      <header>

        <h1>Little Lemon</h1>

        <h2>Book a Table</h2>

      </header>

      <BookingForm
        availableTimes={availableTimes}
      />

    </section>
  );
}

export default BookingPage;