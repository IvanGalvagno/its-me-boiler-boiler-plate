import express, { urlencoded } from 'express';
import cors from 'cors';

export interface IHttpServer {
  register(method: string, url: string, callback: Function): void;
  listen(port: number): void;
}

export class ExpressAdapter implements IHttpServer {
  protected app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors({
      exposedHeaders: ['X-Suggested-Filename'],
      origin: '*',
      methods: 'HEAD,GET,POST,PUT,DELETE',
    }));
    this.app.enable('trust proxy');
    
    this.app.use(urlencoded({ extended: false }));
  }

  register(method: string, url: string, callback: Function): void {
    this.app[method](url.replace(/\{|\}/g, ""), async function (req: any, res: any) {
			try {
				const output = await callback(req.params, req.body);
				res.json(output);
			} catch (error: any) {
				res.status(422).json({
					message: error.message
				});
			}
		});
  }
  listen(port: number): void {
    this.app.listen(port);
  }
}
