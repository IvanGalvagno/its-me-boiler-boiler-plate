import config from '../../shared/config';
import sqlServer from 'mssql';

export default interface IDatabaseConnection {
  query(statement: string, params?: any): Promise<any>;
  close(): Promise<void>;
}

export interface SQLServerConfig {
  user: string,
  password: string,
  database: string,
  server: string
  pool: {
    max: number,
    min: number,
    idleTimeoutMillis: number,
  },
  options: {
    trustServerCertificate: boolean
  }
};

export interface ISQLServerConfig {
  user: string,
  password: string,
  database: string,
  server: string
  pool: {
    max: number,
    min: number,
    idleTimeoutMillis: number,
  },
  options: {
    trustServerCertificate: boolean
  }
};
export class SQLServerAdapter implements IDatabaseConnection {
  private static _instance: SQLServerAdapter;
  private connection: any;

  private constructor() {
    this.connection = undefined;
  }

  static getInstance(): SQLServerAdapter {
    if (!SQLServerAdapter._instance) {
      SQLServerAdapter._instance = new SQLServerAdapter();
    }
    return SQLServerAdapter._instance;
  } 

  async query(statement: string, params: any): Promise<any> {
    await this.connect();

    const request = this.connection!.request();
    if (params) {
      for (const param in params) {
        request.input(param, params[param]);
      }
    }
    const result = await request.query(statement);
    return result.recordsets;

  }
  async close(): Promise<void> {
    if (this.connection) {
      await this.connection.close();
      this.connection = undefined;
    }
  }

  private async connect() {
    if (!this.connection) {
      this.connection = await sqlServer.connect(this.getConfig());
    }
  }

  private getConfig(): SQLServerConfig {
    return {
      user: config.database.user,
      password: config.database.password,
      database: config.database.databaseName,
      server: config.database.server,
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      options: {
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
    }
  }
}
