import { CreateorigenIdiomaDto, origenIdiomaDatasource, origenIdiomaEntity, origenIdiomaRepository, UpdateorigenIdiomaDto } from '../../domain';


export class origenIdiomaRepositoryImpl implements origenIdiomaRepository {

  constructor(
    private readonly datasource: origenIdiomaDatasource,
  ) { }


  create( createorigenIdiomaDto: CreateorigenIdiomaDto ): Promise<origenIdiomaEntity> {
    return this.datasource.create( createorigenIdiomaDto );
  }

  getAll(): Promise<origenIdiomaEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<origenIdiomaEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateorigenIdiomaDto: UpdateorigenIdiomaDto ): Promise<origenIdiomaEntity> {
    return this.datasource.updateById( updateorigenIdiomaDto );
  }

  deleteById( id: number ): Promise<origenIdiomaEntity> {
    return this.datasource.deleteById( id );
  }

}

