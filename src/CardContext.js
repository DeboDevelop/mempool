import { createContext, useEffect, useState } from "react";
import firebase from "./firebase";

export const CardContext = createContext([]);

export const CardProvider = props => {
    const [cardState, setCardState] = useState(() => []);
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
            const userId = firebase.auth().currentUser.uid;
            newState = newState.filter(card => card.user === userId);
            setCardState(() => {
                return [...newState];
            });
        });
    }, []);
    return <CardContext.Provider value={[cardState, setCardState]}>{props.children}</CardContext.Provider>;
};
