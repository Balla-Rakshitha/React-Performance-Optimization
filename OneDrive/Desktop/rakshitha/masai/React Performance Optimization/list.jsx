export default function ProductList({ products, onSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => onSelect(product)}
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
