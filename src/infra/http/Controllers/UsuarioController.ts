import { GetUsuarios } from "@src/application/usuarios/GetUsuarios";
import { IHttpServer } from "../HttpServer";
import { IController } from "./IController";

export default class UsuarioController implements IController {
  constructor(private httpServer: IHttpServer, private getUsuarios: GetUsuarios) {
    this.registerRoutes();
  }

  registerRoutes(): void {
    this.httpServer.register('get', '/usuario', async (params: any, body: any) => {
      const output = await this.getUsuarios.execute();
      return output;
    });
  }
}