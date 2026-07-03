import { ProductRepository } from '../repositories/productRepository';

export class Product {
  private id: string;
  private name: string;
  private price: number;
  private repository: ProductRepository;

  constructor(id: string, name: string, price: number, repository: ProductRepository) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.repository = repository;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public async save(): Promise<void> {
    await this.repository.save(this);
  }
}