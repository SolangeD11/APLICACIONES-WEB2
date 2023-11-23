import { UpdateTraduccionIdiomaDto } from "../traduccionidioma/update-traduccionidioma.dto";
export class UpdateIdiomaDto {
    private constructor(
        public readonly id: number,
        public readonly nombreIdioma?: string,
        public readonly traducciones?: UpdateTraduccionIdiomaDto[],
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        
        if (this.nombreIdioma) returnObj.nombreIdioma = this.nombreIdioma;
        if (this.traducciones) returnObj.traducciones = this.traducciones;
        

        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateIdiomaDto?] {
        
        const {id,  nombreIdioma, traducciones} = props;
        let newnombreIdioma = nombreIdioma;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!nombreIdioma && !traducciones ){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateIdiomaDto(id ,nombreIdioma, traducciones)]
    }
}
