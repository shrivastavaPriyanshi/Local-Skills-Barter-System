import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Get profile
router.get("/:userId", async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// Update profile
router.put("/:userId", async (req, res) => {
  const updates = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.userId,
    updates,
    { new: true }
  );
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

export default router;
