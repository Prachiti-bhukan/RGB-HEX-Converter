const readLineSync = require('readline-sync');
const welcomeNote = () =>
{
console.log("Welcome to RGB   \n\nWhat you wish to try\n1. RGB converter to Hex\n2. Hex to RGB\n\n");
}

const takeInput = () =>
{
  const userInput = readLineSync.question('Your Choice---> ');
  if(userInput==1)
  {
    
    const red = readLineSync.question('RED\n');
    const green = readLineSync.question('GREEN\n');
    const blue = readLineSync.question('BLUE\n');
    
    console.log(`Converts to ${rgbToHex(red,green,blue)}`);

  }

  else if(userInput==2)
  {
     
    const hexCode = readLineSync.question('Hex Code\n');
    
    console.log(hexToRgb(hexCode));
  }

}

function rgbToHex(red,green,blue)
{
   red = Number(red).toString(16);
  green = Number(green).toString(16);
  blue = Number(blue).toString(16);

  if (red.length == 1)
    red = "0" + r;
  if (green.length == 1)
    green = "0" + g;
  if (blue.length == 1)
    blue = "0" + b;

  return "#" + red + green + blue;
}

 
function hexToRgb(hexCode)
{
  const n="INVALId";
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexCode);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : console.log(n);

}

function driver()
{
  welcomeNote();
  takeInput();
}

driver();