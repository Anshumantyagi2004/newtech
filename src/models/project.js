import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    image: String,

    city: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    dimension: {
      type: String,
      required: true,
      trim: true,
    },
    imageFileId: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
