import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateAutorDto, UpdateAutorDto } from '../../domain/dtos';


export class AutoresController {
  //* DI
  constructor() { }
  public getAutores = async( req: Request, res: Response ) => {
    const autores = await prisma.autorModel.findMany();
    return res.json( autores );
  };




  public getAutorById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const autor = await prisma.autorModel.findFirst({
      where: { id }
    });
    
    ( autor )
      ? res.json( autor )
      : res.status( 404 ).json( { error: `Autor with id ${ id } not found` } );
  };




  public createAutor = async( req: Request, res: Response ) => {
    
    const [error, createAutorDto] = CreateAutorDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const autor = await prisma.autorModel.create({
      data: createAutorDto!
    });

    res.json( autor );

  };



  public updateAutor = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateAutorDto] = UpdateAutorDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const autor = await prisma.autorModel.findFirst({
      where: { id }
    });
    if ( !autor ) return res.status( 404 ).json( { error: `Autor with id ${ id } not found` } );
    const updatedAutor = await prisma.autorModel.update({
      where: { id },
      data: updateAutorDto!.values
    });
    res.json( updatedAutor );
  }


  public deleteAutor = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const autor = await prisma.autorModel.findFirst({
      where: { id }
    });

    if ( !autor ) return res.status(404).json({ error: `Autor with id ${ id } not found` });
    const deleted = await prisma.autorModel.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Autor with id ${ id } not found` });
  }
}