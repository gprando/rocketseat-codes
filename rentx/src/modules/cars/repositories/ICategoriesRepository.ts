import { Category } from '../entities/Category';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}
interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}

export { ICategoriesRepository };
