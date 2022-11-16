
import bcrypt from "bcryptjs";

export const createPasswordHash = async (password) =>
  bcrypt.hash(password, 8);


export const checkPassword = async (user, password) => {
  let compRes = await bcrypt.compare(password, user.password)
  console.log(compRes);

  return compRes
}

