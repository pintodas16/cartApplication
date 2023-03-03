import { useState } from "react";
import TextInput from "./TextInput";
import { useDispatch } from "react-redux";
import { addedProduct } from "../redux/product/action";
function ProductForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const product = {
      name,
      category,
      imageUrl,
      price,
      quantity,
    };
    dispatch(addedProduct(product));
    setName("");
    setCategory("");
    setImageUrl("");
    setPrice("");
    setQuantity("");
  };
  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={handleFormSubmit}
        >
          {/* <!-- product name --> */}
          <TextInput
            label="Product Name"
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* <!-- product category --> */}
          <TextInput
            label="Category"
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          {/* <!-- product image url --> */}
          <TextInput
            label="Image Url"
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />

          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <TextInput
              label="Price"
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />

            {/* <!-- quantity --> */}
            <TextInput
              label="Quantity"
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
export default ProductForm;
