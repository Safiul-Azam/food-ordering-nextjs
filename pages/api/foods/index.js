import Food from "../../../models/Food";
import dbConnect from "../../../utility/mongo";

export default async function handler(req, res) {
  const {method} = req
  dbConnect()
  if(method === 'GET'){
    try {
      const foods = await Food.find()
      res.status(200).json(foods)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  if(method === 'POST'){
    try {
      const food = await Food.create(req.body )
      res.status(201).json(food)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}