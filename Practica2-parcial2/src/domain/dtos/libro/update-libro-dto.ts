export class UpdateLibroDto {
    private constructor(
        public readonly id: number,
        public readonly ISBN?: number,
        public readonly nombreLibro?: string,
        public readonly anopublicacion?: number,
        public readonly edicionLibro?: string,
        public readonly clasificacionLibro?: string,  
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        if (this.ISBN) returnObj.correoISBN = this.ISBN;
        if (this.nombreLibro) returnObj.nombreLibro = this.nombreLibro;
        if (this.anopublicacion) returnObj.anopublicacion = this.anopublicacion;
        if (this.edicionLibro) returnObj.edicionLibro = this.edicionLibro;
        if (this.clasificacionLibro) returnObj.clasificacionLibro = this.clasificacionLibro;

        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateLibroDto?] {
        
        const {id, ISBN, nombreLibro, anopublicacion, edicionLibro, clasificacionLibro} = props;
        let newISBN = ISBN;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!ISBN && !nombreLibro && !anopublicacion && !edicionLibro && !clasificacionLibro){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateLibroDto(id, ISBN, nombreLibro, anopublicacion, edicionLibro, clasificacionLibro)]
    }
}
