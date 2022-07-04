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
import { removeСounter, updateCounter } from "../store/counters";

interface ICounterItem {
    counter: ICounter;
    index: number;
}

const CounterItem: React.FC<ICounterItem> = ({ counter, index }) => {
    const dispatch = useAppDispatch();

    const handleInc = () => {
        const newCounter = { ...counter, value: counter.value + 1 };
        dispatch(updateCounter(newCounter));
    };

    const handleDec = () => {
        const newCounter = { ...counter, value: counter.value - 1 };
        dispatch(updateCounter(newCounter));
    };

    const onDelete = (id: number) => {
        dispatch(removeСounter(id));
    };

    return (
        <ListItem
            sx={{ flexGrow: 1 }}
            secondaryAction={
                <IconButton
                    aria-label="delete"
                    onClick={() => {
                        onDelete(counter._id);
                    }}>
                    <DeleteIcon />
                </IconButton>
            }>
            <ListItemText primary={`Count:  ${counter.value}`} />
            {index % 4 !== 0 && (
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
export default CounterItem;
