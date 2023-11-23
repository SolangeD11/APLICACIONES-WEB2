export class CreateAutorDto {
    private constructor (
        public readonly cedulautor: string,
        public readonly nombreautor: string,
        public readonly correoautor: string,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateAutorDto?]{
        const { cedulautor, nombreautor, correoautor}= props;

        if (!cedulautor && !nombreautor && !correoautor) return ['Propiedad Cedula, nombre y correo del autor requerida', undefined];

        return [undefined, new CreateAutorDto(cedulautor, nombreautor, correoautor)];
    }
}