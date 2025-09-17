import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});

// simple health route
app.get("/health", (_req: Request, res: Response) => {
	res.json({ status: "ok" });
});

// example route
app.get("/api/hello", (_req: Request, res: Response) => {
	res.json({ message: "Hello from TypeScript Node backend!" });
});

export default app;
