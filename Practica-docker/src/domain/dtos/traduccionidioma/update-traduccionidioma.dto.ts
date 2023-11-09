export class UpdateTraduccionIdiomaDto {
    private constructor(
        public readonly id: number,
        public readonly numerotraduccion?: number,
        public readonly nombretraduccion?: string,
        
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        
        if (this.nombretraduccion) returnObj.nombretraduccion= this.nombretraduccion;
        if (this.numerotraduccion) returnObj.numerotraduccion= this.numerotraduccion;
        

        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateTraduccionIdiomaDto?] {
        
        const {id,  nombretraduccion, numerotraduccion} = props;
        let newnombretraduccion = nombretraduccion;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!nombretraduccion ){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateTraduccionIdiomaDto(id,  nombretraduccion, numerotraduccion)]
    }
}
