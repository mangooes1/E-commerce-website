"use client";

import { useState } from 'react';
import Navbar from "@/app/components/Navbar";

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const ret = JSON.stringify(data, null, 2);
  return ret;
}

export default function MyComponent() {
  const [jsonData, setJsonData] = useState(null);

  async function handleButtonClick() {
    const jsonString = await fetchData();
    setJsonData(jsonString);
  }

  async function handle(){
    setJsonData(null);
  }
  
  return (
    <div>
      <Navbar />
      <button onClick={handleButtonClick}>Fetch Data</button>
      <div id="adi1">{jsonData}</div>
      <button onClick={handle}>SEt to 0</button>
    </div>
  );
}
