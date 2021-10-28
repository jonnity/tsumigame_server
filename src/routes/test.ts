import express from "express";

const router = express.Router();

// v1以下のルーティング
router.get("/test", (req: express.Request, res: express.Response) => {
  res.send({ text: "test" });
});

export default router;
