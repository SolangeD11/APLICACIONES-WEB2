import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateGeneroDto, UpdateGeneroDto } from '../../domain/dtos';


export class GenerosController {
  //* DI
  constructor() { }
  public getGeneros = async( req: Request, res: Response ) => {
    const generos = await prisma.generoModel.findMany();
    return res.json( generos );
  };




  public getGeneroById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const genero = await prisma.generoModel.findFirst({
      where: { id }
    });
    
    ( genero )
      ? res.json( genero )
      : res.status( 404 ).json( { error: `Genero with id ${ id } not found` } );
  };




  public createGenero = async( req: Request, res: Response ) => {
    
    const [error, createGeneroDto] = CreateGeneroDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const genero = await prisma.generoModel.create({
      data: createGeneroDto!
    });

    res.json( genero );

  };



  public updateGenero = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateGeneroDto] = UpdateGeneroDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const genero = await prisma.generoModel.findFirst({
      where: { id }
    });
    if ( !genero ) return res.status( 404 ).json( { error: `Genero with id ${ id } not found` } );
    const updatedGenero = await prisma.generoModel.update({
      where: { id },
      data: updateGeneroDto!.values
    });
    res.json( updatedGenero );
  }


  public deleteGenero = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const genero = await prisma.generoModel.findFirst({
      where: { id }
    });

    if ( !genero ) return res.status(404).json({ error: `Genero with id ${ id } not found` });
    const deleted = await prisma.generoModel.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Genero with id ${ id } not found` });
  }
}