import { Link } from "react-router-dom";
import { useState } from "react";
import './reservations.scss';

const Details = () => {

    const [state, setState] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "+1"
    })
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setState((prevProp) => ({
            ...prevProp,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Your Details</h1>
            <label htmlFor="fName">First Name</label>
            <input type="text"
                id="fName"
                placeholder="First Name"
                name="fName"
                value={state.fName}
                onChange={handleInputChange}
                required
            />
            <label htmlFor="lName">Last Name</label>
            <input type="text"
                id="lName"
                placeholder="Last Name"
                name="lName"
                value={state.lName}
                onChange={handleInputChange}
                required
            />
            <label htmlFor="email">Email</label>
            <input type="email"
                id="email"
                placeholder="you@company.com"
                name="email"
                value={state.email}
                onChange={handleInputChange}
                required
            />
            <label htmlFor="phone">Phone Number</label>
            <input className="phone" type="tel"
                id="phone"
                name="phone"
                value={state.phone}
                onChange={handleInputChange}
            />
            <Link to='/reservations'>
                <input className="submit"
                    type="submit"
                    value="NEXT ->"
                    disabled={!state.email}
                />
            </Link>
        </form>
        </>
    )
}

export default Details;