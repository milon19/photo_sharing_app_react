import { DEMO_INCREMENT, DEMO_DECREMENT } from "../constants";
import { produce } from "immer";

const initalState = 5;

const demoReducer = (state = initalState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case DEMO_INCREMENT:
                draft = draft + 1;
                break;
            case DEMO_DECREMENT:
                draft = draft - 1;
                break;
            default:
                break;
        }
    });

export default demoReducer;
