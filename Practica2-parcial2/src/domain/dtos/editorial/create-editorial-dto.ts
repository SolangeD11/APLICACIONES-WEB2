export class CreateEditorialDto {
    private constructor (
        public readonly nombreEditorial: string,
        public readonly correoEditorial: string,
        public readonly direccionEditorial: string,
        public readonly telefonoEditorial: number,
        public readonly libroId: number,
    ){}
    static create(props: {[key:string]: any}): [string?, CreateEditorialDto?]{
        const { nombreEditorial, correoEditorial, direccionEditorial, telefonoEditorial, libroId}= props;

        if (!nombreEditorial && !correoEditorial && !direccionEditorial && !telefonoEditorial && !libroId) return ['Propiedades "nombreEditorial, correoEditorial, direccionEditorial, telefonoEditorial, libroId', undefined];

        return [undefined, new CreateEditorialDto(nombreEditorial, correoEditorial, direccionEditorial, telefonoEditorial, libroId)];
    }
}