import {Request, Response} from 'express';
import pool from '../database';

class PersonasController {

    public async list(req: Request, res: Response): Promise<void> {
    const data = await pool.query(
      "select nombres,apellidos,dni from personas",
      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
        }
       );
    }

    public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO personas set ?", [req.body]);
    res.json({ text: "Persona guardado" });
    }

    public async put(req: Request, res: Response): Promise<void> {
    await pool.query("update personas set ? where peronas.id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ text: "Perona modificado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
    await pool.query("delete from personas where personas.id = ?", [
      req.params.id,
    ]);
    res.json({ text: "delete:" + req.params.id });
  }
    
    public async getOne(req: Request, res: Response): Promise<any> {
      const data = await pool.query(
      "select * from personas where personas.dni = ?",
      [req.params.id],

      (err, result, field) => {
        if (!err) {
          res.json(result);
        }
      }
    );
    }
}

const personasController = new PersonasController();
export default personasController;