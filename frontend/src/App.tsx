import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { name: 'product1', price: 100.0 },
    { name: 'product2', price: 200.0 },
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  function addProduct() {
    setProducts(prevState => [
      ...prevState,
      { name: 'product' + (prevState.length + 1), price: 100.0 },
    ]);
  }

  return (
    <div>
      <h1>ReStore</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
