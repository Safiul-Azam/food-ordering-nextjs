import Review from "../../../models/Review";
import dbConnect from "../../../utility/mongo";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  if (method === "GET") {
    try {
      const reviews = await Review.find();
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const review = await Review.create(req.body);
      res.status(201).json(review);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
