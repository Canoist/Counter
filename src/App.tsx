import { List } from "@mui/material";
import React from "react";
import ConuterItem from "./components/counterItem";
import { getCounters } from "./store/counters";
import { useAppSelector } from "./store/hooks";
import ICounter from "./types/ICounter";

function App() {
    const counters = useAppSelector(getCounters());
    return (
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            {counters.map((counter: ICounter, index: number) => (
                <ConuterItem index={index} counter={counter} />
            ))}
        </List>
    );
}

export default App;
