import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  avatar: { type: String, required: false },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;