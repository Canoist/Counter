import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { createCounter, getCounters } from "../store/counters";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddCounterButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const counters = useAppSelector(getCounters());

    const onClick = () => {
        const newValue = counters.reduce(
            (sum, current) => sum + current.value,
            0
        );
        dispatch(createCounter(newValue));
    };
    return (
        <Tooltip
            title="Add counter"
            placement="bottom"
            sx={{ alignSelf: "flex-start" }}>
            <IconButton onClick={onClick} size="large" color="primary">
                <AddCircleIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>
    );
};
export default AddCounterButton;
