export class CreateLibroDto {
    private constructor (
        public readonly ISBN: number,
        public readonly nombreLibro: string,
        public readonly anopublicacion: number,
        public readonly edicionLibro: string,
        public readonly clasificacionLibro: string,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateLibroDto?]{
        const { ISBN, nombreLibro, anopublicacion, edicionLibro, clasificacionLibro}= props;

        if (!ISBN && !nombreLibro && !anopublicacion && !edicionLibro && !clasificacionLibro) return ['Propiedad Email requerida', undefined];

        return [undefined, new CreateLibroDto(ISBN, nombreLibro, anopublicacion, edicionLibro, clasificacionLibro)];
    }
}