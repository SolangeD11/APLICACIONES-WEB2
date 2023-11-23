import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateLibroDto, UpdateLibroDto } from '../../domain/dtos';


export class LibroController {
  //* DI
  constructor() { }
  public getlibro = async( req: Request, res: Response ) => {
    const libros = await prisma.libroModel.findMany();
    return res.json( libros );
  };




  public getlibroById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const libros = await prisma.libroModel.findFirst({
      where: { id }
    });
    
    ( libros)
      ? res.json( libros )
      : res.status( 404 ).json( { error: `Libro with id ${ id } not found` } );
  };




  public createLibro = async( req: Request, res: Response ) => {
    
    const [error, createLibroDto] = CreateLibroDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const libros = await prisma.libroModel.create({
      data: createLibroDto!
    });

    res.json( libros );

  };



  public updatelibro = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateLibroDto] = UpdateLibroDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const libros = await prisma.libroModel.findFirst({
      where: { id }
    });
    if ( !libros ) return res.status( 404 ).json( { error: `Libro with id ${ id } not found` } );
    const updatedLibro = await prisma.libroModel.update({
      where: { id },
      data: updateLibroDto!.values
    });
    res.json( updatedLibro );
  }


  public deletelibro = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const libros = await prisma.libroModel.findFirst({
      where: { id }
    });

    if ( !libros ) return res.status(404).json({ error: `Libro with id ${ id } not found` });
    const deleted = await prisma.libroModel.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Libro with id ${ id } not found` });
  }
}