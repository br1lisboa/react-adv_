import Styles from '../styles/styles.module.css';
import { useProductCard } from '../hooks/useProductCard';
import { createContext } from 'react';
import { ProductContextType, PropsCard } from '../interfaces/interface';
import { ImageComponent, TitleComponent, ButtonComponent } from '../components';

export const ProductContext = createContext({} as ProductContextType);

const { Provider } = ProductContext;

export function ProductCard(props: PropsCard) {
    const { children, product } = props;

    const { counter, handleChangeCounter } = useProductCard();

    return (
        <Provider
            value={{
                counter,
                handleChangeCounter,
                product,
            }}
        >
            <div className={Styles.productCard}>{children}</div>
        </Provider>
    );
}

ProductCard.Image = ImageComponent;
ProductCard.Title = TitleComponent;
ProductCard.Button = ButtonComponent;
