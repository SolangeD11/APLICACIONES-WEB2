export class UpdateInventarioDto {
    private constructor(
        public readonly id: number,
        public readonly numeroCopias?: number,
        public readonly estado?: string,
        public readonly precioVenta?: number, 
        public readonly precioAlquiler?: number,
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        if (this.numeroCopias) returnObj.numeroCopias = this.numeroCopias;
        if (this.estado) returnObj.estado = this.estado;
        if (this.precioVenta) returnObj.precioVenta = this.precioVenta;
        if (this.precioAlquiler) returnObj.precioAlquiler = this.precioAlquiler;

        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateInventarioDto?] {
        
        const {id, numeroCopias, estado, precioVenta,precioAlquiler} = props;
        let newNumCopias = numeroCopias;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!numeroCopias && !estado && !precioVenta && !precioAlquiler){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateInventarioDto(id, numeroCopias,estado,precioVenta,precioAlquiler,)]
    }
}