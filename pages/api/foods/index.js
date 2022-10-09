import { foods } from "../../../foodsData";

export default function handler(req, res) {
  res.status(200).json(foods)
}