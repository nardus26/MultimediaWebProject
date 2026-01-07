function Cart({ cart, onRemove }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <aside className="cart">
      <h2>La teva selecció</h2>

      {cart.length === 0 ? (
        <p>No has seleccionat cap activitat encara.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <div>
                {item.name}<br/>
                {item.price} € x {item.quantity}
              </div>
              <button onClick={() => onRemove(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}

      <p><strong>Total:</strong> {total.toFixed(2)} €</p>
    </aside>
  );
}

export default Cart;
