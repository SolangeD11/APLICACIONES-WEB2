import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateEditorialDto, UpdateEditorialDto } from '../../domain/dtos';


export class EditorialController {
  //* DI
  constructor() { }
  public getEditorial= async( req: Request, res: Response ) => {
    const editoriales = await prisma.editorialModel.findMany();
    return res.json( editoriales );
  };




  public getEditorialById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const editoriales = await prisma.editorialModel.findFirst({
      where: { id }
    });
    
    ( editoriales )
      ? res.json( editoriales )
      : res.status( 404 ).json( { error: `Editorial with id ${ id } not found` } );
  };




  public createEditorial = async( req: Request, res: Response ) => {
    
    const [error, createEditorialDto] = CreateEditorialDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const editoriales = await prisma.editorialModel.create({
      data: createEditorialDto!
    });

    res.json( editoriales );

  };



  public updateEditorial = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateEditorialDto] = UpdateEditorialDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const editoriales = await prisma.editorialModel.findFirst({
      where: { id }
    });
    if ( !editoriales ) return res.status( 404 ).json( { error: `Editorial with id ${ id } not found` } );
    const updatedEditorial = await prisma.editorialModel.update({
      where: { id },
      data: updateEditorialDto!.values
    });
    res.json( updatedEditorial );
  }


  public deleteEditorial = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const editoriales = await prisma.editorialModel.findFirst({
      where: { id }
    });

    if ( !editoriales ) return res.status(404).json({ error: `Editorial with id ${ id } not found` });
    const deleted = await prisma.editorialModel.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Editorial with id ${ id } not found` });
  }
}