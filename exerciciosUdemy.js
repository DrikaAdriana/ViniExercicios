//1) - Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
//função) e com ponto de exclamação "!" no final.
//Exemplos:

function cumprimetarPessoa(nomePessoa) {
  return `Olá ${nomePessoa}!`
}
console.log(cumprimetarPessoa('Adriana'));


//2) - Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
// Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
//desconsidere também dias decorridos desde o último aniversário.
//Exemplos:

function converterIdadeEmAnosParaDias (idade) {
    return idade * 365
}
converterIdadeEmAnosParaDias(25) // retornará 9125


//3) - Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
//funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
//X", em que X é o quanto o funcionário ganhou no mês.
//Exemplos:
function calcularSalario(quantHoras, valorHora) {
   return `Salário igual a R$ ${quantHoras * valorHora}`
}
console.log(calcularSalario(150, 40.5));// retornará "Salário igual a R$ 6075"


//4) - Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
//exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
//Exemplos:
function nomeDoMes(numeroMes) {
  switch(numeroMes) {
    case 1 : 
       return "janeiro";
    case 2 : 
       return "fevereiro";
    case 3 : 
       return "março";
    case 4 : 
       return "abril";
    case 5 : 
       return "maio"; 
    case 6 :
       return "junho";
    case 7 :  
       return "julho";    
    case 8 : 
       return "agosto"; 
    case 9 :  
       return "setembro";
    case 10 : 
       return "outubro";
    case 11 : 
       return "novembro";
    case 12 :
       return  "dezembro";
  }

}
nomeDoMes(1) // retornará "janeiro"

//EXEMPLO ABAIXO DA UDEMY ACHEI MUITO LEGAL NÃO CONHECIA
function receberNomeDoMes(numero) {
  const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
  'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  return mapeamento[--numero];
}
nomeDoMes(4) // retornará "abril"





//5) - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
//Exemplos:


function maiorOuIgual(primeiro, segundo) {
  if(typeof primeiro != typeof segundo) return false
  return primeiro >= segundo
}

maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true



/*6) - Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
Exemplos:*/




inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"



/*7) - Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
Exemplos: */
estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true




/*8) - Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:*/


function multiplicar(numeroA, numeroB) {
  let resultado = 0
  for(let i = 0; i < numeroB; i++)
  resultado += numeroA
  return resultado
}
multiplicar(5, 5) // retornará 25



/*9) - Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos: */
function repetir ( elemento, numDeRepeticoes) {
   return Array(numDeRepeticoes).fill(elemento);
}
//repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]




/*10) - Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:*/
function simboloMais (quantSimbolo) {
  let res = ''
  for(let i = 0; i< quantSimbolo; i++) {
    res += '+'
  }
  return res
}
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"



/*11) - Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
Exemplos:*/
function receberPrimeiroEUltimoElemento(elementos) {
  const primeiroElemento= elementos.shift()
  const ultimoElemento = elementos.pop()
  return [primeiroElemento, ultimoElemento]
}
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]




/*12) - Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.
Exemplos: */
function removerPropriedade (obj, propriedade) {
   let copia = Object.assign({}, obj);
   delete copia[propriedade]
   return copia
}
removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}



/*13) -  A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
removerPropriedade, você poderá usar a função Object.is(), por exemplo:
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo.
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:*/

function filtrarNumeros(lista) {
  return lista.filter(item => typeof item === "number")
}
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []






/*14) - Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
Exemplos:*/
objetoParaArray({
nome: "Maria",
profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
codigo: 11111,
preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]




/*15) - Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele
por 2 é zero.
Exemplos:*/
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]





/*16) - A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.
Exemplos:*/

function checarAnoBissexto(ano) {
   const divisivelPorQuatro = ano % 4 == 0
   const divisivelPorCem = ano % 100 == 0
   const divisivelPorQuatrocentos = ano % 400 == 0
   return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}
checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400






/*17) - Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:*/
function somarNumeros(numeros) {
   const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
   return soma
}
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60





/*18) - Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
Exemplos:*/
function despesasTotais(itens) {
   let total = 0
   for (let item of itens)
   total += item.preco
   return total
}
despesasTotais([
{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99
despesasTotais([
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89







/*19) - Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
💡 A média simples é o resultado da soma de todos os números dividido pela quantidade de números.
Exemplos:*/
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3







/*20) - Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.
Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2
Exemplos:*/
areaDoTriangulo(10, 15) // retornará 75.00
areaDoTriangulo(7, 9) // retornará 31.50
areaDoTriangulo(9.25, 13.1) // retornará 60.59








/*21) - Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:*/
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15







/*22) Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
Exemplos:*/
funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"




/*23) - Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
Considere que todas as palavras só são separadas por um espaço.
Exemplos:*/
contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5




/*24) - Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
Exemplos:*/
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1






/*25) - A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
Exemplos:*/
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []





/*26) - Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:*/
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"





/*27) - Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
Exemplo:*/
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
