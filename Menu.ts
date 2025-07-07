import readline = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

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
        console.log("                                                      ");

        console.log("Entre com a opção desejada: ");
        opcao = readline.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da conta - por numero\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDeposito\n\n");

                break;
            case 8:
                console.log("\n\nTransferencia entre contas\n\n");

                break;
            default:
                console.log("\nOpcao invalida!\n");

                break;
        }    
}

}

export function sobre(): void {
    console.log("\n******************************************************")
    console.log("Projeto desenvolvido por: ")
    console.log("Mauri Kendy Goya - kendy.goya@gmail.com")
    console.log("https://github.com/Maurikgoya")
    console.log("******************************************************")
}

main();