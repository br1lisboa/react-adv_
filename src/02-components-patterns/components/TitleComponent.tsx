import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import Styles from '../styles/styles.module.css';

type TitleComponentProps = {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
};

export function TitleComponent(props: TitleComponentProps) {
    const { title, className, style } = props;
    const { product } = useContext(ProductContext);

    const titleToShow = title ? title : product.title;

    return (
        <span
            className={`${Styles.productDescription} ${className}`}
            style={style}
        >
            {titleToShow}
        </span>
    );
}
