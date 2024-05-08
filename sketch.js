//boas vindas
console.log ('*APROVEITE O JOGO |||| APROVEITE O JOGO |||| APROVEITE O JOGO*     -EAE KAUE EU MEREÇO UM 10-');



//variáveis da Bola
let xBola = 330;
let yBola = 200;
let diametro = 25;
let raio = diametro /2;

//velocidade da Bola
let velocidadeXBola = 7;
let velocidadeYBola = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 8;
let alturaRaquete = 130;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let oponentePontos = 0;

//vairáveis do oponente
let xRaqueteOponente = 635;
let yRaqueteOponente = 150;
let velocidadeyOponente;

//sons do jogo
let raquetada;
let ponto;
let musica;

function preload(){
  musica = loadSound ("musica.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
}

function setup() {
  createCanvas(650, 400);
  musica.loop();
}

function draw() {
  background(0);
  mostraBola();
  movimentaBola();
  colisaoBola();
  Raquete(xRaquete, yRaquete);
  Raquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  //colisaoRaquete();
  movimentaRaqueteOponente();
  colisaoRaquete(xRaquete, yRaquete);
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  placar();
  marcarPonto();

}

function mostraBola(){
  fill(255);
    circle(xBola, yBola, diametro);
}

function movimentaBola(){
    xBola += velocidadeXBola;
    yBola += velocidadeYBola;
}

function colisaoBola(){
  if (xBola + raio > width ||
     xBola - raio < 0){
    velocidadeXBola *= -1;
  }
  if (yBola + raio > height ||
     yBola - raio < 0){
    velocidadeYBola *= -1;
  }
}

function Raquete(x, y){
  fill(255);
    rect(x, y, larguraRaquete, alturaRaquete)
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function colisaoRaquete(){
  if (xBola - raio < xRaquete + larguraRaquete && yBola - raio < yRaquete + alturaRaquete && yBola + raio > yRaquete){
    velocidadeXBola *= -1;
    raquetada.play();
  }
 
}

function colisaoRaquete(x, y){
  colidiu = 
  collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBola, yBola, raio);
  if (colidiu){
    velocidadeXBola *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function placar(){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(0, 255, 127);
  rect(280, 10, 40, 20);
  fill(0);
  text(meusPontos, 300, 27);
  fill(0, 255, 127);
  rect(370, 10, 40, 20);
  fill(0);
  text(oponentePontos, 390, 27);
  fill('white');
  text( 'EAE KAUE EU MEREÇO UM 10',350 , 50);
  text("*APROVEITE O JOGO*" , 350, 390);
}

function marcarPonto(){
  if (xBola > 635){
    meusPontos += 1;
    ponto.play();
  }
  if (xBola < 15){
    oponentePontos += 1;
    ponto.play();
  }
}





