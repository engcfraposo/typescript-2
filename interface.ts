interface Astro {
    tipoDeAstros: TipoDeAstros;
}


interface Planetas extends Astro {
    nome: string;
    massa: number;
    diametro: number;
    distancia: number;
    velocidade: number;
    cor: string;
    idade: number;
}

export enum TipoDeAstros {
    nebulosa = "nebulosa",
    esfera = "esfera",
    estrela = "estrela",
    planeta = "planeta",
    asteroide = "asteroide"
}

enum Acesso {
    adm,
    usuario,
    convidado,
}