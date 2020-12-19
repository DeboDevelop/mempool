import React, { useContext, useState } from "react";
import { CardContext } from "../CardContext";

function Nav() {
    const [cardState, setCardState] = useContext(CardContext);
    const [state, setState] = useState(() => {
        return {
            front: "",
            back: "",
        };
    });

    const handleFront = e => {
        setState(prevState => {
            return {
                ...prevState,
                front: e.target.value,
            };
        });
    };
    const handleBack = e => {
        setState(prevState => {
            return {
                ...prevState,
                back: e.target.value,
            };
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        setCardState(prevState => {
            return [...prevState, state];
        });
    };
    return (
        <nav>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Front" onChange={handleFront} />
                <input type="text" placeholder="Back" onChange={handleBack} />
                <button>Add Card</button>
            </form>
        </nav>
    );
}

export default Nav;
