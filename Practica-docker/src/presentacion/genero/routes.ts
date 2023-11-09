import { Router } from "express";
import { GenerosController} from "./controller";

export class GeneroRoutes {
    static get routes(): Router {
        const router = Router();
        const generoController = new GenerosController();
        router.get('/',generoController.getGeneros);
        router.get('/:id', generoController.getGeneroById);
        router.post('/', generoController.createGenero);
        router.put('/:id', generoController.updateGenero);
        router.delete('/:id', generoController.deleteGenero);
        return router;
    }
}