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
        auth.signInWithRedirect(provider)
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
        <nav className="bg-blue-300 h-auto border-b-2">
            {user.id ? (
                <div className="md:flex md:justify-between">
                    <div className="container">
                        <form onSubmit={handleSubmit} className="md:flex md:justify-start">
                            <input
                                type="text"
                                placeholder="Front"
                                className="border w-72 py-2 px-3 m-2 text-grey-darkest border-gray-600 rounded"
                                value={state.front}
                                onChange={handleFront}
                            />
                            <input
                                type="text"
                                placeholder="Back"
                                className="border w-72 py-2 px-3 m-2 text-grey-darkest border-gray-600 rounded"
                                value={state.back}
                                onChange={handleBack}
                            />
                            <div>
                                <button className="bg-yellow-300 hover:bg-yellow-400 text-lg px-2 py-1 m-2 rounded-lg">
                                    Add Card
                                </button>
                            </div>
                        </form>
                    </div>
                    <button
                        onClick={logout}
                        className="bg-pink-400 hover:bg-pink-600 text-lg px-2 py-1 m-2 rounded-lg flex-grow-0">
                        Logout
                    </button>{" "}
                </div>
            ) : (
                <div className="sm:flex justify-between">
                    <h1 className="my-auto text-lg mx-2">Welcome to Mempool</h1>
                    <button onClick={login} className="bg-pink-400 hover:bg-pink-600 text-lg px-2 py-1 m-2 rounded-lg">
                        Login
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Nav;
