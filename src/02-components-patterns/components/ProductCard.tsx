import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/product-interfaces';
import { IClassable, IStyleable } from '../interfaces/attribute-interfaces';


export interface ProductCardProps extends IClassable, IStyleable {
    product: Product,
    //children?: ReactElement[] | ReactElement,
    children: (args: ProductCardHandlers) => JSX.Element,
    onChange?: (args: OnChangeArgs) => void,
    value?: number;
    initialValues?: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, isMinCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount,
        }}>

            <div
                className={`${styles.productCard} ${className ?? ''}`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached,
                    isMinCountReached,
                    product,
                    increaseBy,
                    reset
                })}
            </div>
        </Provider>
    )
}
