import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    public procurarPorNumero(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if (buscarConta != null) {
            buscarConta.visualizar();
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numero
                + " nao foi encontrada!", colors.reset);
    }

    public listarTodas(): void {
        for (let Conta of this.listaContas) {
            Conta.visualizar();
        }
    }

    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nConta numero: " + conta.numero +
            " foi criada com sucesso!", colors.reset);
    }

    public atualizar(conta: Conta): void {
        let buscarConta = this.buscarNoArray(conta.numero);

        if (buscarConta != null) {
            this.listaContas[this.listaContas.indexOf(buscarConta)] = conta;
            console.log(colors.fg.green, "\nA Conta numero: " + conta.numero +
                "foi atualizada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + conta.numero +
                " nao foi encontrada!", colors.reset);
    }

    public deletar(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if(buscarConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscarConta), 1);
            console.log(colors.fg.green, "\nA conta numero: " + numero + " foi apagada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA conta numero: " + numero + "nao foi encontrada!", colors.reset);
    }

    public sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {

            if (conta.sacar(valor) == true)
                console.log(colors.fg.green, "\nO Saque na Conta numero: " + numero +
                    " foi efetuado com sucesso!", colors.reset);

        } else {
            console.log(colors.fg.red, "\nA Conta numero: " + numero +
                " nao foi encontrada!", colors.reset);
        }
    }

    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log(colors.fg.green, "\nO deposito na Conta numero: " + numero +
                " foi efetuado com sucesso!", colors.reset);

        } else {
            console.log(colors.fg.red, "\nA Conta numero: " + numero +
                " nao foi encontrada!", colors.reset);
        }
    }

    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem && contaDestino != null) {
            if (contaOrigem.sacar(valor) == true) {
                contaDestino.depositar(valor);
                console.log(colors.fg.green, "\nA transferencia da Conta numero: " + numeroOrigem +
                    "para a conta" + numeroDestino + " foi efetuado com sucesso!", colors.reset);

            } else {
                console.log(colors.fg.red, "\nA Conta numero: " + numeroOrigem + "e/ou a conta numero: "
                    + numeroDestino + " nao foram encontradas!", colors.reset);
            }
        }
    }

    //Métodos Auxiliares

    //Gerar número da conta
    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }
}
