
import { useState } from "react";
import './reservations.scss';

const Details = (props) => {

    const [state, setState] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "+1",
        date: "",
        time: "16:00",
        guests: "1",
        occasion: "Birthday"
    });
    const [confirm, setConfirm] = useState(false);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setState((prevProp) => ({
            ...prevProp,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(state);
    };
    const submitBtn = (event) => {
        setConfirm(!confirm);
        event.currentTarget.disabled = true; //This disables the button after one click
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Book a Table</h1>
            <div className="formBox">
                <div>
                    <li><label htmlFor="fName">First Name</label></li>
                    <li><input type="text"
                    id="fName"
                    placeholder="First Name"
                    name="fName"
                    value={state.fName}
                    onChange={handleInputChange}
                    required
                    /></li>
                </div>
                    <div>
                    <li><label htmlFor="lName">Last Name</label></li>
                    <li><input type="text"
                    id="lName"
                    placeholder="Last Name"
                    name="lName"
                    value={state.lName}
                    onChange={handleInputChange}
                    required
                    /></li>
                </div>
            </div>
            <div className="formBox">
                <div>
                    <li><label htmlFor="email">Email</label></li>
                    <li><input type="email"
                        id="email"
                        placeholder="you@company.com"
                        name="email"
                        value={state.email}
                        onChange={handleInputChange}
                        required
                    /></li>
                </div>
                <div>
                    <li><label htmlFor="phone">Phone:</label></li>
                    <li><input className="phone" type="tel"
                        id="phone"
                        name="phone"
                        value={state.phone}
                        onChange={handleInputChange}
                    /></li>
                </div>
            </div>
            <div className="formBox">
                <div>
                    <li><label htmlFor="res-date">Date</label></li>
                    <li><input
                    type="date"
                    id="res-date"
                    name="date"
                    value={state.date}
                    placeholder="Pick Date"
                    onChange={handleInputChange}
                    required/></li>
                </div>
                <div>
                    <li><label htmlFor="res-time">Choose time</label></li>
                    <li><select id="res-time " name="time" value={state.time} onChange={handleInputChange} required>
                        <option>16:00</option>
                        <option>18:00</option>
                        <option>20:00</option>
                        <option>22:00</option>
                        <option>24:00</option>
                    </select></li>
                </div>
            </div>
            <div className="formBox">
                <div>
                    <li><label htmlFor="guests">Number of guests</label></li>
                    <li><input
                        type="number"
                        name="guests"
                        placeholder="1 to 10"
                        min="1"
                        max="10"
                        id="guests"
                        value={state.guests}
                        onChange={handleInputChange}
                        required/></li>
                    </div>
                    <div>
                        <li><label htmlFor="occasion">Occasion</label></li>
                        <li><select id="occasion" name="occasion" value={state.occasion} onChange={handleInputChange}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select></li>
                    </div>
                </div>
                <input className="submit" type="submit" value="Confirm Booking" onClick={submitBtn} 
                    disabled={!state.date || !state.fName || state.guests <= 10}/>
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

export default Details;