import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if (buscarConta != null) {
            buscarConta.visualizar();
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numero
                + " nao foi encontrada!", colors.reset);
    }

    listarTodas(): void {
        for (let Conta of this.listaContas) {
            Conta.visualizar();
        };
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nConta numero: " + conta.numero +
            " foi criada com sucesso!", colors.reset);
    }

    atualizar(conta: Conta): void {
        let buscarConta = this.buscarNoArray(conta.numero);

        if(buscarConta != null) {
            this.listaContas[this.listaContas.indexOf(buscarConta)] = conta;
            console.log(colors.fg.green, "\nA Conta numero: " + conta.numero +
"foi atualizada com sucesso!", colors.reset);
        }else 
            console.log(colors.fg.red, "\nA Conta numero: " + conta.numero +
                " nao foi encontrada!", colors.reset);
    }

    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    /*Métodos Auxiliares/

    /Gerar número da conta*/
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