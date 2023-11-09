export class UpdateIdiomaDto {
    private constructor(
        public readonly id: number,
        public readonly nombreIdioma?: string,
          
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        
        if (this.nombreIdioma) returnObj.nombreIdioma = this.nombreIdioma;
        

        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateIdiomaDto?] {
        
        const {id,  nombreIdioma} = props;
        let newnombreIdioma = nombreIdioma;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!nombreIdioma ){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateIdiomaDto(id ,nombreIdioma)]
    }
}
