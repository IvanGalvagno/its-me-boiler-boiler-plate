import Main from "./Main";
import config from "./shared/config";

console.time('Inicialização');
async function initServer() {
  Main.init().then(() => {
    console.info(`
      ################################################
      # Servidor HTTP Online:
      # ${new Date()}
      # Ambiente: ${process.env.NODE_ENV}
      # Plataforma: ${process.platform}
      # Porta: ${config.port}
      # Banco de Dados: SQL Server - ${config.database.databaseName}
      # Documentação: Coming soon
      ################################################
      `);
      console.timeEnd('Inicialização');
  }).catch((error) => {
    console.error('Erro ao tentar inicializar o servidor', error);
  })
}

initServer();