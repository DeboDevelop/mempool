import React, { useContext } from "react";
import { CardContext } from "../CardContext";
import Card from "./Card";

function AllCards() {
    const [state] = useContext(CardContext);
    return (
        <div>
            {state.map(card => {
                return <Card key={card.id} id={card.id} front={card.front} back={card.back} />;
            })}
        </div>
    );
}

export default AllCards;
