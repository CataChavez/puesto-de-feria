import productData from '../products/products.json';
import styles from './Product.module.css';

type Product = {
    title: string;
}

const Product= () => {
    const product: Product[] = productData;
    return (
        
        <ul>
            {product.map((product: Product, index: number) => (
                <li  className={styles.list} key= {index}>
                    {product.title}
                </li>
            ))}
        </ul>
    )
}

export default Product;