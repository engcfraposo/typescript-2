class Planeta {
    constructor(nome, massa, diametro, distancia, velocidade, cor, idade) {
        this.nome = nome;
        this.massa = massa;
        this.diametro = diametro;
        this.distancia = distancia;
        this.velocidade = velocidade;
        this.cor = cor;
        this.idade = idade

        //Abstração
        // this.acelaracao = this.velocidade / (this.idade/365);
        //No caso foi tirado a responsabilidade do constructor de pegar a aceleração
        this.getAceleracao();
    }
    
    getAceleracao() {
        this.aceleracao = this.velocidade / (this.idade/365);
    }
}


let mercurio = new Planeta("Mercúrio", 3.3e+23, 2.439e6, 5.79e+11, 3.7e+4, "blue", 4.6e+6);
let venus = new Planeta("Vênus", 4.87e+24, 6.052e6, 1.082e+12, 3.4e+4, "green", 1.9e+7);


if(mercurio.massa > venus.massa) {
    console.log("Mercúrio é maior que Vênus");
}

if(mercurio.massa < venus.massa) {
    console.log("Vênus é maior que Mercúrio");
}

if(mercurio.massa == venus.massa) {
    console.log("Mercúrio e Vênus tem a mesma massa");
}

console.log(venus.aceleracao)