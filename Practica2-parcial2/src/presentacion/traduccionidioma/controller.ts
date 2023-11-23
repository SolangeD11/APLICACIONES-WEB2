// DDD
import { Request, Response } from 'express';
import { CreateTraduccionIdiomaDto, UpdateTraduccionIdiomaDto } from '../../domain/dtos';
import { traduccionIdiomaRepository } from '../../domain';


export class TraduccionaIdiomaController {

  //* DI
  constructor(
    private readonly traduccionidiomaRepository: traduccionIdiomaRepository,
  ) { }


  public getTraducciones = async ( req: Request, res: Response ) => {
    const traduccionidioma = await this.traduccionidiomaRepository.getAll();
    return res.json( traduccionidioma );
  };

  public getTraduccionesById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const traduccionidioma = await this.traduccionidiomaRepository.findById( id );
      res.json( traduccionidioma );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createTraducciones = async ( req: Request, res: Response ) => {
    const [ error, createTraduccionIdiomaDto ] = CreateTraduccionIdiomaDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const traduccionidioma = await this.traduccionidiomaRepository.create( createTraduccionIdiomaDto! );
    res.json( traduccionidioma );

  };

  public updateTraducciones = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateTraduccionIdiomaDto ] = UpdateTraduccionIdiomaDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedtraduccionidioma = await this.traduccionidiomaRepository.updateById( updateTraduccionIdiomaDto! );
    return res.json( updatedtraduccionidioma );

  };


  public deleteTraducciones = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedtraduccionidioma = await this.traduccionidiomaRepository.deleteById( id );
    res.json( deletedtraduccionidioma );

  };



}