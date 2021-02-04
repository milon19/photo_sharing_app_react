import { DEMO_INCREMENT, DEMO_DECREMENT } from "../constants";
import { produce } from "immer";

const initalState = {
    value: 0,
};

const demoReducer = (state = initalState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case DEMO_INCREMENT:
                draft.value = action.payload;
                break;
            case DEMO_DECREMENT:
                draft.value = action.payload;
                break;
            default:
                break;
        }
    });

export default demoReducer;
