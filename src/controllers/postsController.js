import fs from "fs";
import { getAllPosts, createPost } from "../models/postModel.js";

export async function listAllPosts(req, res) {
  const posts = await getAllPosts();
  res.status(200).json(posts);
}

export async function createNewPost(req, res) {
  const newPost = req.body;
  try {
    const createdPost = await createPost(newPost);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "request failure" });
  }
}

export async function uploadImage(req, res) {
  const newPost = {
    description: "",
    imgURL: req.file.originalname,
    alt: "",
  };

  try {
    const createdPost = await createPost(newPost);
    const updatedImage = `uploads/${createdPost.insertedId}.png`;
    fs.renameSync(req.file.path, updatedImage);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "request failure" });
  }
}
