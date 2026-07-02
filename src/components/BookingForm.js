import { useState } from "react";

function BookingForm({ availableTimes }) {

  const [date, setDate] = useState("");

  const [time, setTime] = useState(
    availableTimes[0]
  );

  const [guests, setGuests] = useState("");

  const submitForm = (e) => {

    e.preventDefault();

    if (guests < 1 || guests > 10) {

      alert(
        "Guests must be between 1 and 10"
      );

      return;

    }

    alert(
      `Reservation for ${guests} guests at ${time}`
    );

  };

  return (

    <form onSubmit={submitForm}>

      <label>Date</label>

      <input
        type="date"
        required
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <label>Time</label>

      <select
        value={time}
        onChange={(e) =>
          setTime(e.target.value)
        }
      >

        {
          availableTimes.map(
            (t) => (

              <option key={t}>
                {t}
              </option>

            )
          )
        }

      </select>

      <label>Guests</label>

      <input
        type="number"
        min="1"
        max="10"
        required
        value={guests}
        onChange={(e) =>
          setGuests(e.target.value)
        }
      />

      <button>

        Reserve Table

      </button>

    </form>

  );

}

export default BookingForm;