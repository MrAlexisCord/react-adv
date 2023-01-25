import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductCardProps } from "../components/ProductCard";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";

export interface Product {
    id: string;
    title: string;
    price?: number;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (props: ProductTitleProps) => JSX.Element,
    Image: (props: ProductImageProps) => JSX.Element,
    Buttons: (props: ProductButtonsProps) => JSX.Element;
}

export interface OnChangeArgs {
    product: Product,
    count: number
}

export interface ProductInCart extends Product {
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    isMinCountReached: boolean;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}