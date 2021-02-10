import express, { Application } from "express";
import personasRoutes from './routes/personasRoutes';
//librerias
import morgan from "morgan";
import cors from "cors";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3030);
    this.app.use(morgan("dev")); // permite vizulizar las peticiones al servidor
    this.app.use(cors());
    this.app.use(express.json()); //permite utilizar archivos json
    this.app.use(express.urlencoded({ extended: false })); //formularios
  }

  //rutas
  routes(): void {
      this.app.use('/api/personas',personasRoutes);
  
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
