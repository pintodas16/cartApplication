import Product from "./Product";
import { useSelector } from "react-redux";

function ProductList() {
  const products = useSelector((state) => state);
  // console.log(products);
  return (
    <div className="productContainer" id="lws-productContainer">
      {products.products.length > 0 ? (
        products.products.map((product) => {
          return <Product product={product} key={product.id} />;
        })
      ) : (
        <h5>No product are listed !!</h5>
      )}
    </div>
  );
}
export default ProductList;
