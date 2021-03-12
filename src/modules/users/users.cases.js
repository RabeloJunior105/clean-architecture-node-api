import { UsersRepository } from "./users.repository";

export class UsersCases {
  constructor() {
    this.usersRepository = new UsersRepository();
  }
  async create(email, password) {
    const userCreated = await this.usersRepository.findOne({
      email,
    });
    
    return userCreated;
  }
}
