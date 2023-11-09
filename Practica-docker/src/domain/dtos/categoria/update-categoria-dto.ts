export class UpdateCategoriaDto {
    private constructor(
        public readonly id: number,
        public readonly nombreCategoria: string,
        public readonly CategoriaPrincipal: string,
    ) {}

    get values(){
        const returnObj: {[key:string]: any}= {};

        if (this.nombreCategoria) returnObj.nombreCategoria = this.nombreCategoria;
        if (this.CategoriaPrincipal) returnObj.CategoriaPrincipal = this.CategoriaPrincipal;
        return returnObj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateCategoriaDto?] {
        
        const {id, nombreCategoria, CategoriaPrincipal, librosId} = props;
        let newnombreCategoria = nombreCategoria;

        if (!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }
        if (!nombreCategoria && !CategoriaPrincipal){
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateCategoriaDto(id, nombreCategoria, CategoriaPrincipal)]
    }
}