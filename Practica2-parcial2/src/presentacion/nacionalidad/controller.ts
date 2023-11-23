import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateNacionalidadDto, UpdateNacionalidadDto } from '../../domain/dtos';

export class NacionalidadController {
    //* DI
    constructor() { }
    public getNacionalidad = async( req: Request, res: Response ) => {
      const nacionalidades = await prisma.nacionalidadModel.findMany();
      return res.json( nacionalidades );
    };
  
  
  
  
    public getNacionalidadById = async( req: Request, res: Response ) => {
      const id = +req.params.id;
      if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );
  
      const nacionalidades = await prisma.nacionalidadModel.findFirst({
        where: { id }
      });
      
      ( nacionalidades )
        ? res.json( nacionalidades )
        : res.status( 404 ).json( { error: `Nacionalidad with id ${ id } not found` } );
    };
  
  
  
  
    public createNacionalidad = async( req: Request, res: Response ) => {
      
      const [error, createNacionalidadDto] = CreateNacionalidadDto.create(req.body);
      if ( error ) return res.status(400).json({ error });
  
      const nacionalidades = await prisma.nacionalidadModel.create({
        data: createNacionalidadDto!
      });
  
      res.json( nacionalidades );
  
    };
  
  
  
    public updateNacionalidad = async( req: Request, res: Response ) => {
      const id = +req.params.id;
      const [error, updateNacionalidadDto] = UpdateNacionalidadDto.create({...req.body, id});
      if ( error ) return res.status(400).json({ error });
      
      const nacionalidades = await prisma.nacionalidadModel.findFirst({
        where: { id }
      });
      if ( !nacionalidades ) return res.status( 404 ).json( { error: `Nacionalidad with id ${ id } not found` } );
      const updatedNacionalidad= await prisma.nacionalidadModel.update({
        where: { id },
        data: updateNacionalidadDto!.values
      });
      res.json( updatedNacionalidad );
    }
  
  
    public deleteNacionalidad = async(req:Request, res: Response) => {
      const id = +req.params.id;
      const nacionalidades = await prisma.nacionalidadModel.findFirst({
        where: { id }
      });
  
      if ( !nacionalidades) return res.status(404).json({ error: `Nacionalidades with id ${ id } not found` });
      const deleted = await prisma.nacionalidadModel.delete({
        where: { id }
      });
      ( deleted ) 
        ? res.json( deleted )
        : res.status(400).json({ error: `Nacionalidades with id ${ id } not found` });
    }
  }