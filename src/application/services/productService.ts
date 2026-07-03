import { Product } from '../domain/entities/product';
import { ProductRepository } from '../domain/repositories/productRepository';

export class ProductService {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  public async createProduct(id: string, name: string, price: number): Promise<Product> {
    const product = new Product(id, name, price, this.repository);
    await product.save();
    return product;
  }
}