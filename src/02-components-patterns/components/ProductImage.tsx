import styles from '../styles/styles.module.css';
import noImage from "../assets/no-image.jpg";
import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import { IClassable, IStyleable } from '../interfaces/attribute-interfaces';


export interface ProductImageProps extends IClassable, IStyleable {
    img?: string,
}

export const ProductImage = ({ img = '', className, style }: ProductImageProps) => {

    const { product } = useContext(ProductContext);

    let imgToShow: string;

    if (img && img.length > 0) {
        imgToShow = img;
    } else if (product.img && product.img.length > 0) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img
            className={`${styles.productImg} ${className ?? ''}`}
            style={style}
            src={imgToShow}
            alt='Product'
        />
    )
}