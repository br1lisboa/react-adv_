import { useContext } from 'react';
import { TitleComponentProps } from '../interfaces/interface';
import { ProductContext } from './ProductCard';
import Styles from '../styles/styles.module.css';

export function TitleComponent(props: TitleComponentProps) {
    const { title } = props;
    const { product } = useContext(ProductContext);

    const titleToShow = title ? title : product.title;

    return <span className={Styles.productDescription}>{titleToShow}</span>;
}
