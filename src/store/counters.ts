import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import ICounter from "../types/ICounter";
import { countReducer } from "../utils/countReducer";

type CounterState = {
    entities: ICounter[];
    isLoading: boolean;
    dataLoaded: boolean;
    error: string | null;
};

const initialState: CounterState = {
    entities: [],
    isLoading: false,
    dataLoaded: false,
    error: null,
};

const countersSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        countersRequestFailed: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        counterDeleted: (state, action: PayloadAction<number>) => {
            state.entities = state.entities.filter(
                (counter) => counter._id !== action.payload
            );
        },
        counterCreated: (state) => {
            state.entities.push({
                value: state.entities.reduce(countReducer, 0),
                _id: Number(Date.now()),
            });
        },
    },
});

const { reducer: countersReducer, actions } = countersSlice;
const { countersRequestFailed, counterDeleted, counterCreated } = actions;

export const createCounter = () => async (dispatch: Dispatch) => {
    try {
        dispatch(counterCreated());
    } catch (error: any) {
        dispatch(countersRequestFailed(error.message));
    }
};

export const removeСounter = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(counterDeleted(id));
    } catch (error: any) {
        dispatch(countersRequestFailed(error.message));
    }
};

export const getCounters = () => (state: { counters: CounterState }) =>
    state.counters.entities;

export default countersReducer;
