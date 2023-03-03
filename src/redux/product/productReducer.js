import {
  ADDPRODUCT,
  ADDCART,
  CARTITEMDELETE,
  QUANTITYINCREASE,
  QUANTITYDECREASE,
} from "./actionType";
import initialState from "./initialState";
const nextId = (product) => {
  const maxId = product.reduce(
    (currentMax, currentId) => Math.max(currentMax, currentId.id),
    -1
  );

  return maxId + 1;
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      const { name, category, price, quantity, imageUrl } = action.payload;
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: nextId(state.products),
            name,
            category,
            price,
            productQuantity: quantity,
            imageUrl,
          },
        ],
      };
    case ADDCART:
      const {
        id,
        cartProductName,
        cartProductCategory,
        cartProductImageUrl,
        cartProductPrice,
      } = action.payload;

      const isPresent = state.carts.findIndex((product) => product.id === id);
      // to check this product is present my cart or not
      // product does not contain my cart
      if (isPresent === -1) {
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === id) {
              return {
                ...product,
                productQuantity: product.productQuantity - 1,
              };
            }
            return product;
          }),
          carts: [
            ...state.carts,
            {
              id,
              cartProductName,
              cartProductCategory,
              cartProductImageUrl,
              cartProductPrice,
              quantity: 1,
            },
          ],
          totalQuantity: state.totalQuantity + 1,
        };
      }
      //product contain my cart
      const newState = {
        ...state,
        products: state.products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              productQuantity: product.productQuantity - 1,
            };
          }
          return product;
        }),
        carts: state.carts.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        }),
        totalQuantity: state.totalQuantity + 1,
      };
      return newState;
    // delete corresponding cart item
    case CARTITEMDELETE:
      // let { cartItemId,cartItemQuantity } = action.payload;
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              productQuantity:
                product.productQuantity + action.payload.quantity,
            };
          }
          return product;
        }),
        carts: state.carts.filter(
          (product) => product.id !== action.payload.id
        ),
        totalQuantity: state.totalQuantity - action.payload.quantity,
      };

    case QUANTITYINCREASE:
      const { productQuantity } = state.products[action.payload];
      // console.log(productQuantity);
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              productQuantity:
                product.productQuantity - 1 < 0
                  ? 0
                  : product.productQuantity - 1,
            };
          }
          return product;
        }),
        carts: state.carts.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity:
                productQuantity >= 1 ? product.quantity + 1 : product.quantity,
            };
          }
          return product;
        }),
        totalQuantity:
          productQuantity >= 1 ? state.totalQuantity + 1 : state.totalQuantity,
      };
    case QUANTITYDECREASE:
      const cartProduct = state.carts[action.payload];
      // console.log(cartProduct);
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              productQuantity:
                cartProduct.quantity > 0
                  ? product.productQuantity + 1
                  : product.productQuantity,
            };
          }
          return product;
        }),
        carts: state.carts.map((cartProduct) => {
          if (cartProduct.id === action.payload) {
            return {
              ...cartProduct,
              quantity:
                cartProduct.quantity - 1 < 0 ? 0 : cartProduct.quantity - 1,
            };
          }
          return cartProduct;
        }),
        totalQuantity:
          cartProduct.quantity > 0
            ? state.totalQuantity - 1
            : state.totalQuantity,
      };

    default:
      return state;
  }
};
export default productReducer;
