<template>
  <div class="p-5">
    <div class="text-2xl mb-4">Sobre</div>
    <div class="mb-5">
      <h2 class="text-xl mb-2">Jefferson Coelho</h2>
      <p class="mb-2">
        LinkedIn:
        <a
          href="https://www.linkedin.com/in/jefferson-coelho/"
          target="_blank"
          class="text-blue-500 underline"
          >Jefferson Coelho</a
        >
      </p>
      <p class="mb-2">
        GitHub:
        <a href="https://github.com/BioJJ" target="_blank" class="text-blue-500 underline">BioJJ</a>
      </p>
    </div>

    <div class="mb-5">
      <h3 class="text-lg font-semibold mb-2">Propósito do Desafio</h3>
      <p class="mb-2">
        Programador web front-end, o objetivo deste teste é desenvolver uma aplicação web utilizando
        Quasar 2, Vue 3 (Composition API com script setup), Vue-router, Pinia, Axios, LocalStorage
        (via plugin do Quasar) e Tailwind CSS, que consome a API do GIPHY e permite aos usuários
        visualizar e interagir com GIFs.
      </p>
      <p class="mb-2">
        A SGBR® Sistemas é uma empresa especializada em automação comercial, fornecendo soluções
        inovadoras em software para pequenas e médias empresas do Brasil. Fundada em 2010, a empresa
        desenvolveu o sistema SG Master, atuando em diversos segmentos, como comércios em geral,
        prestadores de serviços, bares, restaurantes, hotéis, transportadoras, pet shops, mercados,
        açougues, farmácias e drogarias. Oferecemos um atendimento diferenciado, 24 horas por dia, 7
        dias por semana.
      </p>
      <p class="mb-2">
        Com uma equipe especializada e humanizada, a empresa busca gerar satisfação e oportunidades
        aos seus parceiros e clientes, tendo como missão fornecer soluções inteligentes em automação
        comercial por meio de aplicativos tecnológicos e inovadores.
      </p>
      <p class="mb-2">
        A visão da SGBR é ser reconhecida pelos clientes e parceiros como a melhor opção tecnológica
        sustentável e facilitadora, pautada em valores como honra, ética, comprometimento,
        honestidade e confiança.
      </p>
      <p class="mb-2">
        Com um setor dedicado à qualidade e um suporte ágil e eficiente, a empresa busca
        constantemente evoluir e oferecer as melhores soluções para seus clientes.
      </p>
      <p class="mb-2">
        Site:
        <a href="https://sgbr.com.br" target="_blank" class="text-blue-500 underline">sgbr.com.br</a
        ><br />
        LinkedIn:
        <a
          href="https://www.linkedin.com/company/sgbrsistemas/"
          target="_blank"
          class="text-blue-500 underline"
          >SGBR Sistemas</a
        ><br />
        Instagram:
        <a
          href="https://www.instagram.com/sgbrsistemas/"
          target="_blank"
          class="text-blue-500 underline"
          >sgbrsistemas</a
        >
      </p>
    </div>

    <div class="mb-5">
      <h3 class="text-lg font-semibold mb-2">Projeto</h3>
      <h5 class="text-md font-semibold mb-2"># My Giphy App</h5>
      <p class="mb-2">
        Uma aplicação web que permite pesquisar e interagir com GIFs usando a API do GIPHY.
      </p>

      <h4 class="font-semibold mb-2">Tecnologias Utilizadas</h4>
      <ul class="list-disc ml-5 mb-2">
        <li>Quasar 2</li>
        <li>Vue 3 (Composition API)</li>
        <li>Vue Router</li>
        <li>Pinia</li>
        <li>Axios</li>
        <li>Tailwind CSS</li>
      </ul>

      <h4 class="font-semibold mb-2">Instalação</h4>
      <ol class="list-decimal ml-5 mb-2">
        <li>Clone o repositório</li>
        <pre class="bg-gray-100 p-2 rounded">
          <code>
            git clone https://github.com/BioJJ/my-giphy-app.git
          </code>
        </pre>
      </ol>

      <h4 class="font-semibold mb-2">Requisitos</h4>
      <ul class="list-disc ml-5">
        <li>
          Crie um login no painel de desenvolvedores do GIPHY através do link
          <a href="https://developers.giphy.com" target="_blank" class="text-blue-500 underline"
            >developers.giphy.com</a
          >
          e gere uma chave token para consumir as APIs deste provedor.
        </li>
        <li>
          Crie um projeto Quasar 2 utilizando Vue 3 com Composition API (script setup). Implemente
          uma navbar à esquerda, contendo os seguintes itens de menu: Home, Favoritos, Categorias,
          Sobre.
        </li>
        <li>
          Adote uma estrutura base do layout com um topbar contendo o logo da empresa e o nome do
          desenvolvedor.
        </li>
      </ul>
    </div>
  </div>
</template>
