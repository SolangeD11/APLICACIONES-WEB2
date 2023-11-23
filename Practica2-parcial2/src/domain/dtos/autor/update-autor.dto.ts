export class UpdateAutorDto {
    private constructor(
        public readonly id: number,
        public readonly cedulautor?: string,
        public readonly nombreautor?: string,
        public readonly correoautor?: string,
        
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        if (this.cedulautor) returnObj.cedulautor = this.cedulautor;
        if (this.nombreautor) returnObj.nombreautor = this.nombreautor;
        if (this.correoautor) returnObj.correoautor = this.correoautor;

        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateAutorDto?] {
        
        const {id, cedulautor, nombreautor, correoautor} = props;
        let newCorreo = correoautor;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!cedulautor && !nombreautor && !correoautor ){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateAutorDto(id, cedulautor, nombreautor, correoautor)]
    }
}