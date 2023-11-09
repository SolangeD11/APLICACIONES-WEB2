import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCategoriaDto, UpdateCategoriaDto } from '../../domain/dtos';


export class CategoriasController {
  //* DI
  constructor() { }
  public getcategoria = async( req: Request, res: Response ) => {
    const categorias = await prisma.categoriaModel.findMany();
    return res.json( categorias);
  };




  public getcategoriaById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const categorias = await prisma.categoriaModel.findFirst({
      where: { id }
    });
    
    ( categorias )
      ? res.json( categorias)
      : res.status( 404 ).json( { error: `Categoria with id ${ id } not found` } );
  };




  public createCategoria = async( req: Request, res: Response ) => {
    
    const [error, createCategoriaDto] = CreateCategoriaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const categorias = await prisma.categoriaModel.create({
      data: createCategoriaDto!
    });

    res.json( categorias );

  };



  public updatecategoria = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updatecategoriaDto] = UpdateCategoriaDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const categorias = await prisma.categoriaModel.findFirst({
      where: { id }
    });
    if ( !categorias ) return res.status( 404 ).json( { error: `Categoria with id ${ id } not found` } );
    const updateCategoria = await prisma.categoriaModel.update({
      where: { id },
      data: updatecategoriaDto!.values
    });
    res.json( updateCategoria );
  }


  public deletecategoria = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const categorias = await prisma.categoriaModel.findFirst({
      where: { id }
    });

    if ( !categorias ) return res.status(404).json({ error: `Categorias with id ${ id } not found` });
    const deleted = await prisma.categoriaModel.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Categoria with id ${ id } not found` });
  }
}