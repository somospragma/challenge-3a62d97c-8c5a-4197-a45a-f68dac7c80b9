import { ProductRepository } from '../../domain/repositories/productRepository';
import { Product } from '../../domain/entities/product';

export class ProductRepositoryImpl implements ProductRepository {
  public async save(product: Product): Promise<void> {
    // Simulación de persistencia de datos
    console.log(`Product saved: ${product.getName()}`);
  }
}