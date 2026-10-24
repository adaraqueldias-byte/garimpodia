/* =====================================================================
   PRODUTOS DA PÁGINA AMAZON — garimpodia.com.br/amazon/
   É só este arquivo que você precisa editar para adicionar ou trocar ofertas.

   COMO ADICIONAR UM PRODUTO
   Copie o modelo abaixo, cole dentro da lista PRODUTOS e preencha:

   {
     nome: "Nome do produto",
     descricao: "Por que vale a pena, com as suas palavras (1 ou 2 frases).",
     categoria: "casa",          // uma das chaves de CATEGORIAS, abaixo
     link: "https://amzn.to/xxxxxxx",  // seu link OFICIAL do Amazon Associados
     imagem: ""                  // opcional (veja a regra abaixo)
   },

   REGRAS IMPORTANTES
   - link: use só o link gerado no painel do Amazon Associados ou na barra
     SiteStripe (começa com https://amzn.to/ ou https://www.amazon.com.br/).
     Links de outros sites são ignorados e o botão não aparece.
   - imagem: deixe "" para usar o ícone da categoria. Só coloque uma imagem
     se ela for SUA (foto que você tirou) ou se veio de um método permitido
     pelo Amazon Associados (por exemplo, o código de imagem do SiteStripe).
     Não copie imagens da página da Amazon.
   - Não coloque preço, desconto nem avaliação: eles mudam o tempo todo na
     Amazon e o programa não permite mostrar valores desatualizados.
   - Para tirar um produto, apague o bloco dele (das chaves { até a vírgula }).
   ===================================================================== */

const CATEGORIAS = {
  casa:       { nome: "Casa e cozinha", icone: "🏠" },
  beleza:     { nome: "Beleza",         icone: "💄" },
  tecnologia: { nome: "Tecnologia",     icone: "🎧" },
  kids:       { nome: "Kids",           icone: "🧸" },
  presentes:  { nome: "Presentes",      icone: "🎁" },
};

const PRODUTOS = [
  // Cole seus produtos aqui. Exemplo (apague as duas barras // para ativar):
  // {
  //   nome: "Nome do produto",
  //   descricao: "Uso no dia a dia e recomendo porque…",
  //   categoria: "casa",
  //   link: "https://amzn.to/SEU-LINK",
  //   imagem: ""
  // },
];
