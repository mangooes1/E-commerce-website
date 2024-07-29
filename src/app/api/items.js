
// import clientPromise from '../lib/mongodb';

// export default async (req, res) => {
//   const client = await clientPromise;
//   const db = client.db('your-database-name');

//   switch (req.method) {
//     case 'POST':
//       let bodyObject = JSON.parse(req.body);
//       let myPost = await db.collection('items').insertOne(bodyObject);
//       res.json(myPost.ops[0]);
//       break;
//     case 'GET':
//       const allPosts = await db.collection('items').find({}).toArray();
//       res.json({ status: 200, data: allPosts });
//       break;
//   }
// };

export default function adi() {
  return {
    name: "aditya"
  };
}

