import { useState } from 'react';

export function useProductCard() {
    const [counter, setCounter] = useState<number>(0);

    function handleChangeCounter(value: number) {
        // if (sign === '+') {
        //     setCounter((prev) => prev + 1);
        // }
        // if (sign === '-' && counter > 0) {
        //     setCounter((prev) => prev - 1);
        // }

        setCounter((prev) => Math.max(prev + value, 0));
    }

    return {
        counter,
        handleChangeCounter,
    };
}
