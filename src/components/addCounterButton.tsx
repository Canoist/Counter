import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { createCounter } from "../store/counters";
import { useAppDispatch } from "../store/hooks";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddCounterButton: React.FC = () => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(createCounter());
    };
    return (
        <Tooltip title="Add counter" placement="right-end">
            <IconButton onClick={onClick}>
                <AddCircleIcon />
            </IconButton>
        </Tooltip>
    );
};
export default AddCounterButton;
