import { AppError } from 'errors/AppError';
import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  description: string;
  name: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const categoryAlreadExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadExists) {
      throw new AppError('Category already exists!', 401);
    }

    this.categoriesRepository.create({ description, name });
  }
}

export { CreateCategoryUseCase };
