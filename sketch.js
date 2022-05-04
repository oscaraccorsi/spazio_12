
let baseURLSound = 'https://oscaraccorsi.github.io/mp3_files/';

const vol = new Tone.Volume(0).toDestination();
let ruggito;


let baseURLBack = 'https://oscaraccorsi.github.io/backgrounds/';
let baseURLImage = 'https://oscaraccorsi.github.io/pictures/';
let logo;
let xLogo;

let back;
let backWidth;
let backHeight; 

let back2;
let back2Width;
let back2Height; 

let backX1 = 0;
let backX2 = 0;

let from, to;
let amount;
let index = 0.002;
let inter;



function preload() {
  ruggito = new Tone.Player(baseURLSound + "ruggito.mp3").toDestination();
  logo = loadImage(baseURLImage + 'good one white.png');
  back = loadImage(baseURLBack + '12.png');
  //back2 = loadImage(baseURLBack + '12.png');
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  ruggito.loop = true;
  ruggito.autostart = true;
  
  createCanvas(windowWidth, windowHeight);
  
  xLogo = windowWidth-25;
  
  backHeight = height;
  bac2kHeight = height;
  backWidth = windowWidth;
  back2Width = windowWidth;
  
//-----------------------------------------lerp  
  from = color(0, 0, 255);
  to = color(255, 0, 0);
  amount = 0;
  inter = lerpColor(from, to, amount);  
}

function draw() {
  colorFade();
  toRight();
  toLeft();
  
  
  
}

function toLeft() {
  tint(255, 255, 255, 75);
  image(back, backX1, 0, backWidth, backHeight);
  image(back, backX1 + backWidth, 0, backWidth, backHeight);
  
  backX1 -=1;
  if (backX1 < -backWidth) {
    backX1 = 0;  
  }
}

function toRight() {
  tint(255, 255, 255, 75);
  image(back, backX2, 0, backWidth, backHeight);
  image(back, backX2 - backWidth, 0, backWidth, backHeight);
  
  backX2 +=1;
  if (backX2 > backWidth) {
    backX2 = 0;  
  }
}

function colorFade() {
  inter = lerpColor(from, to, amount);
  background(inter);
  amount = amount +index;
  
  if (amount >= 1 || amount <= 0) {
  index = -index;
  }  
}

//----------------------------------------mousePressed
function mousePressed() {
  imageMode(CENTER);
  logo.resize(40, 0);
  tint(255, 255, 255);
  image(logo, xLogo, windowHeight-20);
  
  imageMode(CORNER);
  save();
  
  // clear(); 
}
