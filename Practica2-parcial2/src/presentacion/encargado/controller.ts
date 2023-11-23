import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateEncargadoDto, UpdateEncargadoDto } from '../../domain/dtos';


export class EncargadosController {
  //* DI
  constructor() { }
  public getEncargados = async( req: Request, res: Response ) => {
    const encargados = await prisma.encargadoModel.findMany();
    return res.json( encargados );
  };




  public getEncargadoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const encargados = await prisma.encargadoModel.findFirst({
      where: { id }
    });
    
    ( encargados )
      ? res.json( encargados )
      : res.status( 404 ).json( { error: `Encargado with id ${ id } not found` } );
  };




  public createEncargado = async( req: Request, res: Response ) => {
    
    const [error, createEncargadoDto] = CreateEncargadoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const encargados = await prisma.encargadoModel.create({
      data: createEncargadoDto!
    });

    res.json( encargados );

  };



  public updateEncargado = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateEncargadoDto] = UpdateEncargadoDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const encargados = await prisma.encargadoModel.findFirst({
      where: { id }
    });
    if ( !encargados ) return res.status( 404 ).json( { error: `Encargado with id ${ id } not found` } );
    const updatedEncargado = await prisma.encargadoModel.update({
      where: { id },
      data: updateEncargadoDto!.values
    });
    res.json( updatedEncargado );
  }


  public deleteEncargado = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const encargados = await prisma.encargadoModel.findFirst({
      where: { id }
    });

    if ( !encargados ) return res.status(404).json({ error: `Encargado with id ${ id } not found` });
    const deleted = await prisma.encargadoModel.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Encargado with id ${ id } not found` });
  }
}