import { List } from "@mui/material";
import React from "react";
import "./App.css";
import ConuterItem from "./components/counterItem";

function App() {
    return (
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            {[1, 2, 3].map((value, index) => (
                <ConuterItem index={index} value={value} />
            ))}
        </List>
    );
}

export default App;
