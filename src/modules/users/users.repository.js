import mongoose from "mongoose";
const AccountModel = mongoose.model("Account");

export class UsersRepository {
  async findOne(paramToSearch) {
    return await AccountModel.findOne(paramToSearch);
  }

  async create({ email, password }) {
    return await AccountModel.create({ email, password });
  }
}