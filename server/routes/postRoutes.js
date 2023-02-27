import express from "express";
import {v2 as cloudinary} from "cloudinary";
import Post from "../models/post.js";

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from /api/v1/posts");
})


export default router;