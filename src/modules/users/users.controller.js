import { UsersCases } from "./users.cases";

export class UsersController {
  constructor() {
    this.usersCases = new UsersCases();
  }

  async singUp(req, res) {
    try {
      const requestToCreateUser = await this.usersCases.create(
        req.body.email,
        req.body.password
      );

      res.status(200).json(requestToCreateUser);
    } catch (error) {
      console.log(error.message);
    }
  }
}
