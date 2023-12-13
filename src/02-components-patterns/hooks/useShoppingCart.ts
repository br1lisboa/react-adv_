import { useState } from 'react';
import { ProductCardProps } from '../interfaces/interface';

interface ProductInCar extends ProductCardProps {
    quantity: number;
}

export function useShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCar;
    }>({});

    function onProductCountChange({
        product,
        count,
    }: {
        product: ProductCardProps;
        count: number;
    }) {
        setShoppingCart((prev) => {
            const productInCar: ProductInCar = prev[product.id] || {
                ...product,
                quantity: 0,
            };

            if (Math.max(productInCar.quantity + count, 0) > 0) {
                productInCar.quantity += count;
                return { ...prev, [product.id]: productInCar };
            }

            const { [product.id]: toDelete, ...rest } = prev;

            return { ...rest };

            // if (count === 0) {
            //     const { [product.id]: toDelete, ...rest } = prev;
            //     return rest;
            // }
            // return { ...prev, [product.id]: { ...product, quantity: count } };
        });
    }
    return { shoppingCart, onProductCountChange };
}
