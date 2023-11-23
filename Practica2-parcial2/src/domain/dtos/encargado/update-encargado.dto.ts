export class UpdateEncargadoDto {
    private constructor(
        public readonly id: number,
        public readonly correoEncargado?: string,
        public readonly nombreEncargado?: string,
        public readonly telefonoEncargado?: number, 
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        if (this.correoEncargado) returnObj.correoEncargado = this.correoEncargado;
        if (this.nombreEncargado) returnObj.nombreEncargado = this.nombreEncargado;
        if (this.telefonoEncargado) returnObj.telefonoEncargado = this.telefonoEncargado;

        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateEncargadoDto?] {
        
        const {id, correoEncargado, nombreEncargado, telefonoEncargado} = props;
        let newCorreo = correoEncargado;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!correoEncargado && !nombreEncargado && !telefonoEncargado){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateEncargadoDto(id, correoEncargado,nombreEncargado,telefonoEncargado)]
    }
}