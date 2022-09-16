
/*
1. Desenvolva um algoritmo que faz a leitura do ano atual e do ano de
nascimento de uma pessoa. Calcule a idade (não é necessário considerar o mês
em que a pessoa nasceu). Escrever uma mensagem que diga se ela poderá ou
não votar este ano , considerando que se sua idade for menor que 16 anos não
pode, se for maior ou igual a 16 anos pode votar.
*/

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const anoDeNascimento = prompt('Em que ano você nasceu?');

function calcularIdade(anoDeNascimento) {
   let idade = anoAtual - anoDeNascimento
   if (idade >= 16) {
     alert('Você já pode votar')
   } else {
     alert( 'Você ainda não pode votar')
   }
}   
console.log(calcularIdade(anoDeNascimento));


/*
2. Desenvolva um algoritmo que escreva uma mensagem com o conceito de um
aluno, dada a sua nota. O critério para conceitos é o seguinte:
nota inferiores a 3 conceito E
nota de 3 a 5 conceito D
notas 6 e 7 conceito C
notas 8 e 9 conceito B
nota 10 conceito A
*/

let notas = parseInt(prompt('Qual a nota do aluno?'));

function mostrarConceitoDoAluno(notas) {
  if(notas < 3) {
    console.log('Seu conceito de avaliação foi  E')
  }else if(notas >= 3 && notas <= 5) {
    console.log('Seu conceito de avaliação foi D')
  }else if(notas === 6 || notas === 7) {
    console.log('Seu conceito de avaliação foi C')
  }else if(notas === 8 || notas === 9) {
    console.log('Seu conceito de avaliação foi B')
  }else{
    console.log('Sei conceito de avaliação foi A')
  }
}
mostrarConceitoDoAluno(notas);


/*
3. Escreva um algoritmo que apresente uma lista com as opções A, B e C. Caso o
usuário digite a letra A, escreva a mensagem “Opção A digitada”. Caso o usuário
digite a letra B, escreva a mensagem “Opção B digitada”. Caso o usuário digite a
letra C, escreva a mensagem “Opção C digitada”. Caso o usuário digite qualquer
outro valor, deve ser apresentada a mensagem “Opção Inválida”.
*/


let letras= prompt('Digite a letra A, B ou C');

function mostrarConceitoDoAluno(letras) {
  if(letras === "A") {
    alert('Você digitou a letra A') 
    }else if(letras ==="B") {
      alert('Você digitou a letra B')
    }else if(letras === "C") {
      alert('Você digitou a letra C')
    }else{
      alert('opção inválida')
    }
}
mostrarConceitoDoAluno(letras);


/*
4. Escreva um algoritmo para representar o funcionamento de uma calculadora.
Primeiramente, leia dois números reais. Em seguida, apresente as opções: ‘1’ =
soma, ‘2’ = subtração, ‘3’ = multiplicação, ‘4’ = divisão. Conforme a opção
selecionada, realize o cálculo correspondente com os dois números lidos.
*/

let num1 = prompt('Digite um numero real')
let num2 = prompt('Digite outro numero real')
let tipoDeOperacao = parseInt(prompt('Escolha a operação desejada: \n Opção 1: Soma \n Opção 2: Subtração \n Opção 3: Multiplicação \n Opção 4: Divisão' ))
num1 = parseFloat((num1).replace(",","."))
num2 = parseFloat((num2).replace(",","."))

function calcularOperacao(num1, num2) {
  let resultado;
  switch (tipoDeOperacao) {
    case 1:
      resultado = num1 + num2;
      break;
    case 2:
      resultado = num1 - num2;
      break;
    case 3:
      resultado = num1 * num2;  
      break;
    case 4:  
      resultado = num1 / num2;
      break;
  }
  return resultado

}
calcularOperacao(num1,num2)


/*
5. Uma empresa abriu uma linha de crédito para os funcionários. O valor da
prestação não pode ultrapassar 30% do salário. Desenvolva um programa que
receba o salário, o valor do empréstimo e o número de prestações e informe
se o empréstimo pode ser concedido.
*/

let salario = prompt('Qual valor do salário?');
let valorEmprestimo = prompt('Qual valor do empréstimo?');
let quantasParcelas = prompt('Informe em quantas parcelas gostarias de fazer:');

function calcularEmprestimo( salario, valorEmprestimo, quantasParcelas) {
  let valordaParcela = valorEmprestimo/quantasParcelas 
  let prestacaoPercentual = (salario / 100) * 30
  if (valordaParcela <= prestacaoPercentual) {
    return alert('Ok empréstimo APROVADO')
  }else{
    return alert('Empréstimo NÃO APROVADO!! O valor da parcela ultrapassou 30% do seu salário');
  }
}
calcularEmprestimo(salario,valorEmprestimo,quantasParcelas);


/*
6. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
80Km/h, exiba uma mensagem dizendo que o usuário foi multado, e, exiba o valor
da multa, cobrando R$5,00 por cada Km acima da velocidade permitida. se o
valor for menor que 80km/h, exiba uma mensagem dizendo que o veículo está
dentro da velocidade permitida.
*/

let velocidade = prompt('Qual a velocidade do carro?');
let multa = 5
let velocidadePermitida = 80

function calcularVelocidade (velocidade) {
  let valorDaMulta 
  if (velocidade > velocidadePermitida) {
    valorDaMulta = (velocidade - velocidadePermitida) * multa
    return alert(`Você foi multado em R$ ${valorDaMulta} reais`)
  }else{
    return alert('Parabéns, veículo dentro da velocidade permitida! Boa Viagem!!')
  }
}
calcularVelocidade(velocidade);


/*
7. Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre quantos anos faltam para o alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.
*/

let data_atual = new Date();
let ano_Atual = data_atual.getFullYear();
let ano_nascimento = prompt('Em que ano você nasceu?');
let anosPosIdadeAlistamento;
let anosFaltantesParaAlistamento;
let IdadeParaAlistamento = 18;

function alistamentoMilitar(ano_Atual , ano_nascimento) {
  let idade = ano_Atual - ano_nascimento
  if (idade < IdadeParaAlistamento) {
    anosFaltantesParaAlistamento = IdadeParaAlistamento - idade
    return  alert(`Faltam ${anosFaltantesParaAlistamento} anos para você se alistar`)
  }else{
    anosPosIdadeAlistamento = idade - IdadeParaAlistamento
    return alert(`Já se passaram ${anosPosIdadeAlistamento} anos do seu alistamento`);
  }
}   
console.log(alistamentoMilitar(ano_Atual , ano_nascimento));


/*
8. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer
em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até
200Km e R$0.45 para viagens mais longas.
*/

let distancia = prompt('Quall distância você gostaria de percorrer?Em Km...')
let valorDokmAteDuzentos = 0.50
let viagemMaisLongas = 0.45

function calcularValorPassagem(distancia) {
  if(distancia <= 200) {
    return distancia * valorDokmAteDuzentos
  }else{
    return distancia * viagemMaisLongas
  }
}
calcularValorPassagem(distancia)


/*
9. Faça um programa que leia a largura e o comprimento de um terreno retangular,
calculando e mostrando a sua área em m². O programa também deve mostrar a
classificação desse terreno, de acordo com a lista abaixo:
- Abaixo de 100m² = TERRENO POPULAR
- Entre 100m² e 500m² = TERRENO MASTER
- Acima de 500m² = TERRENO VIP
*/

let largura = prompt('Qual a largura do terreno?');
let comprimento = prompt('Qual o comprimento do terreno?');


function calcularTerreno(largura, comprimento) {
let area = largura * comprimento
if (area < 100) {
  console.log('Terreno Popular')
  } else if (area >= 100 && area <= 500) {
    console.log('Terreno Master')
  } else {
    console.log('Terreno VIP')
  }
}
calcularTerreno(largura, comprimento)

/*
10.Desenvolva um programa que receba o nome e a temperatura corporal de uma
pessoa, e classifique, informando a classificação e mensagem, conforme a tabela:
Temperatura Classificação Mensagem
até 25,8 Hipotermia Consulte um médico
25,9 até 35,8 Baixa Agasalhe-se e observe
35,9 até 37,0 Normal Você está bem
37,1 até 37,5 Elevada Descanse um pouco
37,6 até 38,0 Febre ligeira Meça a temperatura regularmente e
descanse
38,1 até 38,5 Febre moderada Meça a temperatura regularmente e
consulte um médico se permanecer 1 dia.
38,6 até 39,5 Febre alta Consulte um médico.
39,6 até 42,0 Febre muito alta Dirija-se à um serviço de urgência médica
*/

let nome = prompt('Qual seu nome?');
let temperatura = prompt('Qual sua temperatura corporal?');
temperatura = parseFloat((temperatura).replace(",","."))

function verificarTemperatura(temperatura) {

  if(temperatura <= 25.8) {
    return ('Hipotermia Consulte um médico');
  } else if (temperatura >= 25.9 && temperatura <= 35.8) {
    return ('Temperatura baixa agasálhe-se e observe');
  } else if (temperatura >=35.9 && temperatura <= 37.0) {
    return ('Normal Você está bem');
  } else if (temperatura >= 3.,1 && temperatura <= 37.5) {
    return ('Elevada Descanse um pouco');
  } else if (temperatura >= 37.6 && temperatura <= 38.00) {
    return ('Febre ligeira , meça a temperatura regularmente e descanse');
  } else if (temperatura >= 38.1 && temperatura <= 38.5) {
    return ('Febre moderada Meça a temperatura regularmente consulte um médico se permanecer 1 dia');
  } else if (temperatura >= 38.6 && temperatura <= 39.5) {
    return ('Febre alta Consulte um médico');
  }else{
    return ('Febre muito alta Dirija-se à um serviço de urgência médica');
  }

}  
verificarTemperatura(temperatura);







