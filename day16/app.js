var input = require('fs').readFileSync('stdin', 'utf8');
var valores= input.split('\n')
const [x1, y1] = valores[0].split(' ') 
const [x2, y2] = valores[1].split(' ')
distancia  = Math.sqrt(((x2 - x1)**2)+((y2 - y1)**2)).toFixed(4)
console.log(distancia);