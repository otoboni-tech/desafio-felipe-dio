let heroNickname = "Inuyasha";
let heroXP = 500;
let heroLevel = "beginner";

  if (heroXP <= 1000){
    heroLevel = "Ferro";
  } else if (heroXP <= 2000){
    heroLevel = "Bronze";
  } else if (heroXP <= 5000){
    heroLevel = "Prata";
  } else if (heroXP <= 7000){
    heroLevel = "Ouro";
  } else if (heroXP <= 8000){
    heroLevel = "Platina";
  } else if (heroXP <= 9000){
    heroLevel = "Ascendente";
  } else if (heroXP <= 10000){
    heroLevel = "Imortal";
  }
  else {
    heroLevel = "Radiante";
  }


console.log("O Herói " + heroNickname + " está no nível " + heroLevel);