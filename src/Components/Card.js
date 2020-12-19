import React from "react";
import firebase from "../firebase";

function Card({ id, front, back }) {
    const removeCard = () => {
        const cardRef = firebase.database().ref(`/cards/${id}`);
        cardRef.remove();
    };
    return (
        <div>
            <h1>{front}</h1>
            <h3>{back}</h3>
            <button onClick={removeCard}>x</button>
        </div>
    );
}

export default Card;
