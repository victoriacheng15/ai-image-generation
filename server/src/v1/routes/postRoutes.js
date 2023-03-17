import express from "express";
import { createPost, getAllPosts } from "../controllers/postController.js";

const router = express.Router();

// GET ALL POSTS
router.get("/", getAllPosts);

// CREATE A POST
router.post("/", createPost);

export default router;
