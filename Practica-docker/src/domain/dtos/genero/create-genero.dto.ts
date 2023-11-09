export class CreateGeneroDto {
    private constructor (
        public readonly generoliterario: string,
        public readonly AutorId: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateGeneroDto?]{
        const {generoliterario, AutorId}= props;

        if (!generoliterario && !AutorId) return ['Propiedad del genero literario y el id del autor requeridos', undefined];

        return [undefined, new CreateGeneroDto(generoliterario, AutorId)];
    }
}