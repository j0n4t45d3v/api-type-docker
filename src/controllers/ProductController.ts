import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
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
      return res.status(500).json({products});
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
