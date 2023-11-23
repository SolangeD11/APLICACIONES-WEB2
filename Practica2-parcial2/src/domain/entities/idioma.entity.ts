import { traduccionIdiomaEntity } from "./traduccionIdioma.entity";

export class IdiomaEntity {

    constructor(   
      public id: number,
      public nombreidioma: string,
      public origenId: number,
      public traducciones?: traduccionIdiomaEntity[],
    ) {}
    get TraduccionIdioma() {
      return this.traducciones;
    }
    public static fromObject( object: {[key: string]: any} ): IdiomaEntity {
      const { id, nombreidioma, origenId, traducciones} = object;
      if ( !id ) throw 'Id is required';
      if ( !nombreidioma ) throw 'Country name is required';
      if ( !origenId ) throw 'Origen id is required';
      
        return new IdiomaEntity(id, nombreidioma, origenId, traducciones)
    }
  
  }