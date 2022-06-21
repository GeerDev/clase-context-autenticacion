import { useContext, useEffect } from "react";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  const createNewOrder = () => {
    createOrder(cart); //creo el pedido
    clearCart(); //limpio el carrito
  };

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart" key={i}>
        <span>{cartItem.name}</span>
        <span>{cartItem.price.toFixed(2)} €</span>
      </div>
    );
  });
  return (
    <div>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => createNewOrder()}>Create Order</button>
    </div>
  );
};

export default Cart;
