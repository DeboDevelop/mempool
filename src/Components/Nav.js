import React, { useState } from "react";
import firebase, { auth, provider } from "../firebase";

function Nav({ user, setUser, setCardState }) {
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
        const userId = user.id;
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
        auth.signInWithPopup(provider)
            .then(result => {
                setUser({
                    id: result.user.email,
                });
            })
            .catch(err => console.log(err));
    };
    const logout = e => {
        e.preventDefault();
        auth.signOut()
            .then(() => {
                setUser({
                    id: null,
                });
            })
            .catch(err => console.log(err));
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
