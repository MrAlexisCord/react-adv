import styles from '../styles/styles.module.css';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';

export const ProductTitle = ({ title }: { title?: string }) => {

    const { product } = useContext(ProductContext);

    let titleToShow: string = '';

    if (title && title.length > 0) {
        titleToShow = title;
    } else if (product.title && product.title.length > 0) {
        titleToShow = product.title;
    }

    return (<span className={styles.productDescription}>{titleToShow}</span>);
}