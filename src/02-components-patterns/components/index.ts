import { ProductCard as ProductCardHOC } from './ProductCard';

import { ButtonComponent } from './ButtonComponent';
import { ImageComponent } from './ImageComponent';
import { TitleComponent } from './TitleComponent';

export { ButtonComponent } from './ButtonComponent';
export { ImageComponent } from './ImageComponent';
export { TitleComponent } from './TitleComponent';

export const ProductCard = Object.assign(ProductCardHOC, {
    Title: TitleComponent,
    Image: ImageComponent,
    Button: ButtonComponent,
});
