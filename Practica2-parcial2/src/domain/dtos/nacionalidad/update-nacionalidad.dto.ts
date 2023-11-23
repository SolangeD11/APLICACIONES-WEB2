export class UpdateNacionalidadDto {
    private constructor(
        public readonly id: number,
        public readonly nombrepais: string,
        public readonly nombreciudad: string,
        
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        
        if (this.nombrepais) returnObj.nombrepais= this.nombrepais;
        if (this.nombreciudad) returnObj.nombreciudad= this.nombreciudad;
        

        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateNacionalidadDto?] {
        
        const {id,  nombrepais, nombreciudad} = props;
        let newnombrepais = nombrepais;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!nombrepais && !nombreciudad ){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateNacionalidadDto(id,  nombrepais, nombreciudad)]
    }
}