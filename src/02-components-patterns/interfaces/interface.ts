export interface ProductCardProps {
    id: string;
    title: string;
    img?: string;
}

export type ProductContextType = {
    counter: number;
    handleChangeCounter: (value: number) => void;
    product: ProductCardProps;
};
