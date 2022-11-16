import jwt from "jsonwebtoken";
import User from "../models/User";
import { checkPassword } from '../services/auth'
import authConfig from "../config/auth"


class SessionController {
  async create(req, res) {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    let check = await checkPassword(user, password)

    if (!user) {
      return res.status(401).json({ error: "User or Passoword inavalid." })
    }

    if (!check) {
      return res.status(401).json({ error: "User or Passoword inavalid." })
    }
    const { id, name, lastName } = user;

    return res.json({
      user: {
        id: id,
        email,
        name,
        lastName
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      })
    });
  }
}

export default new SessionController();