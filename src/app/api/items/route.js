// src/app/api/items/route.js
import clientPromise from '../../lib/mongodb';

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db('items');
    const allPosts = await db.collection('items').find({}).toArray();
    return new Response(JSON.stringify({ status: 200, data: allPosts }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db('items');
    const bodyObject = await req.json();
    const myPost = await db.collection('items').insertOne(bodyObject);
    return new Response(JSON.stringify(myPost.ops[0]), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
