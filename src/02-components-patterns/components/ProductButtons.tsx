import styles from '../styles/styles.module.css';
import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import { IClassable, IStyleable } from '../interfaces/attribute-interfaces';

export interface ProductButtonsProps extends IClassable, IStyleable { }

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {


    // TODO: Extraer nueva propiedad maxCount
    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    // TODO: isMaxReached = useCallback, [count, maxCount]
    // TRUE si el count === maxCount
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )

    const isMinReached = useCallback(
        () => counter <= 0,
        [counter, maxCount],
    )


    return (
        <div
            className={`${styles.buttonsContainer} ${className ?? ''}`}
            style={style}
        >
            <button disabled={isMinReached()} onClick={() => increaseBy(-1)} className={`${styles.buttonMinus} ${isMinReached() ? styles.disabledMinus : ''}`}>-</button>

            <div className={styles.countLabel}>{counter}</div>

            <button disabled={isMaxReached()} onClick={() => increaseBy(1)} className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabledAdd : ''}`}>+</button>
        </div>
    );
}