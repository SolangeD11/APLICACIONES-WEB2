import { prisma } from '../../data/postgres';
import { CreateorigenIdiomaDto, origenIdiomaDatasource, origenIdiomaEntity, UpdateorigenIdiomaDto } from '../../domain';




export class OrigenIdiomaDatasourceImpl implements origenIdiomaDatasource {

  async create( CreateorigenIdiomaDto: CreateorigenIdiomaDto ): Promise<origenIdiomaEntity> {
    const { idioma, ...rest } =  CreateorigenIdiomaDto
    const origenIdioma = await prisma.origenIdiomaModel.create({
      data: rest
    });

    return origenIdiomaEntity.fromObject( origenIdioma );
  }

  async getAll(): Promise<origenIdiomaEntity[]> {
    const origenIdioma = await prisma.origenIdiomaModel.findMany();
    return origenIdioma.map( idioma => origenIdiomaEntity.fromObject(idioma) );
  }

  async findById( id: number ): Promise<origenIdiomaEntity> {
    const origenIdioma = await prisma.origenIdiomaModel.findFirst({
      where: { id }
    });

    if ( !origenIdioma) throw `idioma with id ${ id } not found`;
    return origenIdiomaEntity.fromObject(origenIdioma);
  }

  async updateById( updateorigenIdiomaDto: UpdateorigenIdiomaDto ): Promise<origenIdiomaEntity> {
    await this.findById( updateorigenIdiomaDto.id );
    
    const updatedidioma = await prisma.origenIdiomaModel.update({
      where: { id: updateorigenIdiomaDto.id },
      data: updateorigenIdiomaDto!.values
    });

    return origenIdiomaEntity.fromObject(updatedidioma);
  }

  async deleteById( id: number ): Promise<origenIdiomaEntity> {
    await this.findById( id );
    const deleted = await prisma.origenIdiomaModel.delete({
      where: { id }
    });

    return origenIdiomaEntity.fromObject( deleted );
  }

}