import { ExpressAdapter } from "./infra/http/HttpServer";
import { SQLServerAdapter } from "./infra/database/DataBaseConnection";
import config from "./shared/config";
import { ControllerFactory } from "./infra/factories/ControllerFactory";

export default class Main {
  static async init() {
    const httpServer = new ExpressAdapter();
    const connection = SQLServerAdapter.getInstance();
    ControllerFactory.createController('UsuarioController', httpServer, connection);
    httpServer.listen(Number(config.port));
  }
}