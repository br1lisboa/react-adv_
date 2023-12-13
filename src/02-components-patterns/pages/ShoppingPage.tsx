import { ProductCard } from '../components/ProductCard';
import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

function ShoppingPage() {
    const { shoppingCart, onProductCountChange } = useShoppingCart();
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {products.map((product) => (
                    <ProductCard
                        className='bg-dark'
                        product={product}
                        key={product.id}
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.quantity || 0}
                    >
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
                    </ProductCard>
                ))}
            </div>

            <div className='shopping-cart'>
                {Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        className='bg-dark'
                        product={product}
                        style={{ width: '100px' }}
                        onChange={onProductCountChange}
                        value={product.quantity}
                    >
                        <ProductCard.Image className='custom-image' />

                        <ProductCard.Button
                            className='custom-buttons'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        />
                    </ProductCard>
                ))}
            </div>
        </div>
    );
}

export default ShoppingPage;
