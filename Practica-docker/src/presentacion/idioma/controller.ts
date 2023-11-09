import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateIdiomaDto, UpdateIdiomaDto } from '../../domain/dtos';


export class idiomaController {
  //* DI
  constructor() { }
  public getIdioma = async( req: Request, res: Response ) => {
    const idiomas = await prisma.idiomaModel.findMany();
    return res.json( idiomas );
  };




  public getIdiomaById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const idiomas = await prisma.idiomaModel.findFirst({
      where: { id }
    });
    
    ( idiomas )
      ? res.json( idiomas )
      : res.status( 404 ).json( { error: `Idioma with id ${ id } not found` } );
  };




  public createIdioma = async( req: Request, res: Response ) => {
    
    const [error, createIdiomaDto] = CreateIdiomaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const idiomas = await prisma.idiomaModel.create({
      data: createIdiomaDto!
    });

    res.json( idiomas );

  };



  public updateIdioma = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateIdiomaDto] = UpdateIdiomaDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const idiomas = await prisma.idiomaModel.findFirst({
      where: { id }
    });
    if ( !idiomas ) return res.status( 404 ).json( { error: `Idioma with id ${ id } not found` } );
    const updatedIdioma = await prisma.idiomaModel.update({
      where: { id },
      data: updateIdiomaDto!.values
    });
    res.json( updatedIdioma );
  }


  public deleteIdioma = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const idiomas = await prisma.idiomaModel.findFirst({
      where: { id }
    });

    if ( !idiomas ) return res.status(404).json({ error: `Idioma with id ${ id } not found` });
    const deleted = await prisma.idiomaModel.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Idioma with id ${ id } not found` });
  }
}