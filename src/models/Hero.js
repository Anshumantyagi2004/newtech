import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    videoFileId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Hero || mongoose.model("Hero", HeroSchema);