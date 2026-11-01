Projeto Chat em Navegador

> Chat P2P/local via navegador inspirado no visual do Discord, sem necessidade de servidor central ou criação de contas.
---
# Idiomas / Languages / Idiomas
[![Português](https://img.shields.io/badge/Language-PT--BR-green.svg)](#) 
[![English](https://img.shields.io/badge/Language-EN-blue.svg)](./README.en.md) 
[![Español](https://img.shields.io/badge/Language-ES-yellow.svg)](./README.es.md)

---
#Sobre o Projeto
...
Qual é o objetivo?

O Projeto Chat é um chat simples para conversar com amigos e colegas direto entre computadores, enviando mensagens e imagens sem criar conta e sem um servidor guardando suas conversas. Nasceu como um projeto de estudo de redes e JavaScript, com visual inspirado no Discord.
Como funciona?

Você e seu amigo entram na mesma sala, com o mesmo nome e a mesma senha. Quem estiver na sala aparece na sua lista de contatos, e seu navegador abre uma conexão direta (WebRTC) com o dele. As mensagens e imagens vão direto de um para o outro. Servidores públicos só ajudam vocês a se encontrarem no começo. O histórico fica salvo no seu próprio navegador.
Passo a passo

    Combine com seu amigo um nome de sala e uma senha (por qualquer aplicativo).
    Clique em "+ Entrar numa sala" e digite o nome e a senha.
    Seu amigo faz o mesmo, com o mesmo nome e a mesma senha.
    Quando ele aparecer na lista com a bolinha verde, está online. Escolha o contato e converse.
    Use o clipe 📎 para enviar imagens. Clique com o botão direito em um contato para excluí-lo.

Bom saber

    Os dois precisam estar com a página aberta para trocar mensagens.
    Os contatos aparecem sozinhos, mas só para quem entrou na mesma sala com a mesma senha.
    O histórico fica salvo só neste navegador. Limpar os dados do site apaga tudo.
    Em redes muito restritas, ou com extensões que desligam o WebRTC, a conexão pode falhar. Se isso acontecer, aparece um aviso no topo da página.
    Se o contato não aparecer: confira se o nome e a senha da sala são exatamente iguais nos dois lados (maiúsculas contam), se os dois estão com a página aberta e se o topo mostra "Pronto para conversar". Abra o site pelo endereço do GitHub Pages, não pelo arquivo no computador.

Privacidade

As mensagens vão direto entre os navegadores, criptografadas, e não passam por um servidor. Os servidores públicos de apresentação conseguem ver que existe uma sala e os endereços de rede de quem conecta. Use uma senha que só vocês conhecem: quem souber o nome e a senha da sala entra nela.
