function Cart({ cart, onRemove }) {
  return (
    <aside className="cart">
      <h2>La teva selecció</h2>
      {cart.length === 0 ? <p>No has seleccionat res encara.</p> :
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity}
              <button onClick={() => onRemove(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      }
    </aside>
  );
}
export default Cart;
