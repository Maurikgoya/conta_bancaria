import readline = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    // Instância da Classe ContaController
    let contas: ContaController = new ContaController;

    //Variáveis auxiliares
    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

    const contaCorrente: ContaCorrente = new ContaCorrente(2, 321, 1, "Luis", 10000, 1000);
    contaCorrente.visualizar();
    contaCorrente.sacar(1300);
    contaCorrente.visualizar();
    contaCorrente.depositar(225.40);
    contaCorrente.visualizar();

    const contaPoupanca: ContaPoupanca = new ContaPoupanca(3, 312, 2, "Luca", 1300, 7);
    contaPoupanca.visualizar();
    contaPoupanca.sacar(1300);
    contaPoupanca.visualizar();
    contaPoupanca.depositar(225.40);
    contaPoupanca.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow);
        console.log("******************************************************");
        console.log("                                                      ");
        console.log("                BANCO DO BRAZIL COM Z                 ");
        console.log("                                                      ");
        console.log("******************************************************");
        console.log("                                                      ");
        console.log("           1 - Criar conta                            ");
        console.log("           2 - Listar todas as contas                 ");
        console.log("           3 - Buscar Contapor numero                 ");
        console.log("           4 - Atualizar dados da conta               ");
        console.log("           5 - Apagar conta                           ");
        console.log("           6 - Sacar                                  ");
        console.log("           7 - Depositar                              ");
        console.log("           8 - Transferir valor entre as contas       ");
        console.log("           9 - Sair                                   ");
        console.log("                                                      ");
        console.log("******************************************************");
        console.log("                                                      ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readline.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar conta\n\n", colors.reset);

                console.log("Digite o numero da agencia: ");
                agencia = readline.questionInt("");

                console.log("Digite o Nome do titular da conta: ");
                titular = readline.question("");

                console.log("Digite o tipo da conta: ");
                tipo = readline.keyInSelect(tiposContas, "", { cancel: false }) + 1;

                console.log("Digite o saldo da conta (R$): ");
                saldo = readline.questionInt("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o limite da conta (R$): ");
                        limite = readline.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular,
                                saldo, limite));
                        break;
                    case 2:
                        console.log("Digite o dia do aniversario da Conta Poupanca: ");
                        aniversario = readline.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular,
                            saldo, aniversario));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as contas\n\n", colors.reset);

                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da conta - por numero\n\n", colors.reset);

                console.log("Digite o numero da conta: ");
                numero = readline.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da conta\n\n", colors.reset);
                console.log("Digite o numero da conta: ");
                numero = readline.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {

                    console.log("Digite o numero da Agencia: ");
                    agencia = readline.questionInt("");

                    console.log("Digite o nome do Titular da Conta: ")
                    titular = readline.question("");

                    tipo = conta.tipo;

                    console.log("\nDigite o saldo da conta (R$): ")
                    saldo = readline.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da conta(R$): ");
                            limite = readline.questionFloat("");
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o dia do aniversario da Conta Poupanca: ");
                            aniversario = readline.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo,
                                aniversario));
                            break;
                    }
                } else {
                    console.log(colors.fg.red, "\nA Conta numero " + numero + " nao foi encontrada!", colors.reset);
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma conta\n\n", colors.reset);

                console.log("\nDigite numero da conta: ")
                numero = readline.questionInt("");
                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDeposito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferencia entre contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpcao invalida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

export function sobre(): void {
    console.log("\n******************************************************");
    console.log("Projeto desenvolvido por: ");
    console.log("Mauri Kendy Goya - kendy1st.goya@gmail.com");
    console.log("https://github.com/Maurikgoya");
    console.log("******************************************************");
}

export function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readline.prompt();
}

main();