
  function pulaLinha() {
    document.write("<br>");
  }

  function mostra(frase) {
    document.write(frase);
    pulaLinha();
  }
  var idadeMediaQuandoTemFilhos = 28;
  var anoAtual = 2016;
  var quantidadeDeGeracoes = (anoAtual - 1500) / idadeMediaQuandoTemFilhos;
  mostra(quantidadeDeGeracoes);


//Em média, um casal tem filhos quando atinge a idade de 28 anos. Seguindo essa média, se os portugueses chegaram em 1500 no Brasil, então, a primeira geração de brasileiros surgiu em 1528, a segunda em 1556 e assim por diante. Desde 1500 até o ano atual, quantas gerações se passaram?

//Imprima esse número da seguinte maneira: calcule quantos anos passaram desde 1500 e divida o resultado pela média de 28 anos. -->