import { useState } from "react";
import Header from "./components/Header";
import ActivityList from "./components/ActivityList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (activity) => {
    const existing = cart.find((a) => a.id === activity.id);
    if (existing) {
      setCart(cart.map(a => a.id === activity.id ? { ...a, quantity: a.quantity + 1 } : a));
    } else {
      setCart([...cart, { ...activity, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(
      cart
        .map(a => a.id === id ? { ...a, quantity: a.quantity - 1 } : a)
        .filter(a => a.quantity > 0)
    );
  };

  return (
    <div className="App">
      <Header />
      <main className="layout">
        <ActivityList onAdd={addToCart} />
        <Cart cart={cart} onRemove={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
