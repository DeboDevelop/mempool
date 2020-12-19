import React, { useContext } from "react";
import { CardContext } from "../CardContext";
import Card from "./Card";

function AllCards() {
    const [state, setState] = useContext(CardContext);
    console.log(state);
    return (
        <div>
            {state.map(card => (
                <Card front={card.front} back={card.back} />
            ))}
        </div>
    );
}

export default AllCards;
