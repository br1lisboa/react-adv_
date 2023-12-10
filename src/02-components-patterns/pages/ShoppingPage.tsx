import { ProductCard } from '../components/ProductCard';
import '../styles/custom-styles.css';

const product = [
    {
        id: '2',
        title: 'Coffee Mug 2',
    },
    {
        id: '3',
        title: 'Coffee Mug 3',
        img: './coffee-mug.png',
    },
];

function ShoppingPage() {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <ProductCard
                    product={product[0]}
                    style={{ background: 'whiteSmoke' }}
                >
                    <ProductCard.Image />
                    <ProductCard.Title title='Hola Mundo' />
                    <ProductCard.Button />
                </ProductCard>

                <ProductCard
                    className='bg-dark'
                    product={product[1]}
                >
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title className='text-white' />
                    <ProductCard.Button className='custom-buttons' />
                </ProductCard>
            </div>
        </div>
    );
}

export default ShoppingPage;
