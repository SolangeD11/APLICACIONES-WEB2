import { CreateTraduccionIdiomaDto, TraduccionIdiomaDatasource, TraduccionIdiomaEntity, traduccionIdiomaRepository, UpdateTraduccionIdiomaDto } from '../../domain';


export class traduccionIdiomaRepositoryImpl implements traduccionIdiomaRepository {

  constructor(
    private readonly datasource: TraduccionIdiomaDatasource,
  ) { }


  create( createTraduccionIdiomaDto: CreateTraduccionIdiomaDto ): Promise<TraduccionIdiomaEntity> {
    return this.datasource.create( createTraduccionIdiomaDto );
  }

  getAll(): Promise<TraduccionIdiomaEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<TraduccionIdiomaEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateTraduccionIdiomaDto: UpdateTraduccionIdiomaDto ): Promise<TraduccionIdiomaEntity> {
    return this.datasource.updateById( updateTraduccionIdiomaDto );
  }

  deleteById( id: number ): Promise<TraduccionIdiomaEntity> {
    return this.datasource.deleteById( id );
  }

}

