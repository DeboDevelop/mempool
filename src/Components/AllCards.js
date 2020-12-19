import React, { useState } from "react";
import Card from "./Card";

function AllCards() {
    const [state, setState] = useState(() => {
        return [
            {
                front: "Hello",
                back: "World",
            },
            {
                front: "When is the World's Day",
                back: "Today is the World's Day",
            },
        ];
    });
    return (
        <div>
            {state.map(card => (
                <Card front={card.front} back={card.back} />
            ))}
        </div>
    );
}

export default AllCards;
