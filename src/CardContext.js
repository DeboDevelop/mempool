import { createContext, useEffect, useState } from "react";
import firebase from "./firebase";

export const CardContext = createContext([]);

export const CardProvider = props => {
    const [state, setState] = useState(() => []);
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
                });
            }
            setState(() => {
                return [...newState];
            });
        });
    }, []);
    return <CardContext.Provider value={[state, setState]}>{props.children}</CardContext.Provider>;
};
