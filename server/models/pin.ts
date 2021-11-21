import mongoose from "mongoose";

const Pin = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      min: 3
    },
    description: {
      type: String,
      required: true,
      min: 3
    },
    rating: { type: Number, required: true, min: 0, max: 5 },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  { timestamps: true } // creates createdAt, updatedAt
);

export default mongoose.model("Pin", Pin);
