# Desafio-4

# Desafio 4: Dashboard de Indicadores Educacionais do Maranhão

![Banner do Projeto - Opcional, substitua por uma imagem do seu dashboard](https://via.placeholder.com/1200x400?text=Dashboard+de+Indicadores+Educacionais)

Este projeto é um dashboard interativo desenvolvido em HTML, CSS e JavaScript puro para visualização de indicadores educacionais específicos do estado do Maranhão. Ele oferece insights sobre o Índice de Desenvolvimento da Educação Básica (Ideb) e dados de Evasão Escolar, permitindo que os usuários filtrem as informações por ano e etapa de ensino.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estruturação do conteúdo da página.
* **CSS3:** Estilização e layout responsivo do dashboard.
* **JavaScript (ES6+):** Lógica interativa, manipulação do DOM e busca/filtragem dos dados.
* **Chart.js:** Biblioteca JavaScript para criação de gráficos dinâmicos e responsivos.

## ✨ Funcionalidades

O dashboard apresenta as seguintes funcionalidades principais:

* **Visualização do Ideb:**
    * Exibição do Ideb atual e meta projetada para o Maranhão.
    * Gráfico de barras e linha mostrando a evolução do Ideb ao longo dos anos, comparando o valor real com a meta.
    * Filtro por `Ano` e `Ciclo` (Anos Iniciais, Anos Finais, Ensino Médio).
* **Visualização de Evasão Escolar:**
    * Exibição de métricas como Escolas Afetadas, Taxa de Evasão Média e Alunos Evadidos.
    * Gráfico de barras e linha mostrando a evolução da Taxa de Evasão e Meta de Evasão ao longo dos anos.
    * Filtro por `Ano` e `Etapa` (Anos Iniciais, Anos Finais, Ensino Médio).
    * **Exportação de Dados:** Botão para exportar os dados filtrados em formato CSV.
* **Dados Locais:** Os dados para a evasão escolar são consumidos diretamente de um array JavaScript (`allEvasionData`) embutido no código, simulando uma "API pública" para fins de demonstração, focando exclusivamente no Maranhão.
* **Design Responsivo:** Layout adaptável para diferentes tamanhos de tela.

## 📦 Como Rodar o Projeto Localmente

Para visualizar e testar o dashboard em seu ambiente local, siga os passos abaixo:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/sarahrebecadev/Desafio-4.git](https://github.com/sarahrebecadev/Desafio-4.git)
    ```
2.  **Navegue até o Diretório do Projeto:**
    ```bash
    cd Desafio-4
    ```
3.  **Abra os Arquivos HTML:**
    * Abra `index.html` para acessar a página inicial de navegação.
    * A partir da página inicial, você poderá navegar para:
        * `idebma.html` (Dashboard Ideb)
        * `dashboard.html` (Dashboard Evasão Escolar)

    **Importante:** Para que o carregamento de arquivos CSS e JS e os dados (mesmo que embutidos) funcionem corretamente, é **altamente recomendável** que você sirva os arquivos através de um servidor local.

    **Opções para Servir Localmente:**

    * **Usando o VS Code com a extensão "Live Server":**
        1.  Instale a extensão "Live Server" no VS Code.
        2.  Clique com o botão direito no arquivo `index.html` (ou `idebma.html`/`dashboard.html`) e selecione "Open with Live Server".

            ```
        2.  Abra seu navegador e acesse `http://localhost:8000`.

## 📂 Estrutura do Projeto
Certo! Com base no nome do repositório sarahrebecadev/Desafio-4 e no contexto de um dashboard de dados educacionais (Ideb e Evasão Escolar para o Maranhão), vou criar um arquivo README.md completo e informativo para o seu projeto no GitHub.

Este README.md incluirá:

Título e Breve Descrição
Tecnologias Utilizadas
Funcionalidades
Como Rodar o Projeto Localmente
Estrutura do Projeto
Próximos Passos / Melhorias Futuras
Créditos / Agradecimentos
Licença
Markdown

# Desafio 4: Dashboard de Indicadores Educacionais do Maranhão

![Banner do Projeto - Opcional, substitua por uma imagem do seu dashboard](https://via.placeholder.com/1200x400?text=Dashboard+de+Indicadores+Educacionais)

Este projeto é um dashboard interativo desenvolvido em HTML, CSS e JavaScript puro para visualização de indicadores educacionais específicos do estado do Maranhão. Ele oferece insights sobre o Índice de Desenvolvimento da Educação Básica (Ideb) e dados de Evasão Escolar, permitindo que os usuários filtrem as informações por ano e etapa de ensino.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estruturação do conteúdo da página.
* **CSS3:** Estilização e layout responsivo do dashboard.
* **JavaScript (ES6+):** Lógica interativa, manipulação do DOM e busca/filtragem dos dados.
* **Chart.js:** Biblioteca JavaScript para criação de gráficos dinâmicos e responsivos.

## ✨ Funcionalidades

O dashboard apresenta as seguintes funcionalidades principais:

* **Visualização do Ideb:**
    * Exibição do Ideb atual e meta projetada para o Maranhão.
    * Gráfico de barras e linha mostrando a evolução do Ideb ao longo dos anos, comparando o valor real com a meta.
    * Filtro por `Ano` e `Ciclo` (Anos Iniciais, Anos Finais, Ensino Médio).
* **Visualização de Evasão Escolar:**
    * Exibição de métricas como Escolas Afetadas, Taxa de Evasão Média e Alunos Evadidos.
    * Gráfico de barras e linha mostrando a evolução da Taxa de Evasão e Meta de Evasão ao longo dos anos.
    * Filtro por `Ano` e `Etapa` (Anos Iniciais, Anos Finais, Ensino Médio).
    * **Exportação de Dados:** Botão para exportar os dados filtrados em formato CSV.
* **Dados Locais:** Os dados para a evasão escolar são consumidos diretamente de um array JavaScript (`allEvasionData`) embutido no código, simulando uma "API pública" para fins de demonstração, focando exclusivamente no Maranhão.
* **Design Responsivo:** Layout adaptável para diferentes tamanhos de tela.

## 📦 Como Rodar o Projeto Localmente

Para visualizar e testar o dashboard em seu ambiente local, siga os passos abaixo:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/sarahrebecadev/Desafio-4.git](https://github.com/sarahrebecadev/Desafio-4.git)
    ```
2.  **Navegue até o Diretório do Projeto:**
    ```bash
    cd Desafio-4
    ```
3.  **Abra os Arquivos HTML:**
    * Abra `index.html` para acessar a página inicial de navegação.
    * A partir da página inicial, você poderá navegar para:
        * `idebma.html` (Dashboard Ideb)
        * `dashboard.html` (Dashboard Evasão Escolar)

    **Importante:** Para que o carregamento de arquivos CSS e JS e os dados (mesmo que embutidos) funcionem corretamente, é **altamente recomendável** que você sirva os arquivos através de um servidor local.

    **Opções para Servir Localmente:**

    * **Usando o VS Code com a extensão "Live Server":**
        1.  Instale a extensão "Live Server" no VS Code.
        2.  Clique com o botão direito no arquivo `index.html` (ou `idebma.html`/`dashboard.html`) e selecione "Open with Live Server".
    * **Usando Python (se você tem Python instalado):**
        1.  No terminal, no diretório raiz do projeto, execute:
            ```bash
            python -m http.server
            ```
        2.  Abra seu navegador e acesse `http://localhost:8000`.

## 📂 Estrutura do Projeto

Desafio-4/
├── index.html          # Página inicial de navegação para os dashboards
├── idebma.html         # Dashboard específico para o Ideb (com API QEdu para Ideb)
├── dashboard.html      # Dashboard para Evasão Escolar (com dados embutidos no JS)
├── css/
│   ├── style.css       # Estilos da página inicial
│   └── dashboard.css   # Estilos comuns para os dashboards
└── JS/
├── ideb.js         # Lógica JavaScript para o dashboard Ideb
└── dashboard.js    # Lógica JavaScript para o dashboard de Evasão Escolar (com dados embutidos)

## 📈 Próximos Passos / Melhorias Futuras

* **Refatoração da Estrutura de Dados:** Para dados de evasão, considerar a criação de uma API backend simples (Node.js, Python Flask/Django, etc.) que sirva os dados do Maranhão a partir de um banco de dados real ou de arquivos processados do INEP/IBGE, tornando o projeto mais escalável e robusto.
* **Adicionar Mais Estados:** Implementar funcionalidade para selecionar outros estados, exigindo uma fonte de dados mais abrangente (API pública real ou backend).
* **Mais Indicadores:** Integrar outros indicadores educacionais (ex: Taxa de Aprovação, Distorção Idade-Série).
* **Melhorias de UI/UX:** Aprimorar a interface do usuário com mais interatividade, animações e talvez um design mais moderno.
* **Testes:** Implementar testes unitários e de integração para garantir a estabilidade do código.

## 🤝 Créditos

Este projeto foi desenvolvido pela Euquipe 1 como parte de um desafio de programação.



