import { Router } from "express";
import { AutoresController } from "./controller";

export class AutorRoutes {
    static get routes(): Router {
        const router = Router();
        const autorController = new AutoresController();
        router.get('/',autorController.getAutores);
        router.get('/:id', autorController.getAutorById);
        router.post('/', autorController.createAutor);
        router.put('/:id', autorController.updateAutor);
        router.delete('/:id', autorController.deleteAutor);
        return router;
    }
}