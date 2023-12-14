export interface ProductCardProps {
    id: string;
    title: string;
    img?: string;
}

export type ProductContextType = {
    counter: number;
    handleChangeCounter: (value: number) => void;
    product: ProductCardProps;
    maxCount?: number;
};

export interface onChangeArgs {
    product: ProductCardProps;
    count: number;
}

export type InitialValuesProps = {
    count?: number;
    maxCount?: number;
};

export interface ProductCardHandlersProps {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: ProductCardProps;
    increaseBy: (value: number) => void;
    reset: () => void;
}
