import { prisma } from '../../data/postgres';
import { CreateIdiomaDto, IdiomaDatasource, IdiomaEntity, UpdateIdiomaDto } from '../../domain';




export class IdiomaDatasourceImpl implements IdiomaDatasource {

  async create( createIdiomaDto: CreateIdiomaDto ): Promise<IdiomaEntity> {
    const { traducciones, ...rest } =  createIdiomaDto
    const idioma = await prisma.idiomaModel.create({
      data: rest
    });

    return IdiomaEntity.fromObject( idioma );
  }

  async getAll(): Promise<IdiomaEntity[]> {
    const idioma = await prisma.idiomaModel.findMany();
    return idioma.map( idioma => IdiomaEntity.fromObject(idioma) );
  }

  async findById( id: number ): Promise<IdiomaEntity> {
    const idioma = await prisma.idiomaModel.findFirst({
      where: { id }
    });

    if ( !idioma) throw `idioma with id ${ id } not found`;
    return IdiomaEntity.fromObject(idioma);
  }

  async updateById( updateIdiomaDto: UpdateIdiomaDto ): Promise<IdiomaEntity> {
    await this.findById( updateIdiomaDto.id );
    
    const updatedidioma = await prisma.idiomaModel.update({
      where: { id: updateIdiomaDto.id },
      data: updateIdiomaDto!.values
    });

    return IdiomaEntity.fromObject(updatedidioma);
  }

  async deleteById( id: number ): Promise<IdiomaEntity> {
    await this.findById( id );
    const deleted = await prisma.idiomaModel.delete({
      where: { id }
    });

    return IdiomaEntity.fromObject( deleted );
  }

}