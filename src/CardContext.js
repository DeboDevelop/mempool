import { createContext, useState } from "react";

export const CardContext = createContext([]);

export const CardProvider = props => {
    const [state, setState] = useState(() => {
        return [
            {
                front: "Hello",
                back: "World",
            },
            {
                front: "When is the World's Day",
                back: "Today is the World's Day",
            },
        ];
    });
    return <CardContext.Provider value={[state, setState]}>{props.children}</CardContext.Provider>;
};
