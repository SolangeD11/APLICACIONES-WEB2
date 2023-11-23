import { IdiomaEntity } from "./idioma.entity";

export class origenIdiomaEntity {

    constructor(
      public id: number,
      public nombrepais: string,
      public idiomaoficial: string,
      public idioma?: IdiomaEntity[],
    ) {}
    get Idioma() {
      return this.idioma;
    }
    public static fromObject( object: {[key: string]: any} ): origenIdiomaEntity {
      const { id, nombrepais, idiomaoficial, idioma} = object;
      if ( !id ) throw 'Id is required';
      if ( !nombrepais ) throw 'Country name is required';
      if ( !idiomaoficial ) throw 'Languaje name is required';
      
        return new origenIdiomaEntity(id, nombrepais, idiomaoficial, idioma)
    }
  
  }