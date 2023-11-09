import { Router } from "express";

import { NegocioRoutes } from "./negocio/routes";
import { AutorRoutes } from "./autor/routes";
import { GeneroRoutes } from "./genero/routes";
import { origenIdiomaRoutes } from "./origenIdioma/routes";
import { IdiomaRoutes } from "./idioma/routes";
import { TraduccionesRoutes } from "./traduccionidioma/routes";
import { NacionalidadRoutes } from "./nacionalidad/routes";
import { InventarioRoutes } from "./inventario/routes";
import { EncargadoRoutes } from "./encargado/routes";
import { LibroRoutes } from "./libro/routes";
import { EditorialRoutes } from "./editorial/routes";
import { CategoriaRoutes } from "./categoria/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/negocios', NegocioRoutes.routes);

        router.use('/api/autores', AutorRoutes.routes);

        router.use('/api/generos', GeneroRoutes.routes);

        router.use('/api/origenes', origenIdiomaRoutes.routes);

        router.use('/api/idiomas', IdiomaRoutes.routes);

        router.use('/api/traducciones', TraduccionesRoutes.routes);

        router.use('/api/Nacionalidades', NacionalidadRoutes.routes);

        router.use('/api/Inventarios', InventarioRoutes.routes);

        router.use('/api/Encargados', EncargadoRoutes.routes);

        router.use('/api/Libros', LibroRoutes.routes);

        router.use('/api/editoriales', EditorialRoutes.routes);

        router.use('/api/categorias', CategoriaRoutes.routes);

        return router;
    }
}