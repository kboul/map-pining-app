import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true
    },
    password: { type: String, required: true, min: 3 }
  },
  { timestamps: true } // creates createdAt, updatedAt
);

export default mongoose.model("User", UserSchema);
