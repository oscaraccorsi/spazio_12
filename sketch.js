let baseURLSound = 'https://oscaraccorsi.github.io/mp3_files/';

const vol = new Tone.Volume(0).toDestination();
let ruggito;


let baseURLBack = 'https://oscaraccorsi.github.io/backgrounds/';
let baseURLImage = 'https://oscaraccorsi.github.io/pictures/';
let logo;
let xLogo;
let img;
palette = [];



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
let index = 0.005;
let inter;
//-----------------------------------------------PRELOAD
function preload() {
  ruggito = new Tone.Player(baseURLSound + "ruggito.mp3").toDestination();
  logo = loadImage(baseURLImage + 'good one white.png');
  back = loadImage(baseURLBack + '12.png');
  img = loadImage(baseURLImage + 'schneider10.png');
  //back2 = loadImage(baseURLBack + '12.png');
}
//------------------------------------------------WINDOWRESEZED
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//--------------------------------------------------SETUP
function setup() {
  ruggito.loop = true;
  ruggito.autostart = true;
  
  createCanvas(windowWidth, windowHeight);
  
  img.resize(100, 200);
  img.loadPixels();
  
//-------------------------------------------------palette  
  for (let i=0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i]; 
    let g = img.pixels[i+1]; 
    let b = img.pixels[i+2]; 
    let c = color(r, g, b, 150);
    palette.push(c);    
  }
  
  xLogo = windowWidth-25;
  
  backHeight = height;
  bac2kHeight = height;
  backWidth = windowWidth;
  back2Width = windowWidth;
  
//-----------------------------------------lerp  
  from = random(palette);
  to = random(palette);
  amount = 0;
  inter = lerpColor(from, to, amount);  
}
//------------------------------------------DRAW
function draw() {
  colorFade();
  toRight();
  toLeft();  
}
//----------------------------------toLeft
function toLeft() {
  tint(255, 255, 255, 75);
  image(back, backX1, 0, backWidth, backHeight);
  image(back, backX1 + backWidth, 0, backWidth, backHeight);
  backX1 -=0.2;
  
  if (backX1 < -backWidth) {
    backX1 = 0;  
  }
}
//-----------------------------------toRight
function toRight() {
  tint(255, 255, 255, 90);
  image(back, backX2, 0, backWidth, backHeight);
  image(back, backX2 - backWidth, 0, backWidth, backHeight);
  backX2 +=0.2;
  
  if (backX2 > backWidth) {
    backX2 = 0;  
  }
}
//----------------------------------------colorFade
function colorFade() {
  inter = lerpColor(from, to, amount);
  background(inter);
  amount = amount +index;
  
  if (amount >= 1 || amount <= 0) {
  index = -index;
  } 
  if (amount >= 1-index) {
    from = random(palette);
  }
  if (amount <=  0 +index) {
     to = random(palette);
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
