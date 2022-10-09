import { clientSay } from "../../../clientSay";

export default function handler(req, res) {
  res.status(200).json(clientSay)
}