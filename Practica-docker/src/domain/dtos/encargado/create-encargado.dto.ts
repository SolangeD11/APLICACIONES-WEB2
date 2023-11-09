export class CreateEncargadoDto {
    private constructor (
        public readonly correoEncargado: string,
        public readonly nombreEncargado: string,
        public readonly telefonoEncargado: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateEncargadoDto?]{
        const { correoEncargado,nombreEncargado, telefonoEncargado}= props;

        if (!correoEncargado && !nombreEncargado && !telefonoEncargado) return ['Propiedades "correo, nombre y telefono" requeridas', undefined];

        return [undefined, new CreateEncargadoDto(correoEncargado, nombreEncargado, telefonoEncargado)];
    }
}