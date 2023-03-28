import { hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import "dotenv/config";
import { AppDataSource } from "../database/datasource";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
  private userRepository: UserRepository;

  constructor(
    repository: UserRepository = new UserRepository(AppDataSource.manager)
  ) {
    this.userRepository = repository;
  }

  public async getAllUsers(): Promise<Array<User>> {
    return await this.userRepository.findAll();
  }

  public async getByIdUser(id: string) {
    return await this.userRepository.findById(id);
  }

  public async insertUser(user: User): Promise<void> {
    const cryptPassword = hashSync(user.getPassword(), 8);
    user.setPassword(cryptPassword);

    await this.userRepository.created(user);
  }

  public async login(email: string, password: string): Promise<void> {
    const userExist: User | null = await this.userRepository.findByEmail(email);

    const secret = process.env.SECRET;

    if (userExist) {
      if (userExist.getPassword() == password && secret !== undefined) {
        const token = sign(
          {
            email: userExist.getEmail(),
          },
          secret
        );
      }
    }
  }

  public async updateUser(user: User): Promise<void> {
    await this.userRepository.updatedUser(user);
  }

  public async deleteUser(id: number): Promise<void> {
    await this.userRepository.deleteById(id);
  }
}
