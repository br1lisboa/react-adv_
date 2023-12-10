import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import Styles from '../styles/styles.module.css';

type Props = {
    className?: string;
    style?: React.CSSProperties;
};

export function ButtonComponent(props: Props) {
    const { className, style } = props;
    const { counter, handleChangeCounter } = useContext(ProductContext);

    return (
        <div
            className={`${Styles.buttonsContainer} ${className}`}
            style={style}
        >
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
