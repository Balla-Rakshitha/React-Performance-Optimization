import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: 10,
}));

export default function App() {
  const [count, setCount] = useState(0);
  const [products] = useState(productsData);

  // useMemo: total price recalculates only when products change
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, item) => sum + item.price, 0);
  }, [products]);

  // useCallback: memoized function reference
  const handleProductSelect = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <hr />

      <ProductList
        products={products}
        onSelect={handleProductSelect}
      />
    </div>
  );
}
