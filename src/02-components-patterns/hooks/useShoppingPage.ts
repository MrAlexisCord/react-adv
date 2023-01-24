import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/product-interfaces';
import '../styles/custom-styles.css';
import { products } from '../data/products-data';

export const useShoppingPage = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart((oldShoppingCart) => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] ?? { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                // Puedo incrementar
                productInCart.count += count;

                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            //Eliminar un product
            const { [product.id]: toDelete, ...rest } = { ...oldShoppingCart };
            return { ...rest };
        });
    };

    return {
        shoppingCart,
        onProductCountChange,
    };
}