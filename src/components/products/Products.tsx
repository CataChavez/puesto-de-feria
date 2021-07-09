import productsData from './products.json';
import AddToCart from '../addToCart/AddToCart'


interface ProductsProps{
    title : string;
    price : number;
    stock : number;
}

const Products = () => {
    const products: ProductsProps[] = productsData;
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md2 g-4">
          {products.map((products: ProductsProps, index: number) => (
          <div className="col-sm-2">
            <div className="card">
            <div className="card-body">
              <h5 className="card-title" key={index}>{products.title}</h5>
              <p className="card-text">Stock: {products.stock} uni.</p>
              <p className="card-text">Precio: ${products.price}</p>
            </div>
            <AddToCart/>
          </div>
          </div>
          ))}
        </div>
      </div>
    )
  }

export default Products;