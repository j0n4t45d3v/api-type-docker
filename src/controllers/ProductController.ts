import { Controller, Delete, Get, Patch, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { Product } from '../models/Products';
import { ProductService } from '../services/ProductService';

@Controller('products')
export class ProductController {
  private productService: ProductService;

  constructor(service: ProductService = new ProductService()) {
    this.productService = service;
  }

  @Get()
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const products = await this.productService.getAllProducts();
      return res.status(500).json({ products });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  @Post('register')
  private async create(req: Request, res: Response): Promise<Response> {
    const { barcod, name, brand, quantity, price, sector } = req.body;

    const product: Product = new Product(
      barcod,
      name,
      brand,
      quantity,
      price,
      sector
    );

    try {
      await this.productService.insertProduct(product);
      return res.status(201).json({ message: 'usuario registrado' });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  @Patch(':id')
  private async update(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const { barcod, name, brand, quantity, price, sector } = req.body;

    const product: Product = new Product(
      barcod,
      name,
      brand,
      quantity,
      price,
      sector
    );

    try {
      await this.productService.updateProduct(id, product);
      return res.status(200).json({ message: 'Usuario atualizado' });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  @Delete(':id')
  private async delete(req: Request, res: Response): Promise<Response> {
    const id: string = req.params.id;
    try {
      await this.productService.deleteProduct(id);
      return res.status(200).json({ message: 'Usuario deletado' });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
