export class CreateCategoriaDto {
    private constructor (
        public readonly nombreCategoria: string,
        public readonly CategoriaPrincipal: string,
        public readonly librosId: number,
    ){}
    static create(props: {[key:string]: any}): [string?, CreateCategoriaDto?]{
        const { nombreCategoria, CategoriaPrincipal, librosId}= props;

        if (!nombreCategoria && !CategoriaPrincipal && !librosId) return ['Propiedades "nombreCategoria, CategoriaPrincipal, librosId" requeridas', undefined];

        return [undefined, new CreateCategoriaDto(nombreCategoria, CategoriaPrincipal, librosId)];
    }
}