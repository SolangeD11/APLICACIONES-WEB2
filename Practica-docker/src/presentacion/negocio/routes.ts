import { Router } from "express";
import { NegociosController } from "./controller";

export class NegocioRoutes {
    static get routes(): Router {
        const router = Router();
        const negocioController = new NegociosController();
        router.get('/',negocioController.getNegocios);
        router.get('/:id', negocioController.getNegocioById);
        router.post('/', negocioController.createNegocio);
        router.put('/:id', negocioController.updateNegocio);
        router.delete('/:id', negocioController.deleteNegocio);
        return router;
    }
}