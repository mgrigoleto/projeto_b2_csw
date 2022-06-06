## JAVASCRIPT  
Informações sobre o código em JavaScript ordenadas por partes:<br><br>
- **[Linha 1 a 6]**<br> As funções "hideFilhos()" e "showFilhos()" servem para mostrar ou ocultar o campo que pergunta a quantidade de filhos.<br><br>
- **[Linha 9 a 15]**<br> Função do botão cancelar/apagar. Apaga os dados do local storage e reinicia a página.<br><br>
- **[Linha 18 a 74]**<br> Funcção do botão salvar. Pega as informações de todos os inputs e salva no local storage. A quantidade de filhos só é salva se o usuário tiver filhos, caso contrário é salvo em branco. O complemento do endereço é salvo em branco caso o usuário não preencha o campo. Uma mensagem de confirmação é exibida após a função ser executada.<br><br>
- **[Linha 79 a 86]**<br> verifySave(): Função que verifica se há um CPF registrado no local storage. Se há registro, o botão "Cancelar" passa a ser "Apagar" e o botão de "Editar" aparece na tela.<br><br>
- **[Linha 78]**<br> É chamada a função "verifySave()"<br><br>
- **[Linha 89 a 126]**<br> Função do botão editar. Pega os registros no local storage e os coloca nos seus respectivos campos.<br><br>
- **[Linha 115 a 125]**<br> Verifica no storage se a pessoa tem filhos ou não para mostrar a quantidade de filhos para edição.
