import "dotenv/config";
import express from "express";
import cors from "cors";
import { clerkWebhookHandler } from "./webhooks/clerk.js";
import { clerkMiddleware } from "@clerk/express";
import { getEnv } from "./lib/env.js";

const env = getEnv();
const app = express();
const rawJson = express.raw({ type: "application/json", limit: "1mb" });

// it's important that you don't parse the webhook event data, it should be in the raw format
app.post("/webhooks/clerk", rawJson, (req, res) => {
  void clerkWebhookHandler(req, res);
});

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

const PORT = env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
