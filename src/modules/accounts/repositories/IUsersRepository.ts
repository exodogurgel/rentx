import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  Create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
