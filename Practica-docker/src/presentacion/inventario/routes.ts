import { Router } from "express";
import { InevtarioController } from "./controller";

export class InventarioRoutes {
    static get routes(): Router {
        const router = Router();
        const inventarioController = new InevtarioController();
        router.get('/',inventarioController.getInventario);
        router.get('/:id', inventarioController.getInventarioById);
        router.post('/', inventarioController.createInventario);
        router.put('/:id', inventarioController.updateInventario);
        router.delete('/:id', inventarioController.deleteInventario);
        return router;
    }
}