import express, { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { appendFile } from 'fs';

const prisma = new PrismaClient();
const app = express()
const port = 3000;

app.use(express.json());


app.post('/', async ( req: Request, res: Response) => {
  const {username,password} = req.body;    
    const user = await prisma.user.create({
      data : {
        username : username,
        password : password,
      }
    });
    res.json(user);
});

app.get('/user', async ( req: Request, res: Response) => {
  const {username,password} = req.body;    
    const user = await prisma.user.findMany();
    res.json(user);
});

app.get('/user/:id', async ( req: Request, res: Response) => {
  var ids = req.params.id;
  const user  = await prisma.user.findUnique({
    where : { id : Number(ids)},
  });
    res.json(user);
});

app.put('/user/:id', async ( req: Request, res: Response) => {
  const {username,password} = req.body;    
  var ids = req.params.id;
  const user  = await prisma.user.update({
    where : { id : Number(ids)},
    data : {
      username : username,
      password : password,
    }
  });
    res.json(user);
});

app.delete('/user/:id', async ( req: Request, res: Response) => {
  var ids = req.params.id;
  const user  = await prisma.user.delete({
    where : { id : Number(ids)},
  });
    res.json(user);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});