import React, { useEffect, useState } from "react";
import "./App.css";
import { CardProvider } from "./CardContext";
import AllCards from "./Components/AllCards";
import Nav from "./Components/Nav";
import firebase, { auth } from "./firebase";

function App() {
    const [user, setUser] = useState(() => {
        return { id: null };
    });
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            const userId = firebase.auth().currentUser.uid;
            if (user) {
                setUser({ id: userId });
            }
        });
    }, []);
    return (
        <CardProvider>
            <Nav user={user} setUser={setUser} />
            <AllCards />
        </CardProvider>
    );
}

export default App;
