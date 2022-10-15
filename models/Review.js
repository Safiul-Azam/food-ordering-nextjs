import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    client: {
      type: String,
      require: true,
    },
    job: {
      type: String,
      require: true,
    },
    review: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      max: 5,
    },
    img: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Review ||
  mongoose.model("Review", ReviewSchema);
