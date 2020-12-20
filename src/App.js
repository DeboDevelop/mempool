import React, { useEffect, useState } from "react";
import "./App.css";
import AllCards from "./Components/AllCards";
import Nav from "./Components/Nav";
import firebase, { auth } from "./firebase";

function App() {
    const [user, setUser] = useState(() => {
        return { id: null };
    });
    const [cardState, setCardState] = useState(() => []);
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setUser({ id: user.email });
            }
        });
    }, []);
    useEffect(() => {
        const cardsRef = firebase.database().ref("cards");
        cardsRef.on("value", snapshot => {
            let cards = snapshot.val();
            let newState = [];
            for (let card in cards) {
                newState.push({
                    id: card,
                    front: cards[card].front,
                    back: cards[card].back,
                    user: cards[card].user,
                });
            }
            const userId = user.id;
            newState = newState.filter(card => card.user === userId);
            setCardState(() => [...newState]);
        });
    }, [user.id]);
    return (
        <>
            <Nav user={user} setUser={setUser} setCardState={setCardState} />
            <AllCards user={user} cardState={cardState} />
        </>
    );
}

export default App;
