export class CreateorigenIdiomaDto {
    private constructor (
        public readonly nombrepais: string,
        public readonly idiomaoficial: string,
        
    ){}

    static create(props: {[key:string]: any}): [string?, CreateorigenIdiomaDto?]{
        const { nombrepais, idiomaoficial}= props;

        if (!nombrepais && !idiomaoficial ) return ['Propiedades nombrepais y idiomaoficial requerida', undefined];

        return [undefined, new CreateorigenIdiomaDto(nombrepais, idiomaoficial)];
    }
}