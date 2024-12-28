
const players = ['Wes','Sarah','Ryan','Poppy'];

const team = players;

console.log(players,team);
team[3] = 'Lux';
console.log(players,team);
//Luz cambia en team y a su vez cambia en players
//para no cambiar la referencia original hay que hacer un slice
const team2 = players.slice(); //team add lux

//ES6 Spread crea un array y agrega todo lo de players
const team3 = [...players];

//OBJECTS

const person = {
    name: 'Wes Bos',
    age: 80
};

//copiar person en un objeto vacio y podemos almacenar mas datos sin alteral el original
const cap2 = Object.assign({},person,{
    Number:99,
    age:12
});

console.log(person,cap2);

//copiar el objeto 2
const dev = Object.assign({},person);