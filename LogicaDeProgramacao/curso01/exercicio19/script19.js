
    function pulaLinha() {
        document.write("<br><hr><br>");
    }

    function mostra(frase) {
        document.write("<big>" + frase + "</big>");
        pulaLinha();
    }

    var ano = 2019;
    mostra("Eu nasci em : " + (ano - 25));
    mostra("Adriano nasceu em : " + (ano - 26));
    mostra("Paulo nasceu em : " + (ano - 32));