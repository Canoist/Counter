import { Box, List } from "@mui/material";
import React from "react";
import AddCounterButton from "./components/addCounterButton";
import CounterItem from "./components/counterItem";
import { getCounters } from "./store/counters";
import { useAppSelector } from "./store/hooks";
import ICounter from "./types/ICounter";

function App() {
    const counters = useAppSelector(getCounters());
    return (
        <Box
            sx={{
                display: "flex",
                p: 3,
                justifyContent: "space-between",
            }}>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 460,
                    bgcolor: "background.paper",
                }}>
                {counters.map((counter: ICounter, index: number) => (
                    <CounterItem
                        index={index + 1}
                        counter={counter}
                        key={counter._id}
                    />
                ))}
            </List>
            <AddCounterButton />
        </Box>
    );
}

export default App;
