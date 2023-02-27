import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";


dotenv.config();

const PROT = process.env.PROT || 8080;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// app.use("/api/v1/posts", postRoutes);
// app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
	res.send("Hello from DALL-E");
});

(async function startServer() {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PROT, () => {
			console.log(`Server is running on port ${PROT}`);
		});
	} catch (error) {
		console.error(error);
	}
})();