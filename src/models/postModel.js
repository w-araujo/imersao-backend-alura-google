import mongoDBConnect from "../config/dbConfig.js";

const connect = await mongoDBConnect(process.env.MONGO_URL);

export async function getAllPosts() {
  const db = connect.db("imersao-instabytes");
  const collection = db.collection("posts");
  return collection.find().toArray();
}

export async function createPost(newPost) {
  const db = connect.db("imersao-instabytes");
  const collection = db.collection("posts");
  return collection.insertOne(newPost);
}
