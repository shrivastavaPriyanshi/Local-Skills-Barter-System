import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    default: ""
  },
  avatarUrl: {
    type: String,
    default: ""
  },
  skillsOffered: [
    {
      type: String,
      trim: true
    }
  ],
  skillsWanted: [
    {
      type: String,
      trim: true
    }
  ],
  trustScore: {
    type: Number,
    default: 0
  },
  badges: [
    {
      type: String
    }
  ],
  rating: {
    type: Number,
    default: 0
  },
  reviewsCount: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model("User", userSchema);

export default User;
