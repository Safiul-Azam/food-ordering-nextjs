import Chef from "../../../models/Chef";
import dbConnect from "../../../utility/mongo";

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const chefs = await Chef.find();
      res.status(200).json(chefs);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const chef = await Chef.create(req.body);
      res.status(201).json(chef);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}