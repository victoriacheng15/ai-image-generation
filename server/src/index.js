import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connect.js";
import v1PostRoutes from "./v1/routes/postRoutes.js";
import v1DalleRoutes from "./v1/routes/dalleRoutes.js";

dotenv.config();

const PROT = process.env.PROT || 8080;
const API_V1 = "/api/v1"

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use(`${API_V1}/posts`, v1PostRoutes);
app.use(`${API_V1}/dalle`, v1DalleRoutes);

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
