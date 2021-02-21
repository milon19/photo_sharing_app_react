import { DEMO_INCREMENT, DEMO_DECREMENT } from "../constants";

export function increament(payload) {
    return {
        type: DEMO_INCREMENT,
        payload,
    };
}

export function decrement(payload) {
    return {
        type: DEMO_DECREMENT,
        payload,
    };
}
