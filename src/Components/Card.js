import React from "react";

function Card({ front, back }) {
    return (
        <div>
            <h1>{front}</h1>
            <h3>{back}</h3>
        </div>
    );
}

export default Card;
