import React, { useContext } from "react";
import { CardContext } from "../CardContext";
import Card from "./Card";

function AllCards({ user, setUser }) {
    const [state] = useContext(CardContext);
    return (
        <>
            {user.id ? (
                <div>
                    {state.map(card => {
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
