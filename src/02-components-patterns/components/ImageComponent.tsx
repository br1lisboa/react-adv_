import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import Styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

type Props = {
    img?: string;
    title?: string;
    className?: string;
    style?: React.CSSProperties;
};

export function ImageComponent(props: Props) {
    const { img, title, className, style } = props;
    const { product } = useContext(ProductContext);

    const imgToShow = img ? img : product.img;
    const titleToShow = title ? title : product.title;

    return (
        <img
            className={`${Styles.productImg} ${className}`}
            src={imgToShow ? imgToShow : noImage}
            alt={titleToShow ? titleToShow : 'No image'}
            style={style}
        />
    );
}
