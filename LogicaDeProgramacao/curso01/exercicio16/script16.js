
    function pulaLinha() {
        document.write("<br>");
    }

    function exibeTitulo(titulo) {
        document.write("<h1>" + titulo + "</h1>");
        pulaLinha();
    }

    function exibeParagrafo(paragrafo) {
        document.write("<p>" + paragrafo + "</p>");
        pulaLinha();
    }

    // pede para alguém ler daqui em diante e veja se ele entende o que esta sendo feito
    exibeTitulo("Bem-vindos");
    exibeParagrafo("Este é um simples programa");
