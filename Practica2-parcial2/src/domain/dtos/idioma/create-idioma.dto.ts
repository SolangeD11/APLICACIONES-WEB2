import { CreateTraduccionIdiomaDto } from "../traduccionidioma/create-traduccionidioma.dto";
export class CreateIdiomaDto {
    private constructor (
        
        public readonly nombreidioma: string,
        public readonly origenId: number,
        public readonly traducciones?: CreateTraduccionIdiomaDto[],

    ){}

    static create(props: {[key:string]: any}): [string?, CreateIdiomaDto?]{
        const { nombreidioma, origenId, traducciones}= props;

        if ( !nombreidioma && !origenId) return ['Propiedades del nombreidioma y origenId requerida', undefined];

        return [undefined, new CreateIdiomaDto(nombreidioma, origenId, traducciones)];
    }
}