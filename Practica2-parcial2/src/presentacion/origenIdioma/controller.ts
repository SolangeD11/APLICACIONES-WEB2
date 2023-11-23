// DDD
import { Request, Response } from 'express';
import { CreateorigenIdiomaDto, UpdateorigenIdiomaDto } from '../../domain/dtos';
import { origenIdiomaRepository } from '../../domain';


export class origenIdiomaController {

  //* DI
  constructor(
    private readonly origenIdiomaRepository: origenIdiomaRepository,
  ) { }


  public getOrigenIdioma = async ( req: Request, res: Response ) => {
    const origenidioma = await this.origenIdiomaRepository.getAll();
    return res.json( origenidioma );
  };

  public getOrigenIdiomaById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const origenidioma = await this.origenIdiomaRepository.findById( id );
      res.json( origenidioma );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createOrigenIdioma = async ( req: Request, res: Response ) => {
    const [ error, createorigenIdiomaDto ] = CreateorigenIdiomaDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const origenidioma = await this.origenIdiomaRepository.create( createorigenIdiomaDto! );
    res.json( origenidioma );

  };

  public updateOrigenIdioma = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateorigenIdiomaDto ] = UpdateorigenIdiomaDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedorigenIdioma = await this.origenIdiomaRepository.updateById( updateorigenIdiomaDto! );
    return res.json( updatedorigenIdioma );

  };


  public deleteOrigenIdioma = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedorigenIdioma = await this.origenIdiomaRepository.deleteById( id );
    res.json( deletedorigenIdioma );

  };



}