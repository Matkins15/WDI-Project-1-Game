$('.tiles').on('click',"#oneRone", function($event){
  var response = prompt('Who is the best soccer player in the world?\n\n A. Ronaldo B. Messi C. Neymar D. Modric');
  var answer = 'A'||'a';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#twoRone", function($event){
  var response = prompt('How many players field a team?\n\n A. 10 B. 9 C. 11 D. 12');
  var answer = 'C'||'c';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#threeRone", function($event){
  var response = prompt('What country won the 2014 World Cup?\n\n A. Brazil B. Germany C. U.S D. France');
  var answer = 'B'||'b';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#fourRone", function($event){
  var response = prompt('How many years are between world cups?\n\n A. 6 B. 3 C. 2 D. 4');
  var answer = 'D'||'d';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
$('.tiles').on('click',"#fiveRone", function($event){
  var response = prompt('How many clubs play in the Eurpoean Premier League?\n\n A. 20 B. 22 C. 18 D. 24');
  var answer = 'A'||'a';
  if(answer === response){
    alert('CORRECT!');
  } else {
    alert("Sorry, that is not the right answer.");
  }
});
