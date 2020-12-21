import React from "react";
import Card from "./Card";

function AllCards({ user, cardState }) {
    return (
        <div className="flex flex-row flex-wrap">
            {cardState.map(card => {
                return <Card key={card.id} id={card.id} front={card.front} back={card.back} />;
            })}
        </div>
    );
}

export default AllCards;
