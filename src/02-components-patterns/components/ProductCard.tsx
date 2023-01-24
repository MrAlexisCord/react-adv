import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product, OnChangeArgs } from '../interfaces/product-interfaces';
import { IClassable, IStyleable } from '../interfaces/attribute-interfaces';

export interface ProductCardProps extends IClassable, IStyleable {
    product: Product,
    children?: ReactElement[] | ReactElement,
    onChange?: (args: OnChangeArgs) => void,
    value?: number
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange ,value}: ProductCardProps) => {

    const { counter, increaseBy } = useProduct({ onChange, product, value });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>

            <div
                className={`${styles.productCard} ${className ?? ''}`}
                style={style}
            >
                {children}
            </div>
        </Provider>
    )
}
