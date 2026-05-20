import mongoose from "mongoose";

const SupportSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },

    contactPerson: {
      type: String,
      required: true,
    },

    projectLocation: {
      type: String,
      required: true,
    },

    productSerialNo: {
      type: String,
      required: true,
    },

    problemDescription: {
      type: String,
      required: true,
    },

    file: {
      type: String,
    },

    fileKey: {
      type: String,
    },

    ticketId: {
      type: String,
      unique: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Support ||
  mongoose.model("Support", SupportSchema);