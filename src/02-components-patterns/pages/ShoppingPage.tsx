import { ProductCard } from '../components/ProductCard';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

function ShoppingPage() {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <ProductCard
                className='bg-dark'
                product={product}
                key={product.id}
                initialValues={{
                    count: 5,
                    maxCount: 10,
                }}
            >
                {({ reset, increaseBy, isMaxCountReached, count }) => (
                    <>
                        <ProductCard.Image className='custom-image' />
                        <ProductCard.Title
                            className='text-white'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        />
                        <ProductCard.Button
                            className='custom-buttons'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        />
                        <button onClick={reset}>Reset</button>
                        <button onClick={() => increaseBy(2)}>+2</button>
                        <button onClick={() => increaseBy(-2)}>-2</button>
                        {isMaxCountReached && <span>{count}</span>}
                    </>
                )}
            </ProductCard>
        </div>
    );
}

export default ShoppingPage;
