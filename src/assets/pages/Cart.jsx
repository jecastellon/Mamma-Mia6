import { useState } from "react";
import { pizzaCart } from "../../utils/pizzas";

export function formatNumber(num) {
  return num.toLocaleString('es-CL');
}

export default function Cart() {
    const [Cart, setCart] = useState(pizzaCart);

    const updateCount = (id, delta) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: Math.max(p.count + delta, 0) } : p
      )
    );
    };

    const total = Cart.reduce((acc, p) => acc + p.price * p.count, 0);

  return (
    <>
     <div className="cart">
         <h2>Detalles del pedido</h2><br/>
        {Cart.map((p) => (
          <>
          <div key= {p.id} className="pizza-cart">
            <img src={p.img} alt={p.name}/> {p.name}
            <div>
                ${formatNumber(p.price)}
            </div>
            <div>
                <p>
                <button onClick={() => updateCount(p.id, -1)}>-</button>
                <span style={{ margin: "0 10px" }}>{p.count}</span>
                <button onClick={() => updateCount(p.id, 1)}>+</button>
            </p>
            </div>
          </div>
          </>
        ))}
        <h1>Total: ${formatNumber(total)}</h1>
        <button>Pagar</button>
    </div>
    </>
  )
}
