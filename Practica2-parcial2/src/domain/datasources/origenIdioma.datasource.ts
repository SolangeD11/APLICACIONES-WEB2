import { CreateorigenIdiomaDto, UpdateorigenIdiomaDto } from '../dtos';
import { origenIdiomaEntity } from '../entities/origenIdioma.entity';



export abstract class origenIdiomaDatasource {

  abstract create( createorigenIdiomaDto: CreateorigenIdiomaDto ): Promise<origenIdiomaEntity>;

  abstract getAll(): Promise<origenIdiomaEntity[]>;

  abstract findById( id: number ): Promise<origenIdiomaEntity>;
  abstract updateById( updateorigenIdiomaDto: UpdateorigenIdiomaDto ): Promise<origenIdiomaEntity>;
  abstract deleteById( id: number ): Promise<origenIdiomaEntity>;

}