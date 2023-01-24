import { useState } from "react";

export const useProduct = () => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        setCounter((current) => Math.max(0, current + value));
    }

    return {
        counter,
        increaseBy,
    };
};
