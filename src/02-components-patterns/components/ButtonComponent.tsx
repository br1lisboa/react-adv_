import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import Styles from '../styles/styles.module.css';

export function ButtonComponent() {
    const { counter, handleChangeCounter } = useContext(ProductContext);

    return (
        <div className={Styles.buttonsContainer}>
            <button
                className={Styles.buttonMinus}
                onClick={() => handleChangeCounter(-1)}
            >
                -
            </button>
            <div className={Styles.countLabel}>{counter}</div>
            <button
                className={Styles.buttonAdd}
                onClick={() => handleChangeCounter(1)}
            >
                +
            </button>
        </div>
    );
}
