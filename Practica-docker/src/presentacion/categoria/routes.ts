import { Router } from "express";
import { CategoriasController} from "./controller";

export class CategoriaRoutes {
    static get routes(): Router {
        const router = Router();
        const categoriaController = new CategoriasController();
        router.get('/',categoriaController.getcategoria);
        router.get('/:id', categoriaController.getcategoriaById);
        router.post('/', categoriaController.createCategoria);
        router.put('/:id', categoriaController.updatecategoria);
        router.delete('/:id', categoriaController.deletecategoria);
        return router;
    }
}


