import { CreateIdiomaDto } from "../idioma/create-idioma.dto";
export class CreateorigenIdiomaDto {
    private constructor (
        public readonly nombrepais: string,
        public readonly idiomaoficial: string,
        public readonly idioma?: CreateIdiomaDto[],
    ){}

    static create(props: {[key:string]: any}): [string?, CreateorigenIdiomaDto?]{
        const { nombrepais, idiomaoficial, idioma}= props;

        if (!nombrepais && !idiomaoficial ) return ['Propiedades nombrepais y idiomaoficial requerida', undefined];

        return [undefined, new CreateorigenIdiomaDto(nombrepais, idiomaoficial, idioma)];
    }
}