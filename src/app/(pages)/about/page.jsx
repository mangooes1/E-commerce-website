// // 'use client'
// // import React, { useState, useEffect } from 'react';

// // const Home = () => {
// //   const [data, setData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('../components/api/twitter');
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }
// //         const result = await response.json();
// //         setData(result);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //         setError('Failed to fetch data');
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div>
// //       <h1>Fetched Data</h1>
// //       <pre>{JSON.stringify(data, null, 2)}</pre>
// //     </div>
// //   );
// // };

// // export default Home;

// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       hwllo
//     </div>
//   )
// }

// export default page


// import React from 'react'
// import About from "./About";
import About from "@/app/components/About";
const page = () => {
  return (
    <>
      <div>
        <About />
      </div>
    </>
  )
}

export default page
