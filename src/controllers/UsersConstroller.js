import User from '../models/User'
import { createPasswordHash } from '../services/auth';

class UsersController {
  async index(req, res) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "internal server error." });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json();
      }

      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "internal server error." });
    }
  }
  async create(req, res) {
    try {
      const { email, password, name, lastName } = req.body;

      const user = await User.findOne({ email });

      if (user) {
        return res
          .status(422)
          .json({ error: `User ${email} alreasy exists.` });
      }

      const encryptedPassword = await createPasswordHash(password)

      const newUser = await User.create({
        email,
        password: encryptedPassword,
        name,
        lastName
      });

      return res.status(201).json(
        {
          message: "Usuário cadastrado com sucesso",
          newUser
        }
      );

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "internal server error." });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { email, password, name, lastName } = req.body;

      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json();
      }
      const encryptedPassword = await createPasswordHash(password);

      await user.updateOne({
        email,
        password: encryptedPassword,
        name,
        lastName
      });

      return res.status(200).json();

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "internal server error." });
    }
  }
  async destroy(req, res) {
    try {
      const { id } = req.params
      const user = await User.findById(id);

      if (!user) {
        return res.statys(404).json();
      }

      await user.deleteOne();

      return res.status(200).json({ message: "Usuário deletado." });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "internal server error." });
    }
  }
}

export default new UsersController();