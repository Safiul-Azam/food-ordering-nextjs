import mongoose from "mongoose";

const foodsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    Ingredients: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.food ||mongoose.model("Food", foodsSchema);
