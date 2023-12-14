import { useEffect, useRef, useState } from 'react';
import {
    InitialValuesProps,
    ProductCardProps,
    onChangeArgs,
} from '../interfaces/interface';

interface useProductCardProps {
    product: ProductCardProps;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValuesProps;
}

export function useProductCard(props: useProductCardProps) {
    const { product, onChange, value = 0, initialValues } = props;

    const isMounted = useRef(false);

    const [counter, setCounter] = useState<number>(
        initialValues?.count || value
    );

    function handleChangeCounter(value: number) {
        let newValue = Math.max(counter + value, 0);

        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    }

    function reset() {
        setCounter(initialValues?.count || value);
    }

    useEffect(
        function setJustIfMounted() {
            if (!isMounted.current) return;

            setCounter(value);
        },
        [value]
    );

    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached:
            !!initialValues?.maxCount && counter === initialValues?.maxCount,

        handleChangeCounter,
        reset,
    };
}
