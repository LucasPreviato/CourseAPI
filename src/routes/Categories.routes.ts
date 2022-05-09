import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { PostgresCategoriesRepository } from "../repositories/PostgressCategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";


const categoriesRouters = Router();
const categoriesRepository = new PostgresCategoriesRepository();




//import route inside server
// Com o principios de SOLID essa route está fazendo mais do que deveria 
// route com  authenticated, created ...., não é responsabilidade dela.
categoriesRouters.post('/', (req, res) => {
  const { name, description } = req.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send();

})

categoriesRouters.get('/', (req, res) => {
  const all = categoriesRepository.list();
  return res.json(all);
})

export { categoriesRouters }