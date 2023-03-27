import { EntityManager } from 'typeorm';
import { User } from '../models/User';

export class UserRepository {
  private entityManager: EntityManager;

  constructor(entityManager: EntityManager) {
    this.entityManager = entityManager;
  }

  public async findAll(): Promise<Array<User>> {
    const users: Array<User> = await this.entityManager.find(User);
    return users;
  }

  public async findById(id: string): Promise<User | null> {
    return await this.entityManager
      .getRepository(User)
      .createQueryBuilder("users")
      .where('users.id = :id', { id: id })
      .getOne();
  }
  
  public async findByEmail(email: string): Promise<User | null> {
    return await this.entityManager
      .getRepository(User)
      .createQueryBuilder("users")
      .where('users.email = :email', { email: email })
      .getOne();
  }

  public async created(user: User): Promise<void> {
    await this.entityManager.save(User, user);
  }

  public async updatedUser(user: User): Promise<void> {
    await this.entityManager.update(User, user, { getEmail: user.getEmail });
  }

  public async deleteById(id: number): Promise<void> {
    await this.entityManager.delete(User, id);
  }
}
