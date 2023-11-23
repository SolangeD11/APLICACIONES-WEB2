import { CreateTraduccionIdiomaDto, UpdateTraduccionIdiomaDto } from '../dtos';
import { TraduccionIdiomaEntity } from '../entities/traduccionIdioma.entity';



export abstract class traduccionIdiomaRepository {

  abstract create( createtraduccionIdiomaDto: CreateTraduccionIdiomaDto ): Promise<TraduccionIdiomaEntity>;

  abstract getAll(): Promise<TraduccionIdiomaEntity[]>;

  abstract findById( id: number ): Promise<TraduccionIdiomaEntity>;
  abstract updateById( updateInventarioDto: UpdateTraduccionIdiomaDto ): Promise<TraduccionIdiomaEntity>;
  abstract deleteById( id: number ): Promise<TraduccionIdiomaEntity>;

}