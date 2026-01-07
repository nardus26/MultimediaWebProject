import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import ActivityList from "./components/ActivityList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import MediaSection from "./components/MediaSection";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const audioRef = useRef(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

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

  useEffect(() => {
  const enableAudio = () => {
    if (!audioEnabled && audioRef.current) {
      audioRef.current.play().catch(() => {});
      setAudioEnabled(true);
    }
  };

  document.body.addEventListener("pointerdown", enableAudio, { once: true });

  return () => {
    document.body.removeEventListener("pointerdown", enableAudio);
  };
}, [audioEnabled]);


  return (
    <div className="App">
      <Header />

      <main className="layout">
        <div className="left">
          <section id="home">
            <p>Benvingut a la pàgina turística de Joanetes.</p>
          </section>

          <section id="media">
            <MediaSection />
          </section>

          <section id="activities">
            <ActivityList onAdd={addToCart} />
          </section>
        </div>

        <section id="cart">
          <Cart cart={cart} onRemove={removeFromCart} />
        </section>
      </main>

      <audio ref={audioRef} loop>
        <source src="/media/audio.mp3" type="audio/mpeg" />
      </audio>

      <Footer />
    </div>
  );
}

export default App;
