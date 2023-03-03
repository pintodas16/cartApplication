import { useDispatch } from "react-redux";
import { addCart } from "../redux/product/action";
function Product({ product }) {
  const { id, name, category, imageUrl, price, productQuantity } = product;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const product = {
      id,
      cartProductName: name,
      cartProductCategory: category,
      cartProductImageUrl: imageUrl,
      cartProductPrice: price,
      cartProductQuantity: productQuantity,
    };

    dispatch(addCart(product));
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imageUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 class="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span class="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span class="lws-quantity">{productQuantity}</span>
          </p>
        </div>
        {productQuantity > 0 ? (
          <button className="lws-btnAddToCart" onClick={handleAddToCart}>
            Add To Cart
          </button>
        ) : null}
      </div>
    </div>
  );
}
export default Product;
