export class Cliente{

    constructor(
        public idcliente?: number,
        public primernombre?: string,
        public segundonombre?: string,
        public primerapellido?: string,
        public segundoapellido?: string,
        public documento?: number,
        public phone?: number,
        public direccion?: string,
        public email?: string,
        public datetimeCreated?: string
    ) {}
    
}