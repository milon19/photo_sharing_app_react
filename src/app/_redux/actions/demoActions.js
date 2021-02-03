import { DEMO_INCREMENT, DEMO_DECREMENT } from "../constants";

export function increament() {
    return {
        type: DEMO_INCREMENT,
    };
}

export function decrement() {
    return {
        type: DEMO_DECREMENT,
    };
}
