export class CreateInventarioDto {
    private constructor (
        public readonly numeroCopias: number,
        public readonly estado: string,
        public readonly precioVenta: number,
        public readonly precioAlquiler: number,
        public readonly encargadoId: number,
        public readonly negocioId: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateInventarioDto?]{
        const { numeroCopias,estado, precioVenta,precioAlquiler,encargadoId,negocioId}= props;

        if (!numeroCopias && !estado && !precioVenta && !precioAlquiler && !encargadoId && !negocioId) return ['Propiedades "Numero de copias, estado, precioVenta y precioAlquiler" requeridas', undefined];

        return [undefined, new CreateInventarioDto(numeroCopias, estado, precioVenta,precioAlquiler,encargadoId,negocioId,)];
    }
}