import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },

  },
  {
    timestamps: true
  }
);

export default mongoose.model('User', userSchema);