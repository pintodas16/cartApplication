import ProductList from "../ProductList";
import ProductForm from "../ProductForm";
function Home() {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <ProductList />
        <ProductForm />
      </div>
    </main>
  );
}
export default Home;
