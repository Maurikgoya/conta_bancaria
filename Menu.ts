import readline = require("readline-sync");
import { colors } from "./scr/util/Colors";

export function main() {

    let opcao: number;

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

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da conta - por numero\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma conta\n\n", colors.reset);

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