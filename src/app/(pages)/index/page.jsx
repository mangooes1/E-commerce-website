'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/items')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setItems(data.data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.toString());
      });
  }, []);

  return (
    <div>
      <h1>Items</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
