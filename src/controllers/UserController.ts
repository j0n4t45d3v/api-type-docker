import { Controller, Delete, Get, Patch, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { User } from '../models/User';
import { UserService } from '../services/UserService';

@Controller('users')
export class UserController {
  private userService: UserService;

  constructor(repository: UserService = new UserService()) {
    this.userService = repository;
  }

  @Get('')
  private async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userService.getAllUsers();
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  @Get(':id')
  private async getUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    try {
      const user = await this.userService.getByIdUser(id);
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  @Post('register')
  private async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password, office } = req.body;

    const user: User = new User(name, email, password, office);

    try {
      await this.userService.insertUser(user);
      return res.status(201).json({message: "usuario registrado"});
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  @Patch()
  private async update(req: Request, res: Response): Promise<Response> {
    try {
      await this.userService.updateUser(req.body);
      return res.status(200).json({ message: 'Usuario atualizado' });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  @Delete(':id')
  private async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    try {
      await this.userService.deleteUser(id);
      return res.status(200).json({ message: 'Usuario deletado' });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
