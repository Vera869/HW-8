//Задание 1
 
const people1 = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

people1.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  // a должно быть равным b
  return 0;
});
console.log(people1.sort());

//Задание 2

function isPositive(element) {

   return element >= 0;
}
function isMale(element) {

   return element.gender === 'male';
}
function filter(sourse, rule) {
   let array = [];

   sourse.map(item => {
      if (rule(item)) {
         array.push(item);
      }
   });

   return array;
}
   
console.log(filter([3, -4, 1, 9], isPositive));
   
const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];
   
console.log(filter(people, isMale));
   
//Задание 3

const timer = (deadline) => {
	let time = deadline;
	console.log(new Date());
	const interval = setInterval(() => {
		time -= 1;
		console.log(new Date());
	}, 1000);


	setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло')
  }, deadline * 1000)
};

timer(30);

//Задание 4

function delayForSecond(callback) {

   setTimeout(callback, 1000);
   callback();
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})


//Задание 5

function delayForSecond(cb) {
   setTimeout(() => {
       console.log('Прошла одна секунда');
           if(cb) { 	cb(); }

   }, 1000)
}

function sayHi (name) {
   console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(sayHi('Глеб'), setTimeout);
