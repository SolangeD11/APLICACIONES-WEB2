import { prisma } from '../../data/postgres';
import { CreateTraduccionIdiomaDto, TraduccionIdiomaDatasource, TraduccionIdiomaEntity, UpdateTraduccionIdiomaDto } from '../../domain';




export class TraduccionIdiomaDatasourceImpl implements TraduccionIdiomaDatasource {

  async create( createTraduccionIdiomaDto: CreateTraduccionIdiomaDto ): Promise<TraduccionIdiomaEntity> {
    const traduccionidioma = await prisma.traduccionIdiomaModel.create({
      data: createTraduccionIdiomaDto!
    });

    return TraduccionIdiomaEntity.fromObject( traduccionidioma );
  }

  async getAll(): Promise<TraduccionIdiomaEntity[]> {
    const traduccionidioma = await prisma.traduccionIdiomaModel.findMany();
    return traduccionidioma.map( traduccionidioma => TraduccionIdiomaEntity.fromObject(traduccionidioma) );
  }

  async findById( id: number ): Promise<TraduccionIdiomaEntity> {
    const traduccionidioma = await prisma.traduccionIdiomaModel.findFirst({
      where: { id }
    });

    if ( !traduccionidioma ) throw `traduccionidioma with id ${ id } not found`;
    return TraduccionIdiomaEntity.fromObject(traduccionidioma);
  }

  async updateById( updateTraduccionIdiomaDto: UpdateTraduccionIdiomaDto ): Promise<TraduccionIdiomaEntity> {
    await this.findById( updateTraduccionIdiomaDto.id );
    
    const updatetraduccionIdioma = await prisma.traduccionIdiomaModel.update({
      where: { id: updateTraduccionIdiomaDto.id },
      data: updateTraduccionIdiomaDto!.values
    });

    return TraduccionIdiomaEntity.fromObject(updatetraduccionIdioma);
  }

  async deleteById( id: number ): Promise<TraduccionIdiomaEntity> {
    await this.findById( id );
    const deleted = await prisma.traduccionIdiomaModel.delete({
      where: { id }
    });

    return TraduccionIdiomaEntity.fromObject( deleted );
  }

}