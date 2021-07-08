import productData from './products.json';
import styles from './Product.module.css';

type Product = {
    title: string;
}

const Products= () => {
    const products: Product[] = productData;
    return (
        
        <ul>
            {products.map((product: Product, index: number) => (
                <li  className={styles.list} key= {index}>
                    {product.title}
                </li>
            ))}
        </ul>
    )
}

export default Products;