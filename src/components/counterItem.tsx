import { IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface IConuterItem {
    value: number | string;
    index: number;
}

const ConuterItem: React.FC<IConuterItem> = ({ value, index }) => {
    return (
        <ListItem
            key={index}
            secondaryAction={
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            }>
            <ListItemText primary={`Line item ${value}`} />
        </ListItem>
    );
};
export default ConuterItem;
