import express from "express";
import { createPost, getAllPosts } from "../controllers/postController.js";

const router = express.Router();

// GET ALL POSTS
router.route("/").get(getAllPosts);

// CREATE A POST
router.route("/").post(createPost);

export default router;
