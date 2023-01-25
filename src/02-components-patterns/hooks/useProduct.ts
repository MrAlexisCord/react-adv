import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from '../interfaces/product-interfaces';

export interface UseProductProps {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductProps) => {

    const [counter, setCounter] = useState<number>((initialValues?.count ?? value));

    const isMounted = useRef(false);

    const reset = () => {
        setCounter(initialValues?.count ?? value);
    }

    const increaseBy = (value: number) => {

        let newValue = Math.max(0, counter + value);
        newValue = initialValues?.maxCount ?
            Math.min(newValue, Math.max(initialValues.maxCount, 0)) : newValue;

        setCounter(newValue);

        // NOTE: if (onChange) onChange(); es equivalente a la siguiente línea
        onChange && onChange({
            count: newValue,
            product: product
        });
    }

    useEffect(() => {
        isMounted.current && setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    return {
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
        isMinCountReached: counter === 0,
        reset
    };
};
