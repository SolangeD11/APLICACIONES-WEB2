export class CreateTraduccionIdiomaDto {
    private constructor (
        
        public readonly numerotraduccion: number,
        public readonly nombretraduccion: string,
        public readonly ididioma: number,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateTraduccionIdiomaDto?]{
        const { numerotraduccion, nombretraduccion, ididioma}= props;

        if ( !numerotraduccion && !nombretraduccion && !ididioma) return ['Propiedades del numerotraduccion, nombretraduccion y ididioma requerida', undefined];

        return [undefined, new CreateTraduccionIdiomaDto(numerotraduccion, nombretraduccion, ididioma)];
    }
}