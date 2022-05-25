import { TipoDeAstros} from './interface';

class Astros {
    private tipoDeAstros: TipoDeAstros;
    constructor(tipoDeAstros: TipoDeAstros) {
        this.tipoDeAstros = tipoDeAstros;
    }
    getTipoDeAstros(): TipoDeAstros {
        return this.tipoDeAstros;
    }
}

class Planeta extends Astros {
    private nome: string
    private massa: number
    private diametro: number
    private distancia: number
    private velocidade: number
    private cor: string
    private idade: number
    private aceleracao: number
    
    constructor(
        nome: string, 
        massa: number, 
        diametro: number, 
        distancia: number, 
        velocidade: number, 
        cor: string, 
        idade: number, 
        aceleracao:number = 1
    ) {
        super(TipoDeAstros.planeta);

        this.nome = nome;
        this.massa = massa;
        this.diametro = diametro;
        this.distancia = distancia;
        this.velocidade = velocidade;
        this.cor = cor;
        this.idade = idade;
        this.aceleracao = aceleracao;
        this.setAceleracao();
    }

    public getNome(): string {
        return this.nome;
    }

    public getMassa(): number {
        return this.massa;
    }

    public getAceleracao(): number  {
        return this.aceleracao;
    }
    
    private setAceleracao() {
        this.aceleracao = this.velocidade / (this.idade/365);
    }
}


let mercurio = new Planeta("Mercúrio", 3.3e+23, 2.439e6, 5.79e+11, 3.7e+4, "blue", 4.6e+6);
let venus = new Planeta("Vênus", 4.87e+24, 6.052e6, 1.082e+12, 3.4e+4, "green", 1.9e+7);


if(mercurio.getMassa() > venus.getMassa()) {
    console.log("Mercúrio é maior que Vênus");
}

if(mercurio.getMassa() < venus.getMassa()) {
    console.log("Vênus é maior que Mercúrio");
}

if(mercurio.getMassa() == venus.getMassa()) {
    console.log("Mercúrio e Vênus tem a mesma massa");
}

console.log(venus.getAceleracao())
console.log(mercurio.getTipoDeAstros())