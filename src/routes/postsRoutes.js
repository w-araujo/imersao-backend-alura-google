import express from "express";
import multer from "multer";
import {
  listAllPosts,
  createNewPost,
  uploadImage,
} from "../controllers/postsController.js";

const upload = multer({ dest: "./uploads" });

const routes = (app) => {
  app.use(express.json());
  app.get("/posts", listAllPosts);
  app.post("/posts", createNewPost);
  app.post("/upload", upload.single("image"), uploadImage);
};

export default routes;
