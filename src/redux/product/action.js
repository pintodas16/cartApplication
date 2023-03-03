import {
  ADDCART,
  ADDPRODUCT,
  CARTITEMDELETE,
  QUANTITYDECREASE,
  QUANTITYINCREASE,
} from "./actionType";
export const addedProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};
export const addCart = (product) => {
  return {
    type: ADDCART,
    payload: product,
  };
};
export const cartItemDelete = (id, quantity) => {
  return {
    type: CARTITEMDELETE,
    payload: {
      id,
      quantity,
    },
  };
};

export const quantityIncrease = (id) => {
  return {
    type: QUANTITYINCREASE,
    payload: id,
  };
};
export const quantityDecrease = (id) => {
  return {
    type: QUANTITYDECREASE,
    payload: id,
  };
};
