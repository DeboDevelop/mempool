import React, { useContext, useState } from "react";
import { CardContext } from "../CardContext";
import firebase, { auth, provider } from "../firebase";

function Nav({ user, setUser }) {
    const [cardState, setCardState] = useContext(CardContext);
    const [state, setState] = useState(() => {
        return {
            front: "",
            back: "",
        };
    });

    const handleFront = e => {
        setState(prevState => {
            return {
                ...prevState,
                front: e.target.value,
            };
        });
    };
    const handleBack = e => {
        setState(prevState => {
            return {
                ...prevState,
                back: e.target.value,
            };
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        const userId = firebase.auth().currentUser.uid;
        setCardState(prevState => {
            return [...prevState, { front: state.front, back: state.back, user: userId }];
        });
        const itemsRef = firebase.database().ref("cards");
        itemsRef.push({ front: state.front, back: state.back, user: userId });
        setState(() => {
            return {
                front: "",
                back: "",
            };
        });
    };
    const login = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).then(() => {
            const userId = firebase.auth().currentUser.uid;
            setUser({
                id: userId,
            });
        });
    };
    const logout = e => {
        e.preventDefault();
        auth.signOut().then(() => {
            setUser({
                id: null,
            });
        });
    };
    return (
        <nav>
            {user.id ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Front" value={state.front} onChange={handleFront} />
                        <input type="text" placeholder="Back" value={state.back} onChange={handleBack} />
                        <button>Add Card</button>
                    </form>
                    <button onClick={logout}>Logout</button>{" "}
                </div>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </nav>
    );
}

export default Nav;
