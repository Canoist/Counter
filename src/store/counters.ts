import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import ICounter from "../types/ICounter";
import { countAsync } from "../utils/countAsync";
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
                value:
                    state.entities.length % 4
                        ? countAsync(state.entities.reduce(countReducer, 0))
                        : state.entities.reduce(countReducer, 0),
                _id: Number(Date.now()),
            });
        },
        counterUpdated: (state, action: PayloadAction<ICounter>) => {
            state.entities.map((counter) => {
                if (counter._id === action.payload._id) {
                    return (counter = action.payload);
                } else return counter;
            });
        },
    },
});

const { reducer: countersReducer, actions } = countersSlice;
const { counterDeleted, counterCreated, counterUpdated } = actions;

export const createCounter = () => (dispatch: Dispatch) => {
    dispatch(counterCreated());
};

export const removeСounter = (id: number) => (dispatch: Dispatch) => {
    dispatch(counterDeleted(id));
};

export const updateCounter = (payload: ICounter) => (dispatch: Dispatch) => {
    dispatch(counterUpdated(payload));
};

export const getCounters = () => (state: { counters: CounterState }) =>
    state.counters.entities;

export default countersReducer;
