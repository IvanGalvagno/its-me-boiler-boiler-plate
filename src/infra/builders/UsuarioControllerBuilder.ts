import { GetUsuarios } from "../../application/usuarios/GetUsuarios";
import { IHttpServer } from "../http/HttpServer";
import IDatabaseConnection from "../database/DataBaseConnection";
import { UsuarioRepositoryDataBase } from "../repository/Usuarios/UsuarioRepository";
import UsuarioController from "../http/Controllers/UsuarioController";

export class UsuarioControllerBuilder {
  private getUsuarios: GetUsuarios;

  constructor(private httpServer: IHttpServer, connection: IDatabaseConnection) {
    const usuarioRepository = new UsuarioRepositoryDataBase(connection);
    this.getUsuarios = new GetUsuarios(usuarioRepository);
  }

  build(): UsuarioController {
    return new UsuarioController(
      this.httpServer,
      this.getUsuarios
    )
  }
}