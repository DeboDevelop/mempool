import React from "react";
import "../assets/Card.css";
import firebase from "../firebase";

function Card({ id, front, back }) {
    const removeCard = () => {
        const cardRef = firebase.database().ref(`/cards/${id}`);
        cardRef.remove();
    };
    return (
        <div className="bg-white h-24 w-40 m-4 card rounded-md border-gray-900 shadow-lg">
            <button className="m-2 px-2 bg-red-600 rounded" onClick={removeCard}>
                x
            </button>
            <div className="innercard">
                <div className="cardface front">
                    <h1>{front}</h1>
                </div>
                <div className="cardface back">
                    <h1>{back}</h1>
                </div>
            </div>
        </div>
    );
}

export default Card;
