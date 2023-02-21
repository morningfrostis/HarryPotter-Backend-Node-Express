import { Request, Response } from "express";

const router = require("express").Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ info: "User List" });
});

router.get("/:id", (req: Request, res: Response) => {
  console.log(req);
  res.json({ info: "User by Id" });
});

router.put("/:id", (req: Request, res: Response) => {
  console.log(req);
  res.json({ info: "User Edition" });
});

router.delete("/:id", (req: Request, res: Response) => {
  console.log(req);
  res.json({ info: "User Delete" });
});
