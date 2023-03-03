import CartItem from "./CartItem";
import { useSelector } from "react-redux";
function CartContainer() {
  const cartItems = useSelector((state) => state);

  return (
    <div className="space-y-6">
      {cartItems.carts.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
}
export default CartContainer;
