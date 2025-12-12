// NOME_FUNCAO(): TIPO_RETORNO {}

const asdf = 0
let sasdfsadf = 1234

// public -> é visivel dentro e fora da classe, desde que seja pela instancia da classe
// protected -> é visivel dentro da classe e pelas classes filhas (herança)
// private -> é visivel apenas dentro da própria classeg

class Conta {
    private meuNumero: number = 0; // atributo do tipo number

    setNumero(numeroParam: number) {    // setter serve para reatribuir valor a um atributo
        this.meuNumero = numeroParam;   // que neste caso é 'meuNumero'(atributo)
    }

    getNumero(): number {        // getter serve para retornar o valor de um atributo
        return this.meuNumero;
    }
    
}

const conta1 = new Conta();

console.log(conta1.getNumero());  // 0 (valor inicial)
conta1.setNumero(1234)       // chama o setter
console.log(conta1.getNumero());  // 12345 (getter retorna o valor)
