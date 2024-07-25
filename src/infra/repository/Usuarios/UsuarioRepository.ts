import { Usuario } from "../../../domain/Usuario";
import IDatabaseConnection from "@src/infra/database/DataBaseConnection";

export interface IUsuarioRepository {
  getAll(): Promise<Usuario[]>
}

export class UsuarioRepositoryDataBase implements IUsuarioRepository {
  constructor(readonly connection: IDatabaseConnection) {}
  async getAll(): Promise<Usuario[]> {
    const [usuarios] = await this.connection.query('select * from usuarios');
    console.table(usuarios);

    return usuarios.map((usuario: any) => new Usuario(
      usuario.Id,
      usuario.Nome,
      usuario.Email,
    ));
  }
}