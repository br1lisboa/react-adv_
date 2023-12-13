import Styles from '../styles/styles.module.css';
import { useProductCard } from '../hooks/useProductCard';
import { ReactElement, createContext } from 'react';
import {
    ProductCardProps,
    ProductContextType,
    onChangeArgs,
} from '../interfaces/interface';
import { ImageComponent, TitleComponent, ButtonComponent } from '../components';

export const ProductContext = createContext({} as ProductContextType);

const { Provider } = ProductContext;

type Props = {
    product: ProductCardProps;
    className?: string;
    children?: ReactElement | ReactElement[];
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
};

export function ProductCard(props: Props) {
    const { children, product, className, style, onChange, value } = props;

    const { counter, handleChangeCounter } = useProductCard({
        onChange,
        product,
        value,
    });

    return (
        <Provider
            value={{
                counter,
                handleChangeCounter,
                product,
            }}
        >
            <div
                className={`${Styles.productCard} ${className}`}
                style={style}
            >
                {children}
            </div>
        </Provider>
    );
}

ProductCard.Image = ImageComponent;
ProductCard.Title = TitleComponent;
ProductCard.Button = ButtonComponent;
