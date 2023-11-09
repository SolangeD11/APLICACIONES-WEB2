export class UpdateEditorialDto {
    private constructor(
        public readonly id: number,
        public readonly nombreEditorial: string,
        public readonly correoEditorial: string,
        public readonly direccionEditorial: string,
        public readonly telefonoEditorial: number,
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        if (this.nombreEditorial) returnObj.nombreEditorial = this.nombreEditorial;
        if (this.correoEditorial) returnObj.correoEditorial = this.correoEditorial;
        if (this.direccionEditorial) returnObj.direccionEditorial = this.direccionEditorial;
        if (this.telefonoEditorial) returnObj.telefonoEditorial = this.telefonoEditorial;
        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateEditorialDto?] {
        
        const {id, nombreEditorial, correoEditorial, direccionEditorial, telefonoEditorial} = props;
        let newCorreo = correoEditorial;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!nombreEditorial && !correoEditorial && !direccionEditorial && !telefonoEditorial){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateEditorialDto(id, nombreEditorial, correoEditorial, direccionEditorial, telefonoEditorial)]
    }
}