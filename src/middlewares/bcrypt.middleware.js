import bcrypt from "bcrypt"

export const generatePassword = (password) => bcrypt.hashSync(password, 3)

export const comparePassword = (password, hash) =>
  bcrypt.compareSync(password, hash)
