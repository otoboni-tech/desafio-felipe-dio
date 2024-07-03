let vitorias = 76;
let derrotas = 8;
let saldo = vitorias - derrotas;

function calculoRaked(vitorias,derrotas){
let nivel;
    
  if (saldo <= 10){
    nivel = "Ferro";
  } else if (saldo <= 20){
    nivel = "Bronze";
  } else if (saldo <= 50){
    nivel = "Prata";
  } else if (saldo <= 80){
    nivel = "Ouro";
  } else if (saldo <= 90){
    nivel = "Diamante";
  } else if (saldo <= 100){
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return { saldo,nivel };
}

const resultado = calculoRaked(vitorias,derrotas);

console.log("O Herói tem saldo de " + resultado.saldo + " e está no nível " + resultado.nivel)