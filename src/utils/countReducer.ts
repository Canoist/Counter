import ICounter from "../types/ICounter";

export function countReducer(total: number, current: ICounter) {
    if (typeof current.value === "number") {
        return total + current.value;
    }
}
