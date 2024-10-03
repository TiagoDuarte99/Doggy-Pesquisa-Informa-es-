# Doggy - Pesquisa de Informações Sobre Raças de Cães

**Doggy** é uma aplicação web que permite aos utilizadores pesquisarem informações sobre diferentes raças de cães. A aplicação obtém dados de raças a partir de uma API local e apresenta detalhes como temperamento, altura, peso e expectativa de vida.

## Funcionalidades
- Pesquisar raças de cães por nome.
- Ver informações detalhadas sobre cada raça, incluindo temperamento, propósito e atributos físicos.
- Navegação paginada para explorar as raças disponíveis.
- Design responsivo para uma experiência mobile-friendly.

## Estrutura do Projeto
- **index.html**: O arquivo HTML principal que estrutura a página web. Inclui os campos de pesquisa, botões e o container onde os detalhes das raças de cães são exibidos.
- **style.css**: A folha de estilos que define o layout e a aparência da aplicação, incluindo o cabeçalho, caixa de pesquisa, botões e a apresentação dos cartões das raças de cães.
- **index.js**: A lógica JavaScript que controla a funcionalidade de pesquisa, solicitações à API e paginação. Carrega dinamicamente os dados das raças e processa a entrada de pesquisa e navegação pelos resultados.
- **db.json**: Um banco de dados local contendo informações detalhadas sobre várias raças de cães, como nomes, pesos, alturas, temperamentos e imagens.

## Iniciar

### Pré-requisitos
Para executar este projeto localmente, certifique-se de ter o seguinte:
- Um servidor local funcional (pode usar `json-server` para simular a API).
- Navegador web moderno.

### Instalação

1. Clone este repositório para a sua máquina local:
   ```bash
   git clone https://github.com/your-repo-url/doggy.git
   
###Navegue até o diretório do projeto:
bash
Copiar código
cd doggy
Inicie o servidor local usando json-server:
   ```bash
   json-server --watch db.json --port 3000


###Executar a Aplicação
Abra o arquivo index.html no seu navegador web.
Utilize a barra de pesquisa para inserir o nome de uma raça de cão e clique no botão "Fetche!" para obter os dados sobre a raça.
Pode navegar pela lista de raças de cães usando os botões "Próximo" e "Anterior".
Funcionalidade de Pesquisa
Pode pesquisar raças de cães digitando um nome na barra de pesquisa.
Se uma raça for encontrada, informações detalhadas sobre essa raça serão exibidas.
Se a pesquisa não retornar resultados, uma mensagem de erro será exibida.
Tecnologias Utilizadas
HTML5 para a estruturação da página web.
CSS3 para o estilo da página e design responsivo.
JavaScript (ES6) para manipulação de interações do utilizador, chamadas à API e atualização dinâmica de conteúdo.
Bootstrap 5 para o design responsivo e componentes de UI.
FontAwesome para os ícones.
