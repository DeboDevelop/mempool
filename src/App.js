import "./App.css";
import { CardProvider } from "./CardContext";
import AllCards from "./Components/AllCards";

function App() {
    return (
        <CardProvider>
            <AllCards />
        </CardProvider>
    );
}

export default App;
