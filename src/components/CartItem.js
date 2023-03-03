import { useDispatch, useSelector } from "react-redux";
import {
  cartItemDelete,
  quantityIncrease,
  quantityDecrease,
} from "../redux/product/action";
function CartItem({ item }) {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    cartProductName,
    cartProductPrice,
    cartProductCategory,
    cartProductImageUrl,
    id,
    quantity,
  } = item;

  // handle increase functionality
  const handleIncrease = (id) => {
    dispatch(quantityIncrease(id));
    let product = products.products[id];
    let quantity = product.productQuantity;
    if (quantity === 0) {
      alert(`${product.name} stock out `);
    }
  };
  // handle decrease functionality
  const handleDecrease = (id) => {
    dispatch(quantityDecrease(id));
  };
  // handle delete product
  const handleDeleteProduct = (id, quantity) => {
    dispatch(cartItemDelete(id, quantity));
  };
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img
          className="lws-cartImage"
          src={cartProductImageUrl}
          alt="product"
        />

        <div className="space-y-2">
          <h4 className="lws-cartName">{cartProductName}</h4>
          <p className="lws-cartCategory">{cartProductCategory}</p>
          <p>
            BDT <span className="lws-cartPrice">{cartProductPrice}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={() => handleIncrease(id)}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            className="lws-decrementQuantity"
            onClick={() => handleDecrease(id)}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>

        <p className="text-lg font-bold">
          BDT{" "}
          <span className="lws-calculatedPrice">
            {cartProductPrice * quantity}
          </span>
        </p>
      </div>

      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => handleDeleteProduct(id, quantity)}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
export default CartItem;
