import {
    Button,
    ButtonGroup,
    IconButton,
    ListItem,
    ListItemText,
} from "@mui/material";
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
            <ListItemText primary={`Count:  ${value}`} />
            <ButtonGroup disableElevation variant="contained" sx={{ mr: 2 }}>
                <Button color="success">+</Button>
                <Button color="error">-</Button>
            </ButtonGroup>
        </ListItem>
    );
};
export default ConuterItem;
