import mongoose from "mongoose";

const chefsSchema = new mongoose.Schema(
  {
    chefName: {
      type: String,
      require: true,
    },
    position: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    instagram: {
      type: String,
      require: true,
    },
    facebook: {
      type: String,
      require: true,
    },
    pinterest: {
      type: String,
      require: true,
    },
    twitter: {
      type: String,
      require: true,
    },
    
    img: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Chef || mongoose.model("Chef", chefsSchema);
