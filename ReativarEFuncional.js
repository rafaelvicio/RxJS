// Programação Imperativa
var list = [1,2,3,4,5,6,7,8,9,10];
var pares = [];

for(var i = 0; i < list.length; i++){
  if(list[i] % 2 === 0){
    pares.push(list[i]);
  }
}

console.log(pares);

// Programação Funcional

var list2 = [1,2,3,4,5,6,7,8,9,10];
var pares2 = list.filter(x => x % 2 === 0);

console.log(pares2);

// ELástico
// Resiliente
// Orientado a Mensagens
// Responsivo
