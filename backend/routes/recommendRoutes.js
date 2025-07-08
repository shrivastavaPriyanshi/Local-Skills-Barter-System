import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const matches = await User.find({
      _id: { $ne: userId },
      skillsOffered: { $in: user.skillsWanted }
    }).select(
      "username email skillsOffered skillsWanted bio avatarUrl trustScore badges rating reviewsCount"
    );

    const recommendations = matches.map(match => {
      const overlappingSkills = match.skillsOffered.filter(skill =>
        user.skillsWanted.includes(skill)
      );

      return {
        userId: match._id,
        username: match.username,
        email: match.email,
        skillsOffered: match.skillsOffered,
        skillsWanted: match.skillsWanted,
        bio: match.bio,
        avatarUrl: match.avatarUrl,
        trustScore: match.trustScore,
        badges: match.badges,
        rating: match.rating,
        reviewsCount: match.reviewsCount,
        aiInsight: overlappingSkills.length
          ? "Perfect complement to your skills"
          : "Potential schedule match"
      };
    });

    return res.json({ recommendations });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
