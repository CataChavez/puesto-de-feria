import Products from "../../components/products/Products";
import styles from './Welcome.module.css';




const Welcome = () => {
    return (
        <div className={styles.back}>
            <Products/>            
        </div>
    )
}

export default Welcome;