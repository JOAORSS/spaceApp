# Space App

Aplicativo web desenvolvido com React e Vite para exibição de imagens espaciais, com navegação intuitiva, galeria, destaques, tags e modal de zoom. O projeto utiliza componentes reutilizáveis e estilização global.

## Funcionalidades

- Visualização de imagens em destaque
- Galeria de imagens populares e recentes
- Filtro por tags
- Modal para zoom nas imagens
- Barra lateral de navegação
- Campo de busca
- Rodapé informativo

## Estrutura de Pastas

```
public/
  icon/         # Ícones de navegação
  images/       # Imagens do app, galeria e populares
src/
  App.jsx       # Componente principal
  main.jsx      # Ponto de entrada
  components/   # Componentes reutilizáveis
    BarraLateral/
    Cabecalho/
    campoTexto/
    Destaque/
    EstilosGlobais/
    Footer/
    Galeria/
    ModalZoom/
    Tags/
    Titulo/
  db.json       # Base de dados local
```

## Instalação

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Tecnologias Utilizadas

- React
- Vite
- JavaScript (ES6+)
- CSS Modules

## Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera a versão de produção
- `npm run preview` — Visualiza o build localmente

## Personalização

- Adicione novas imagens em `public/images/galeria` ou `public/images/popular`
- Edite os ícones em `public/icon`
- Modifique estilos globais em `src/components/EstilosGlobais`

## Licença

Este projeto está sob licença MIT.
