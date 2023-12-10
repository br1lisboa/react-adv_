import { ProductCard } from '../components/ProductCard';

const product2 = {
    id: '2',
    title: 'Coffee Mug 2',
};

const product3 = {
    id: '3',
    title: 'Coffee Mug 3',
    img: './coffee-mug.png',
};

function ShoppingPage() {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <ProductCard product={product2}>
                    <ProductCard.Image />
                    <ProductCard.Title title='Hola Mundo' />
                    <ProductCard.Button />
                </ProductCard>

                <ProductCard product={product3}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Button />
                </ProductCard>
            </div>
        </div>
    );
}

export default ShoppingPage;
