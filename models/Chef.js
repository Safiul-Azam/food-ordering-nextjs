import mongoose from "mongoose";

const chefsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    shortDescription: {
      type: String,
      require: true,
    },
    Ingredients: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      max: 5,
    },
    SKU: {
      type: String,
    },
    role:{
      type:String,
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
export default mongoose.models.Chef || mongoose.model("Chef", chefsSchema);
