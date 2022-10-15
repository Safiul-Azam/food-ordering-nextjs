import Food from "../../../models/Food";
import dbConnect from "../../../utility/mongo";

export default async function handler(req, res) {
  const { method ,query:{id}} = req;
  dbConnect();
  if (method === "GET") {
    try {
      const food = await Food.findById(id);
      res.status(200).json(food);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const food = await Food.create(req.body);
      res.status(201).json(food);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    try {
      const food = await Food.create(req.body);
      res.status(201).json(food);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}