import { Router } from "express";
import { origenIdiomaController } from "./controller";

export class origenIdiomaRoutes {
    static get routes(): Router {
        const router = Router();
        const origenController = new origenIdiomaController();
        router.get('/',origenController.getorigenIdioma);
        router.get('/:id', origenController.getorigenIdiomaById);
        router.post('/', origenController.createorigenIdioma);
        router.put('/:id', origenController.updateorigenIdioma);
        router.delete('/:id', origenController.deleteorigenIdioma);
        return router;
    }
}