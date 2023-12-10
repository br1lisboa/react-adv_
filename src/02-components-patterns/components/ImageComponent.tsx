import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import { ImageComponentProps } from '../interfaces/interface';
import Styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export function ImageComponent(props: ImageComponentProps) {
    const { img, title } = props;
    const { product } = useContext(ProductContext);

    const imgToShow = img ? img : product.img;
    const titleToShow = title ? title : product.title;

    return (
        <img
            className={Styles.productImg}
            src={imgToShow ? imgToShow : noImage}
            alt={titleToShow ? titleToShow : 'No image'}
        />
    );
}
