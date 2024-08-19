//? imc < 16 = magreza grave (Grau III)
//? 16 <= imc < 17 = magreza moderada (Grau II)
//? 17 <= imc < 18.5 = magreza leve (Grau I)
//? 18,5 <= IMC < 25 = peso normal
//? 25 <= IMC < 30 = sobrepeso
//? 30 <= IMC < 35 = obesidade (Grau I)
//? 35 <= IMC < 40 = obesidade severa (Grau II)
//? IMC >= 40 = obesidade mórbida (Grau III)

function calcular() {
  const nome = document.getElementById("name").value;
  const peso = parseFloat(document.getElementById("weight").value).toFixed(2);
  const altura = parseFloat(document.getElementById("height").value).toFixed(2);
  const imc = (peso / (altura * altura)).toFixed(2);
  const pesoMin = Math.ceil(altura * altura * 18.5 * 10) / 10;
  const pesoMax = Math.ceil(altura * altura * 24.9 * 10) / 10;
  const pesoMinFormatado = pesoMin.toLocaleString('pt-BR');
const pesoMaxFormatado = pesoMax.toLocaleString('pt-BR');
  let resultado = "";

  if (imc < 16) {
    resultado = `Cuidado ${nome}! Seu IMC é <span style="color: #FF0000">${imc}</span>, você está com magreza grave (grau III).`;
  } else if (imc >= 16 && imc < 17) {
    resultado = `Atenção ${nome}! Seu IMC é <span style="color: #FF0000">${imc}</span>, você está com magreza moderada (grau II).`;
  } else if (imc >= 17 && imc < 18.5) {
    resultado = `Atenção ${nome}! Seu IMC é <span style="color: #FFFF00">${imc}</span>, você está com magreza leve (grau I).`;
  } else if (imc >= 18.5 && imc < 25) {
    resultado = `Parabéns ${nome}! Seu IMC é <span style="color: #00bfa6">${imc}</span>, você está com peso normal.`;
  } else if (imc >= 25 && imc < 30) {
    resultado = `Atenção ${nome}! Seu IMC é <span style="color: #FFFF00">${imc}</span>, você está com sobrepeso.`;
    const faltaParaPesoIdeal = peso - pesoMax;
    resultado += ` Você precisa perder ${faltaParaPesoIdeal.toFixed(2)}kg para alcançar o peso ideal.`;
  } else if (imc >= 30 && imc < 35) {
    resultado = `Atenção ${nome}! Seu IMC é <span style="color: #FF0000">${imc}</span>, você está com obesidade (grau I).`;
    const faltaParaPesoIdeal = peso - pesoMax;
    resultado += ` Você precisa perder ${faltaParaPesoIdeal.toFixed(2)}kg para alcançar o peso ideal.`;
  } else if (imc >= 35 && imc < 40) {
    resultado = `Atenção ${nome}! Seu IMC é <span style="color: #FF0000">${imc}</span>, você está com obesidade severa (grau II).`;
    const faltaParaPesoIdeal = peso - pesoMax;
    resultado += ` Você precisa perder ${faltaParaPesoIdeal.toFixed(2)}kg para alcançar o peso ideal.`;
  } else {
    resultado = `Atenção ${nome}! Seu IMC é <span style="color: #FF0000">${imc}</span>, você está com obesidade mórbida (grau III).`;
    const faltaParaPesoIdeal = peso - pesoMax;
    resultado += ` Você precisa perder ${faltaParaPesoIdeal.toFixed(2)}kg para alcançar o peso ideal.`;
  }

  if (imc < 18.5) {
    const faltaParaPesoIdeal = pesoMin - peso;
    resultado += ` Você precisa ganhar ${faltaParaPesoIdeal.toFixed(2)}kg para alcançar o peso ideal.`;
  }
  document.getElementById("resultado").innerHTML = resultado;
  document.getElementById(
    "sugestao"
  ).innerHTML = `Para a sua altura, o peso ideal é entre ${pesoMinFormatado}kg e ${pesoMaxFormatado}kg.`;
}
