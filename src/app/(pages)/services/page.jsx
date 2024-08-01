"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/products.json');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container" id='Shop'>
      <h1>Shopping Cart</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          padding: 20px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
        }
        .card h2 {
          font-size: 1.5em;
          margin: 10px 0;
        }
        .card p {
          margin: 10px 0;
        }
        .card button {
          background: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }
        .card button:hover {
          background: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default Home;
