import React from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../_redux/actions";

const Counter = () => {
    const counter = useSelector((state) => state.demoReducer);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        console.log("🚀 ~ file: demo.js ~ line 7 ~ Counter ~ counter", counter);

        dispatch(allActions.demoActions.increament());
    };

    const handleDecrement = () => {
        console.log("🚀 ~ file: demo.js ~ line 7 ~ Counter ~ counter", counter);

        dispatch(allActions.demoActions.decrement());
    };

    return (
        <>
            <h1>Hello</h1>

            <p>{counter}</p>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </>
    );
};

export default Counter;
