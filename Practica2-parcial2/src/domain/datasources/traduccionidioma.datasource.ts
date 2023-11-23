import { CreateTraduccionIdiomaDto, UpdateTraduccionIdiomaDto } from '../dtos';
import { traduccionIdiomaEntity } from '../entities/traduccionIdioma.entity';



export abstract class TraduccionIdiomaDatasource {

  abstract create( createTraduccionIdiomaDto: CreateTraduccionIdiomaDto ): Promise<traduccionIdiomaEntity>;

  abstract getAll(): Promise<traduccionIdiomaEntity[]>;

  abstract findById( id: number ): Promise<traduccionIdiomaEntity>;
  abstract updateById( updateTraduccionIdiomaDto: UpdateTraduccionIdiomaDto ): Promise<traduccionIdiomaEntity>;
  abstract deleteById( id: number ): Promise<traduccionIdiomaEntity>;

}