import IDatabaseConnection from "../database/DataBaseConnection";
import { IHttpServer } from "../http/HttpServer";
import HealthCheckController, { HealthCheck } from "../http/Controllers/HealthCheckController";
import { UsuarioControllerBuilder } from "../builders/UsuarioControllerBuilder";

export class ControllerFactory {
  static createController(type: string, httpServer: IHttpServer, connection: IDatabaseConnection) {
    switch (type) {
      case 'UsuarioController':
        return new UsuarioControllerBuilder(httpServer, connection).build()
      case 'HealthCheckController':
        return new HealthCheckController(httpServer, new HealthCheck());
      default:
        throw new Error('Unknown controller type');
    }
  }
}