import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from '../interfaces/product-interfaces';

export interface UseProductProps {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: UseProductProps) => {
    const [counter, setCounter] = useState(value);


    const increaseBy = (value: number) => {

        const newValue = Math.max(0, counter + value)
        setCounter(newValue);

        // NOTE: if (onChange) onChange(); es equivalente a la siguiente línea
        onChange && onChange({
            count: newValue,
            product: product
        });
    }

    useEffect(() => {
        setCounter(value);
    }, [value]);


    return {
        counter,
        increaseBy,
    };
};
