import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateInventarioDto, UpdateInventarioDto } from '../../domain/dtos';


export class InevtarioController {
  //* DI
  constructor() { }
  public getInventario = async( req: Request, res: Response ) => {
    const invetario = await prisma.inventarioModel.findMany();
    return res.json( invetario );
  };




  public getInventarioById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const invetario = await prisma.inventarioModel.findFirst({
      where: { id }
    });
    
    ( invetario )
      ? res.json( invetario )
      : res.status( 404 ).json( { error: `Inventario with id ${ id } not found` } );
  };




  public createInventario = async( req: Request, res: Response ) => {
    
    const [error, createInventarioDto] = CreateInventarioDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const invetario = await prisma.inventarioModel.create({
      data: createInventarioDto!
    });

    res.json( invetario );

  };



  public updateInventario = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateInventarioDto] = UpdateInventarioDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const invetario = await prisma.inventarioModel.findFirst({
      where: { id }
    });
    if ( !invetario ) return res.status( 404 ).json( { error: `Inventario with id ${ id } not found` } );
    const updatedInventario = await prisma.inventarioModel.update({
      where: { id },
      data: updateInventarioDto!.values
    });
    res.json( updatedInventario );
  }


  public deleteInventario = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const invetario = await prisma.inventarioModel.findFirst({
      where: { id }
    });

    if ( !invetario ) return res.status(404).json({ error: `Inventario with id ${ id } not found` });
    const deleted = await prisma.inventarioModel.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Inventario with id ${ id } not found` });
  }
}