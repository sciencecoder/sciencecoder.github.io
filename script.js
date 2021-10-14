
console.log("javascript is running")
document.getElementById('currentYear').textContent = new Date().getFullYear();




// $(window).scroll(function() {
//   console.log($(this).scrollTop())
//   if ($(this).scrollTop() > 0) {
   
//     $('.a').fadeOut();
//   } else {
//     $('.a').fadeIn();
//   }
// });

// const n = document.getElementById('n');

// const getRandomCharacter = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// const generate = (limit, min, max) => {
//   let charactersList = [];

//   do {
//     charactersList.push(String.fromCharCode(getRandomCharacter(min, max)));
//   } while (--limit);

//   return charactersList.join('');
// };

// setInterval(() => {
//   let initial = n.getAttribute('data-initial');
//   let len = initial.length;

//   for (let i = 0; i < 100; i++) {
//     setTimeout(() => {
//       let gen = generate(len, 48, 57);
//       n.innerText = gen;
//       document.title = gen;
//     }, i * 10);
//   }

//   setTimeout(() => {
//     n.innerText = initial;
//     document.title = initial;
//   }, 1000);
// }, 5000);

