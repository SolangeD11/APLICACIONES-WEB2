import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateNegocioDto, UpdateNegocioDto } from '../../domain/dtos';


export class NegociosController {
  //* DI
  constructor() { }
  public getNegocios = async( req: Request, res: Response ) => {
    const negocios = await prisma.negocioModel.findMany();
    return res.json( negocios );
  };




  public getNegocioById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const negocio = await prisma.negocioModel.findFirst({
      where: { id }
    });
    
    ( negocio )
      ? res.json( negocio )
      : res.status( 404 ).json( { error: `Negocio with id ${ id } not found` } );
  };




  public createNegocio = async( req: Request, res: Response ) => {
    
    const [error, createNegocioDto] = CreateNegocioDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const negocio = await prisma.negocioModel.create({
      data: createNegocioDto!
    });

    res.json( negocio );

  };



  public updateNegocio = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateNegocioDto] = UpdateNegocioDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const negocio = await prisma.negocioModel.findFirst({
      where: { id }
    });
    if ( !negocio ) return res.status( 404 ).json( { error: `Negocio with id ${ id } not found` } );
    const updatedNegocio = await prisma.negocioModel.update({
      where: { id },
      data: updateNegocioDto!.values
    });
    res.json( updatedNegocio );
  }


  public deleteNegocio = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const negocio = await prisma.negocioModel.findFirst({
      where: { id }
    });

    if ( !negocio ) return res.status(404).json({ error: `Negocio with id ${ id } not found` });
    const deleted = await prisma.negocioModel.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Negocio with id ${ id } not found` });
  }
}