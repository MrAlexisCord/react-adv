import styles from '../styles/styles.module.css';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import { IClassable, IStyleable } from '../interfaces/attribute-interfaces';

export interface ProductButtonsProps extends IClassable, IStyleable { }

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {

    const { increaseBy, counter } = useContext(ProductContext);

    return (
        <div
            className={`${styles.buttonsContainer} ${className ?? ''}`}
            style={style}
        >
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>

            <div className={styles.countLabel}>{counter}</div>

            <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>+</button>
        </div>
    );
}