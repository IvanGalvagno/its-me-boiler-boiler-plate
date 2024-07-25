import { IHttpServer } from "../HttpServer"


export class HealthCheck {
  async execute() {
    return { message: 'API Gateway is Running...' };
  }
}

export default class HealthCheckController {
  constructor(readonly httpServer: IHttpServer, readonly healthCheck: HealthCheck) {
    httpServer.register('get', '/health', async (params: any, body: any) => {
      const output = await healthCheck.execute();
      return output;
    });
  }
}