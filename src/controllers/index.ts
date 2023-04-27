import { Request, Response } from "express";

export function getIndexPage(req: Request, res: Response) {
   res.render('index', {
      title: 'Super Chat IO'
   })
}

