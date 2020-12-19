import React, { useContext } from "react";
import { CardContext } from "../CardContext";
import Card from "./Card";

function AllCards() {
    const [state] = useContext(CardContext);
    return (
        <div>
            {state.map(card => (
                <Card key={card.id} front={card.front} back={card.back} />
            ))}
        </div>
    );
}

export default AllCards;
