export class UpdateorigenIdiomaDto {
    private constructor(
        public readonly id: number,
        public readonly nombrepais?: string,
        public readonly idiomaoficial?: string,
 
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        if (this.nombrepais) returnObj.nombrepais = this.nombrepais;
        if (this.idiomaoficial) returnObj.idiomaoficial = this.idiomaoficial;
        
        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateorigenIdiomaDto?] {
        
        const {id, nombrepais, idiomaoficial} = props;
        let newnombrepais = nombrepais;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!nombrepais && !idiomaoficial ){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateorigenIdiomaDto(id, nombrepais, idiomaoficial)]
    }
}