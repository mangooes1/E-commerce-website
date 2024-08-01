// 'use client';

// import { useState } from 'react';

// export default function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);
  
//   // Function to decrement count
//   function setcount1() {
//     setCount(count - 1);
//   } 
//   function setCount2(){
//     setCount(count+1);

//   }

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={setCount2}>
//         Click me to increment
//       </button>
//       <button onClick={setcount1}>
//         Click me to decrement
//       </button>
//     </div>
//   );
// }


import Image from 'next/image';

const Home = () => (
  <div>
    <h1>Welcome to My Next.js App</h1>
    <Image
      src="/example.jpg"
      alt="Example Image"
      width={500}
      height={300}
    />
  </div>
);

export default Home;

