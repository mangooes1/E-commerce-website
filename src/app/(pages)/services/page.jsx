// "use client"
// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await fetch('/products.json');
//       const data = await res.json();
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="container">
//       <h1>Shopping Cart</h1>
//       <div className="grid">
//         {products.map((product) => (
//           <div key={product.id} className="card">
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={200}
//               height={200}
//             />
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>${product.price.toFixed(2)}</p>
//             <button>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//       <style jsx>{`
//         .container {
//           padding: 20px;
//         }
//         .grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 20px;
//         }
//         .card {
//           border: 1px solid #ddd;
//           border-radius: 8px;
//           padding: 16px;
//           text-align: center;
//         }
//         .card h2 {
//           font-size: 1.5em;
//           margin: 10px 0;
//         }
//         .card p {
//           margin: 10px 0;
//         }
//         .card button {
//           background: #0070f3;
//           color: white;
//           border: none;
//           padding: 10px 20px;
//           cursor: pointer;
//           border-radius: 5px;
//         }
//         .card button:hover {
//           background: #005bb5;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;

/////////////////////////////////////////////////////////////////////
"use client";
import { useEffect, useState } from "react";
import FeaturesComponent from "@/app/components/ShoppingPage";
import Image from "next/image";
import { useCart } from "../context/page";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});
  const {dispatch} = useCart();

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
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <> 
    <FeaturesComponent/>
    <div className="container">
      <h1>Shopping Cart</h1>
      <Link href="/cart"><button>Go to Cart</button></Link>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <Image src={product.image} alt={product.name} width={200} height={200} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => toggleLike(product.id)}>
              {likedProducts[product.id] ? "❤️" : "♡"}
            </button>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
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
          position: relative;
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
      `}</style>
    </div>
    </>
  );
};

export default Home;
