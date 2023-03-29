import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export class VerifyTokenUser {
  public verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]
    const secret = process.env.SECRET;

    if(!token){
      res.status(401).json({message: 'acesso negado'})
      return;
    }

    try {
      if(secret !== undefined){
        verify(token, secret)
      }
      next()
    } catch (error) {
      res.status(400).json({message: "token invalido"})
    }
    
  }
}
