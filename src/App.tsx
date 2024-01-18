import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import TrendingProduct from "./components/TrendingProduct";
import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import NewArrival from "./components/NewArrival";
import { useState } from "react";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <Provider store={store}>
        <Navbar setShowCart={setShowCart} />
        {showCart && <Cart setShowCart={setShowCart} />}
        <Hero />
        <Feature />
        <TrendingProduct />
        <Banner />
        <NewArrival />
        <Footer />
        <Toaster position="bottom-center" reverseOrder={false} />
      </Provider>
    </div>
  );
};

export default App;
