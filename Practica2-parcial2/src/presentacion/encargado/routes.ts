import { Router } from "express";
import { EncargadosController } from "./controller";

export class EncargadoRoutes {
    static get routes(): Router {
        const router = Router();
        const encargadoController = new EncargadosController();
        router.get('/',encargadoController.getEncargados);
        router.get('/:id', encargadoController.getEncargadoById);
        router.post('/', encargadoController.createEncargado);
        router.put('/:id', encargadoController.updateEncargado);
        router.delete('/:id', encargadoController.deleteEncargado);
        return router;
    }
}