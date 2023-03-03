import "./styles/output.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/homePage";
import CartPage from "./components/pages/cartPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState("#");
  const handlePage = () => {
    if (address === "#home" || address === "#") {
      return <Home />;
    } else {
      return <CartPage />;
    }
  };
  return (
    <Provider store={store}>
      <div>
        <Navbar setAddress={setAddress} />
        {handlePage()}
      </div>
    </Provider>

    // using React Router
    // <BrowserRouter>
    //   <Provider store={store}>
    //     <div>
    //       <Navbar />
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/cart" element={<CartPage />} />
    //       </Routes>
    //     </div>
    //   </Provider>
    // </BrowserRouter>
  );
}

export default App;
