var score = 0;

$('.tiles').on('click',"#oneRone", function($event){
  var response = prompt("This portugese soccer player won his fourth Ballon D'Or trophy in 2016?\n\n A. who is Cristiano Ronaldo\n B. who is Lionel Messi\n C. who is Neymar da Silva Santos Júnior\n D. who is Luka Modric");
  var answer = 'A'||'a';
  if(answer === response){
    score += parseInt(100);
    alert('CORRECT!');
  } else {
    score -= parseInt(100);
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#twoRone", function($event){
  var response = prompt('It takes this amount of players to field a soccer team?\n\n A. what is 10\n B. what is 9\n C. what is 11\n D. what is 12');
  var answer = 'C'||'c';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#threeRone", function($event){
  var response = prompt('This european country won the 2014 World Cup\n\n A. who is Spain\n B. who is Germany\n C. who is Holland\n D. who is France');
  var answer = 'B'||'b';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#fourRone", function($event){
  var response = prompt('How many years are between world cups?\n\n A. what is 6\n B. what is 3\n C. what is 2\n D. what is 4');
  var answer = 'D'||'d';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#fiveRone", function($event){
  var response = prompt('How many clubs play in the Eurpoean Premier League?\n\n A. what is 20\n B. what is 22\n C. what is 18\n D. what is 24');
  var answer = 'A'||'a';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});

$('.tiles').on('click',"#oneRtwo", function($event){
  var response = prompt('This famous actor won his first and only Oscar in the movie "The Revanent"?\n\n A. who is Leonardo Dicapri\n B. who is Denzel Washington\n C. who is Brad Pit\n D. who is Tom Hardy');
  var answer = 'A'||'a';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#twoRtwo", function($event){
  var response = prompt("This vocalist names her albums based off her age?\n\n A. who is Beyonce'\n B. who is Taylor Swift\n C. who is Lady Gaga\n D. who is Adele");
  var answer = 'D'||'d';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#threeRtwo", function($event){
  var response = prompt('This singer, actor, comedian and producer starred in the movie "Ray"?\n\n A. who is Morgan Freeman\n  B. who is Jamie Foxx\n C. who is Michael Jordan\n D. who is Samuel L Jackson');
  var answer = 'B'||'b';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#fourRtwo", function($event){
  var response = prompt('This actor was the original voice of Darth Vader?\n\n A. who is Morgan Freeman\n B. who is James Earl Jones C. who is Kevin Hart\n D. who is Matthew Atkins');
  var answer = 'B'||'b';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#fiveRtwo", function($event){
  var response = prompt('This actress stared in the movie The Devil Wears Prada?\n\n A. who is Meryl Streep\n B. who is Jada Pinkett Smith\n C. who is Uma Thurman\n D. who is Angelina Jolie');
  var answer = 'A'||'a';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});


$('.tiles').on('click',"#oneRthree", function($event){
  var response = prompt('On this day Japenese aircrafts attacked Pearl Harbor ?\n\n A. what is Decemeber 6, 1941\n B. what is October 30, 1941\n C. what is January 15, 1941\n D. what is Decemeber 7, 1941');
  var answer = 'D'||'d';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#twoRthree", function($event){
  var response = prompt('On this day America gained independence?\n\n A. what is July 4, 1775\n B. what is July 4, 1776\n C. what is July 4, 1777\n D. what is July 4, 1777');
var answer = 'B'||'b';
if(answer === response){
  alert('CORRECT!');
} else {
  alert("Sorry, that is not the right answer.");
}
});
$('.tiles').on('click',"#threeRthree", function($event){
  var response = prompt('This Atlanta native was known for being the leader of the Civil Rights Movement?\n\n A. who is Andre 3000\n B. who is Dwight Howard C. who is Big Boi \n D. who is Martin Luther King Jr.');
var answer = 'D'||'d';
if(answer === response){
  alert('CORRECT!');
} else {
  alert("Sorry, that is not the right answer.");
}
});
$('.tiles').on('click',"#fourRthree", function($event){
  var response = prompt('This President was the first to wear a full beard while in office?\n\n A. who is Franklin D. Roosevelt\n B. who is Ulysses S. Grant\n C. who is George Bush\n D. who is Abraham Lincoln');
var answer = 'D'||'d';
if(answer === response){
  alert('CORRECT!');
} else {
  alert("Sorry, that is not the right answer.");
}
});
$('.tiles').on('click',"#fiveRthree", function($event){
  var response = prompt('A man who after escaping slavery became a leader of the abolitionist movement through his orations and writings, including a narrative he wrote of his own life in slavery? \n\n A. who is Kunta Kinte\n B. who is George Washington Carver\n C. who is Fredrick Douglas\n D. who is Nat Turner');
  var answer = 'C'||'c';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});


$('.tiles').on('click',"#fiveRthree", function($event){
  var response = prompt('This male cat is know as the King of the Jungle? \n\n A. what is a Lion\n B. wha is a Tiger\n C. what is Leopard\n D. what is a Cheetah');
  var answer = 'A'||'a';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#fiveRthree", function($event){
  var response = prompt('A man who after escaping slavery became a leader of the abolitionist movement through his orations and writings, including a narrative he wrote of his own life in slavery? \n\n A. who is Kunta Kinte\n B. who is George Washington Carver\n C. who is Fredrick Douglas\n D. who is Nat Turner');
  var answer = 'C'||'c';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#fiveRthree", function($event){
  var response = prompt('A man who after escaping slavery became a leader of the abolitionist movement through his orations and writings, including a narrative he wrote of his own life in slavery? \n\n A. who is Kunta Kinte\n B. who is George Washington Carver\n C. who is Fredrick Douglas\n D. who is Nat Turner');
  var answer = 'C'||'c';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#fiveRthree", function($event){
  var response = prompt('A man who after escaping slavery became a leader of the abolitionist movement through his orations and writings, including a narrative he wrote of his own life in slavery? \n\n A. who is Kunta Kinte\n B. who is George Washington Carver\n C. who is Fredrick Douglas\n D. who is Nat Turner');
  var answer = 'C'||'c';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#fiveRthree", function($event){
  var response = prompt('A man who after escaping slavery became a leader of the abolitionist movement through his orations and writings, including a narrative he wrote of his own life in slavery? \n\n A. who is Kunta Kinte\n B. who is George Washington Carver\n C. who is Fredrick Douglas\n D. who is Nat Turner');
  var answer = 'C'||'c';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
