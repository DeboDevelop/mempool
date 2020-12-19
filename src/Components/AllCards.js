import React, { useContext } from "react";
import { CardContext } from "../CardContext";
import Card from "./Card";

function AllCards({ user, setUser }) {
    const [cardState] = useContext(CardContext);
    return (
        <>
            {user.id ? (
                <div>
                    {cardState.map(card => {
                        return <Card key={card.id} id={card.id} front={card.front} back={card.back} />;
                    })}
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default AllCards;
