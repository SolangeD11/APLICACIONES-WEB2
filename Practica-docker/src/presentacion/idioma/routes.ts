import { Router } from "express";
import { idiomaController } from "./controller";

export class IdiomaRoutes {
    static get routes(): Router {
        const router = Router();
        const IdiomaController = new idiomaController();
        router.get('/',IdiomaController.getIdioma);
        router.get('/:id', IdiomaController.getIdiomaById);
        router.post('/', IdiomaController.createIdioma);
        router.put('/:id', IdiomaController.updateIdioma);
        router.delete('/:id', IdiomaController.deleteIdioma);
        return router;
    }
}