import { IUsuarioRepository } from "@src/infra/repository/Usuarios/UsuarioRepository";

export class GetUsuarios {
  constructor(readonly repository: IUsuarioRepository) {}
  async execute() {
    const data = await this.repository.getAll();
    if (!data) throw new Error('Usuarios não encontrados');
    return data;
  }
}