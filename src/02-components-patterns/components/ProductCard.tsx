import Styles from '../styles/styles.module.css';
import { useProductCard } from '../hooks/useProductCard';
import { ReactElement, createContext } from 'react';
import {
    InitialValuesProps,
    ProductCardHandlersProps,
    ProductCardProps,
    ProductContextType,
    onChangeArgs,
} from '../interfaces/interface';
import { ImageComponent, TitleComponent, ButtonComponent } from '../components';

export const ProductContext = createContext({} as ProductContextType);

const { Provider } = ProductContext;

type Props = {
    product: ProductCardProps;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlersProps) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValuesProps;
};

export function ProductCard(props: Props) {
    const {
        children,
        product,
        className,
        style,
        onChange,
        value,
        initialValues,
    } = props;

    const { counter, handleChangeCounter, maxCount, isMaxCountReached, reset } =
        useProductCard({
            onChange,
            product,
            value,
            initialValues,
        });

    return (
        <Provider
            value={{
                counter,
                handleChangeCounter,
                product,
                maxCount,
            }}
        >
            <div
                className={`${Styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached: isMaxCountReached,
                    maxCount: maxCount,
                    increaseBy: handleChangeCounter,
                    product: product,
                    reset: reset,
                })}
            </div>
        </Provider>
    );
}

ProductCard.Image = ImageComponent;
ProductCard.Title = TitleComponent;
ProductCard.Button = ButtonComponent;
