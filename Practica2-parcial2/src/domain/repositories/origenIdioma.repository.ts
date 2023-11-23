import { CreateorigenIdiomaDto, UpdateorigenIdiomaDto } from '../dtos';
import { origenIdiomaEntity } from '../entities/origenIdioma.entity';



export abstract class origenIdiomaRepository {

  abstract create( createInventarioDto: CreateorigenIdiomaDto ): Promise<origenIdiomaEntity>;

  abstract getAll(): Promise<origenIdiomaEntity[]>;

  abstract findById( id: number ): Promise<origenIdiomaEntity>;
  abstract updateById( updateInventarioDto: UpdateorigenIdiomaDto ): Promise<origenIdiomaEntity>;
  abstract deleteById( id: number ): Promise<origenIdiomaEntity>;

}