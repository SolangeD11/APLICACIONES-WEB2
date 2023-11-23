import { envs } from "./config/plugins/envs.plugin";
import { AppRoutes } from "./presentacion/routes";
import { Server } from "./presentacion/server";


(async()=>{
    main();
})();

function main() {
    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
        routes: AppRoutes.routes,
    });
    server.start();
}