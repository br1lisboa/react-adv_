import { ReactElement } from 'react';

export interface PropsCard {
    product: ProductCardProps;
    children?: ReactElement | ReactElement[];
}

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

export type ImageComponentProps = {
    img?: string;
    title?: string;
};

export type TitleComponentProps = {
    title?: string;
};
