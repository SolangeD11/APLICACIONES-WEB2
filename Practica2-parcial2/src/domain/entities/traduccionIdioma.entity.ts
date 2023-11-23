export class TraduccionIdiomaEntity {

    constructor(

      public idtraduccion: number,
      public numerotraduccion: number,
      public nombretraduccion: string,
      public ididioma: number,

    ) {}
  
    public static fromObject( object: {[key: string]: any} ): TraduccionIdiomaEntity {
      const { idtraduccion, numerotraduccion, nombretraduccion, ididioma } = object;
      if ( !idtraduccion ) throw 'Id is required';
      if ( !numerotraduccion ) throw 'numerotraduccion is required';
      if ( !nombretraduccion ) throw 'Name traduccion is required';
      
  
        return new TraduccionIdiomaEntity(idtraduccion, numerotraduccion, nombretraduccion, ididioma)
    }
  
  }