import User from "../models/User.js";
import { StatusCodes } from 'http-status-codes';


const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.OK).json({ user });
};
const login = (req, res) => {
  res.send("login user");
};
const updateUser = (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
