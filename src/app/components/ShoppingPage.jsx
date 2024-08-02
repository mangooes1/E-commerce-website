


"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/products.json");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const toggleLike = (id) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [id]: !prevLikedProducts[id],
    }));
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container" id="ShoppingPage">
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
            <button onClick={() => toggleLike(product.id)}>
              {likedProducts[product.id] ? "❤️" : "♡"}
            </button>
            <button onClick={() => openModal(product)}>Buy Now</button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p>${selectedProduct.price.toFixed(2)}</p>
            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest</th>
                  <th>Waist</th>
                  <th>Hip</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S</td>
                  <td>34-36"</td>
                  <td>28-30"</td>
                  <td>36-38"</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>38-40"</td>
                  <td>32-34"</td>
                  <td>40-42"</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>42-44"</td>
                  <td>36-38"</td>
                  <td>44-46"</td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/qr/6TNPYHEICRZII1?autoload=1&app_absent=0${selectedProduct.name}`,
                  "_blank"
                )
              }
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #fff5e0;
        }
        h1 {
          text-align: center;
          margin-bottom: 40px;
          margin-top: 20px;
          font-size: 35px;
          font-weight: bold;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          width: 100%;
        }
        .card {
          border: 2px solid #000;
          border-radius: 4px;
          padding: 16px;
          text-align: center;
          position: relative;
        }
        .card h2 {
          font-size: 1em;
          margin: 10px 0;
        }
        .card p {
          margin: 10px 0;
        }
        .card button {
          background: #000;
          color: #e4c59e;
          border: none;
          padding: 10px 40px;
          cursor: pointer;
          border-radius: 5px;
          margin: 5px 0;
        }
        .card button:hover {
          background: #005bb5;
        }
        .card button:first-of-type {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          color: #e74c3c;
          font-size: 24px;
          padding: 0;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background-color: #fff5e0;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          position: relative;
          width: 80%;
          max-width: 500px;
        }
        .modal-content table {
          width: 100%;
          margin: 20px 0;
          border-collapse: collapse;
        }
        .modal-content table th,
        .modal-content table td {
          border: 1px solid #000;
          padding: 10px;
        }
        .close {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 30px;
          cursor: pointer;
        }
        button{
        background: #000;
          color: #e4c59e;
          border: none;
          padding: 10px 40px;
          cursor: pointer;
          border-radius: 5px;
          margin: 5px 0;
        }
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
