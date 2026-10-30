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

Cada pessoa recebe um ID. Quando você conecta no ID de alguém, seu navegador abre uma conexão direta (WebRTC) com o dele. As mensagens e imagens vão direto de um para o outro. Um servidor público só ajuda os dois a se encontrarem no começo. O histórico fica salvo no seu próprio navegador.
Passo a passo

    Copie seu ID no topo da página e envie para o seu amigo (por qualquer aplicativo).
    Peça o ID dele e clique em "+ Conectar por ID".
    Cole o ID, dê um apelido (opcional) e confirme.
    Quando a bolinha do contato ficar verde, ele está online. Escolha o contato e converse.
    Use o clipe 📎 para enviar imagens. Clique com o botão direito em um contato para excluí-lo.

Bom saber

    Os dois precisam estar com a página aberta para trocar mensagens.
    Não existe descoberta automática de contatos. A troca de IDs faz esse papel.
    O histórico fica salvo só neste navegador. Limpar os dados do site apaga tudo.
    Em redes muito restritas a conexão pode falhar.

Privacidade

As mensagens não passam por servidor, mas o servidor de apresentação enxerga os IDs e os endereços de rede de quem conecta. Não compartilhe seu ID com quem você não conhece: quem tiver seu ID pode pedir para conversar (você sempre pode recusar).
