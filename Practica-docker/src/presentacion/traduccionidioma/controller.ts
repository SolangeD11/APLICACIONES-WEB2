import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTraduccionIdiomaDto, UpdateTraduccionIdiomaDto } from '../../domain/dtos';


export class TraduccionesController {
  //* DI
  constructor() { }
  public getTraducciones = async( req: Request, res: Response ) => {
    const traducciones = await prisma.traduccionIdiomaModel.findMany();
    return res.json( traducciones );
  };




  public getTraduccionesById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const traducciones = await prisma.traduccionIdiomaModel.findFirst({
      where: { id }
    });
    
    ( traducciones )
      ? res.json( traducciones)
      : res.status( 404 ).json( { error: `Traducciones with id ${ id } not found` } );
  };




  public createTraducciones = async( req: Request, res: Response ) => {
    
    const [error, createTraduccionesDto] = CreateTraduccionIdiomaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const traducciones = await prisma.traduccionIdiomaModel.create({
      data: createTraduccionesDto!
    });

    res.json( traducciones );

  };



  public updateTraducciones = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateTraduccionIdiomaDto] = UpdateTraduccionIdiomaDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const traducciones = await prisma.traduccionIdiomaModel.findFirst({
      where: { id }
    });
    if ( !traducciones ) return res.status( 404 ).json( { error: `Traducciones with id ${ id } not found` } );
    const updatedTraduccionIdioma= await prisma.traduccionIdiomaModel.update({
      where: { id },
      data: updateTraduccionIdiomaDto!.values
    });
    res.json( updatedTraduccionIdioma );
  }


  public deleteTraducciones = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const traducciones = await prisma.traduccionIdiomaModel.findFirst({
      where: { id }
    });

    if ( !traducciones ) return res.status(404).json({ error: `Traducciones with id ${ id } not found` });
    const deleted = await prisma.traduccionIdiomaModel.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Traducciones with id ${ id } not found` });
  }
}