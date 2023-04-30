import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";

export function getIndex(req: Request, res: Response) {
   res.redirect('/login')
}

export function getRegister(req: Request, res: Response) {
   res.render('register')
}

export function getLogin(req: Request, res: Response) {
   res.render('login')
}


export async function postRegister(req: Request, res: Response) {
   
}
