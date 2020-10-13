import { request, Request, Response } from 'express'
import { ICrud, UserEntity } from '../entities'
import { UserService } from '../services'
import { ICrudController } from '.';

const typeguard = (o: UserEntity): o is UserEntity => (o as UserEntity).email !== undefined;

class UserController implements ICrudController {
    private service: ICrud<UserEntity>;

    constructor() {
        this.service = new UserService();
    }

    list(req: Request, res: Response): void {
        res.status(200).json( this.service.list() );
    }

    create(req: Request, res: Response): void {
        const item: UserEntity = { email: req.body.email, password:req.body.password };

        try {
            res.status(201).json( this.service.create(item) );
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    read(req: Request, res: Response): void {
        try {
            res.status(200).json( this.service.read(parseInt(req.params.id)) );
        } catch (error) {
            res.status(404).json({ message: error.message })
        }        
    }

    update(req: Request, res: Response): void {        
        try {
            const item: UserEntity = { 
                user_id: parseInt(req.params.id), 
                email: req.body.email,
                password:req.body.password
            };

            res.status(200).json( this.service.update(item.user_id!, item) );
        } catch (error) {
            res.status(404).json({ message: error.message })
        }        
    }

    delete(req: Request, res: Response): void {
        res.json( this.service.delete(parseInt(req.params.id)) );
    }
}

export { UserController };