export class CreateNegocioDto {
    private constructor (
        public readonly correoNegocio: string,
        public readonly nombreNegocio: string,
        public readonly direccionNegocio: string,
        public readonly telefonoNegocio: number,
        public readonly totalLibros: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateNegocioDto?]{
        const { correoNegocio,nombreNegocio, direccionNegocio, telefonoNegocio, totalLibros}= props;

        if (!correoNegocio && !nombreNegocio) return ['Propiedad Email requerida', undefined];

        return [undefined, new CreateNegocioDto(correoNegocio, nombreNegocio, direccionNegocio, telefonoNegocio,totalLibros)];
    }
}