import {
    Button,
    ButtonGroup,
    IconButton,
    ListItem,
    ListItemText,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ICounter from "../types/ICounter";
import { useAppDispatch } from "../store/hooks";
import { updateCounter } from "../store/counters";

interface IConuterItem {
    counter: ICounter;
    index: number;
}

const ConuterItem: React.FC<IConuterItem> = ({ counter, index }) => {
    const dispatch = useAppDispatch();

    const handleInc = () => {
        if (typeof counter.value === "number") {
            counter.value++;
            dispatch(updateCounter(counter));
        }
    };
    const handleDec = () => {
        if (typeof counter.value === "number") {
            counter.value--;
            dispatch(updateCounter(counter));
        }
    };
    return (
        <ListItem
            secondaryAction={
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            }>
            <ListItemText primary={`Count:  ${counter.value}`} />
            {index % 4 === 0 && (
                <ButtonGroup
                    disableElevation
                    variant="contained"
                    sx={{ mr: 2 }}>
                    <Button onClick={handleInc} color="success">
                        +
                    </Button>
                    <Button onClick={handleDec} color="error">
                        -
                    </Button>
                </ButtonGroup>
            )}
        </ListItem>
    );
};
export default ConuterItem;
