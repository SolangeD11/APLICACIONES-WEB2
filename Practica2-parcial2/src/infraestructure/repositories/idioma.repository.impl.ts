import { CreateIdiomaDto, IdiomaDatasource, IdiomaEntity, IdiomaRepository, UpdateIdiomaDto } from '../../domain';


export class IdiomaRepositoryImpl implements IdiomaRepository {

  constructor(
    private readonly datasource: IdiomaDatasource,
  ) { }


  create( createIdiomaDto: CreateIdiomaDto ): Promise<IdiomaEntity> {
    return this.datasource.create( createIdiomaDto );
  }

  getAll(): Promise<IdiomaEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<IdiomaEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateIdiomaDto: UpdateIdiomaDto ): Promise<IdiomaEntity> {
    return this.datasource.updateById( updateIdiomaDto );
  }

  deleteById( id: number ): Promise<IdiomaEntity> {
    return this.datasource.deleteById( id );
  }

}

