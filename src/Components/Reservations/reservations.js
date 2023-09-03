import { useState } from "react";
import './reservations.scss';
import Details from "../Details/details";
import { Link } from "react-router-dom";

const Reservations = () => {

    const [state, setState] = useState({
        date: "",
        time: "16:00",
        guests: "1",
        occasion: "Birthday"
    });
    const [confirm, setConfirm] = useState(false);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const submitBtn = (event) => {
        setConfirm(!confirm);
        event.currentTarget.disabled = true; //This disables the button after one click
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Book Your Table</h1>
                <label htmlFor="res-date">Date</label>
                <input
                    type="date"
                    id="res-date"
                    name="date"
                    value={state.date}
                    placeholder="Pick Date"
                    onChange={handleInputChange}
                    required/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " name="time" value={state.time} onChange={handleInputChange} required>
                    <option>16:00</option>
                    <option>18:00</option>
                    <option>20:00</option>
                    <option>22:00</option>
                    <option>24:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    name="guests"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={state.guests}
                    onChange={handleInputChange}
                    required/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={state.occasion} onChange={handleInputChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input className="submit" type="submit" value="Confirm Booking" onClick={submitBtn} disabled={!state.date}/>
                <Link to='/details'>
                    <input className="submit" type="submit" value="Back" />
                </Link>
                {confirm && state.date !== NaN ? (
                <div className="confirm">
                <h2>Booking ID: LLM0601{Math.floor(Math.random() * 100)}</h2>
                <h2>Booking confirmed for {state.fName} on {state.date} at {state.time} for {state.guests} people.</h2>
                <p>Email us at @support.littlelemon for making any changes</p>
                </div>
                )
                : null}
            </form>
        </>
    )
}

export default Reservations;