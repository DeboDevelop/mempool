import React from "react";
import "../assets/Card.css";
import firebase from "../firebase";

function Card({ id, front, back }) {
    const removeCard = () => {
        const cardRef = firebase.database().ref(`/cards/${id}`);
        cardRef.remove();
    };
    return (
        <div className="h-24 w-40 m-4 p-2">
            <div className="h-full w-full m-4 card rounded-md border-gray-900 shadow-lg">
                <div className="innercard">
                    <div className="bg-white cardface front">
                        <button className="m-2 px-2 bg-red-600 rounded" onClick={removeCard}>
                            x
                        </button>
                        <h1 className="text-center m-2">{front}</h1>
                    </div>
                    <div className="bg-white cardface back text-right">
                        <button className="m-2 px-2 bg-red-600 rounded" onClick={removeCard}>
                            x
                        </button>
                        <h1 className="text-center m-2">{back}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
