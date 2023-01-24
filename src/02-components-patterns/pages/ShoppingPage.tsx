import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>

                <ProductCard
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductCard.Image
                        className='custom-image'
                        img={product.img}
                    />
                    <ProductCard.Title
                        className='text-bold'
                        title={product.title}
                    />
                    <ProductCard.Buttons
                        className="custom-buttons"
                    />
                </ProductCard>

                <ProductCard
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage
                        className='custom-image'
                        img={product.img}
                        style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                    />
                    <ProductTitle
                        className='text-bold'
                        title={product.title}

                    />
                    <ProductButtons
                        className="custom-buttons"
                    />
                </ProductCard>

                <ProductCard
                    product={product}
                    className='bg-dark'
                    style={{ backgroundColor: '#70D1F8' }}
                >
                    <ProductImage
                        className='custom-image'
                        img={product.img}
                        style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                    />
                    <ProductTitle
                        title={product.title}
                        style={{ fontWeight: 'bold' }}
                    />
                    <ProductButtons
                        style={{ display: 'flex', justifyContent: 'end' }}
                    />
                </ProductCard>
            </div>
        </div>
    )
}
