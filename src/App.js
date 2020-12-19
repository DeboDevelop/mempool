import "./App.css";
import { CardProvider } from "./CardContext";
import AllCards from "./Components/AllCards";
import Nav from "./Components/Nav";

function App() {
    return (
        <CardProvider>
            <Nav />
            <AllCards />
        </CardProvider>
    );
}

export default App;
