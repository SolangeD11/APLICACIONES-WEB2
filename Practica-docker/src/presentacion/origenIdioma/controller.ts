import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateorigenIdiomaDto, UpdateorigenIdiomaDto } from '../../domain/dtos';


export class origenIdiomaController {
  //* DI
  constructor() { }
  public getorigenIdioma = async( req: Request, res: Response ) => {
    const origenes = await prisma.origenIdiomaModel.findMany();
    return res.json( origenes );
  };




  public getorigenIdiomaById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const origenes = await prisma.origenIdiomaModel.findFirst({
      where: { id }
    });
    
    ( origenes )
      ? res.json( origenes )
      : res.status( 404 ).json( { error: `origenIdioma with id ${ id } not found` } );
  };




  public createorigenIdioma = async( req: Request, res: Response ) => {
    
    const [error, createorigenIdiomaDto] = CreateorigenIdiomaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const origenes= await prisma.origenIdiomaModel.create({
      data: createorigenIdiomaDto!
    });

    res.json( origenes);

  };



  public updateorigenIdioma = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateorigenIdiomaDto] = UpdateorigenIdiomaDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const origenes = await prisma.origenIdiomaModel.findFirst({
      where: { id }
    });
    if ( !origenes) return res.status( 404 ).json( { error: `origenIdioma with id ${ id } not found` } );
    const updatedorigenIdioma = await prisma.origenIdiomaModel.update({
      where: { id },
      data: updateorigenIdiomaDto!.values
    });
    res.json( updatedorigenIdioma );
  }


  public deleteorigenIdioma = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const origenes = await prisma.origenIdiomaModel.findFirst({
      where: { id }
    });

    if ( !origenes ) return res.status(404).json({ error: `origenIdioma with id ${ id } not found` });
    const deleted = await prisma.origenIdiomaModel.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `origenIdioma with id ${ id } not found` });
  }
}