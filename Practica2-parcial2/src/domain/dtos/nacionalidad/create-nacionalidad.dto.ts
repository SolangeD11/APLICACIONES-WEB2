export class CreateNacionalidadDto {
    private constructor (
        public readonly nombrepais: string,
        public readonly nombreciudad: string,
        public readonly AutorId: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateNacionalidadDto?]{
        const { nombrepais, nombreciudad, AutorId }= props;

        if (!nombrepais && !nombreciudad && !AutorId) return ['Propiedades del nombrepais, nombreciudad y autorIdNa requeridos', undefined];

        return [undefined, new CreateNacionalidadDto (nombrepais, nombreciudad, AutorId)];
    }
}