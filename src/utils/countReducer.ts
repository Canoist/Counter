import ICounter from "../types/ICounter";

export function countReducer(total: number, current: ICounter): number {
    return total + current.value;
}
