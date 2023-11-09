import { Router } from "express";
import { TraduccionesController } from "./controller";

export class TraduccionesRoutes {
    static get routes(): Router {
        const router = Router();
        const traduccionesController = new TraduccionesController();
        router.get('/',traduccionesController.getTraducciones);
        router.get('/:id', traduccionesController.getTraduccionesById);
        router.post('/', traduccionesController.createTraducciones);
        router.put('/:id', traduccionesController.updateTraducciones);
        router.delete('/:id', traduccionesController.deleteTraducciones);
        return router;
    }
}