import { useEffect, useRef, useState } from 'react';
import { ProductCardProps, onChangeArgs } from '../interfaces/interface';

interface useProductCardProps {
    product: ProductCardProps;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export function useProductCard(props: useProductCardProps) {
    const { product, onChange, value = 0 } = props;

    const isControlled = useRef(!!onChange);

    const [counter, setCounter] = useState<number>(value);

    function handleChangeCounter(value: number) {
        if (isControlled.current) {
            return onChange && onChange({ count: value, product });
        }

        const newValue = Math.max(counter + value, 0);

        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    }

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return {
        counter,
        handleChangeCounter,
    };
}
