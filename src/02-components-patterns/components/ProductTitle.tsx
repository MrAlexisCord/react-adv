import styles from '../styles/styles.module.css';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import { IClassable, IStyleable } from '../interfaces/attribute-interfaces';

export interface ProductTitleProps extends IClassable, IStyleable {
    title?: string;
}

export const ProductTitle = ({ title, className, style }: ProductTitleProps) => {

    const { product } = useContext(ProductContext);

    let titleToShow: string = '';

    if (title && title.length > 0) {
        titleToShow = title;
    } else if (product.title && product.title.length > 0) {
        titleToShow = product.title;
    }

    return (
        <span
            className={`${styles.productDescription} ${className ?? ''}`}
            style={style}
        >
            {titleToShow}
        </span>);
}