import { Request, Response } from 'express';
import { ProductService } from '../application/services/productService';
import { ProductRepositoryImpl } from '../infrastructure/repositories/productRepositoryImpl';

const repository = new ProductRepositoryImpl();
const service = new ProductService(repository);

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { id, name, price } = req.body;
    const product = await service.createProduct(id, name, price);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};