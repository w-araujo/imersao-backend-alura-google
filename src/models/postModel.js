import "dotenv/config";
import { ObjectId } from "mongodb";
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

export async function updatePost(id, newPost) {
  const db = connect.db("imersao-instabytes");
  const collection = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return collection.updateOne({ _id: new ObjectId(objID) }, { $set: newPost });
}
