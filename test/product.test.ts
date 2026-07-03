import { Product } from '../src/domain/entities/product';
import { ProductRepository } from '../src/domain/repositories/productRepository';
import { ProductService } from '../src/application/services/productService';
import { ProductRepositoryImpl } from '../src/infrastructure/repositories/productRepositoryImpl';

describe('Product', () => {
  let repository: ProductRepository;
  let service: ProductService;

  beforeEach(() => {
    repository = new ProductRepositoryImpl();
    service = new ProductService(repository);
  });

  it('should create a product', async () => {
    const product = await service.createProduct('1', 'Product 1', 100);
    expect(product.getId()).toBe('1');
    expect(product.getName()).toBe('Product 1');
    expect(product.getPrice()).toBe(100);
  });
});