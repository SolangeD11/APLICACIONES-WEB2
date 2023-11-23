export class UpdateGeneroDto {
    private constructor(
        public readonly id: number,
        public readonly generoliterario?: string,
        
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        if (this.generoliterario) returnObj.generoliterario = this.generoliterario;


        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateGeneroDto?] {
        
        const {id, generoliterario} = props;
        let newGeneroliterario = generoliterario;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!generoliterario ){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateGeneroDto(id, generoliterario)]
    }
}