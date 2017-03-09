var score = parseInt(0);
function refreshScore(){
  $('.ticker').text(score);
}

$('.tiles').on('click',"#oneRone", function($event){
  var response = prompt("This portugese soccer player won his fourth Ballon D'Or trophy in 2016?\n\n A. who is Cristiano Ronaldo\n B. who is Lionel Messi\n C. who is Neymar da Silva Santos Júnior\n D. who is Luka Modric");
  response = response.toUpperCase();
  var answer = 'A';
  if(answer === response){
    score += parseInt(100);
    alert('CORRECT!');
  } else {
    score -= parseInt(100);
    alert("Sorry, that's incorrect");
  }
  $('#oneRone').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "color", "black");
  });
  refreshScore();
});


$('.tiles').on('click',"#twoRone", function($event){
  var response = prompt('It takes this amount of players to field a soccer team?\n\n A. what is 10\n B. what is 9\n C. what is 11\n D. what is 12');
  response = response.toUpperCase();
  var answer = 'C';
  if(answer === response){
    score += parseInt(200);
    alert('CORRECT!');
  } else {
    score -= parseInt(200);
    alert("Sorry, that's incorrect");
  }
  $('#twoRone').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#threeRone", function($event){
  var response = prompt('This european country won the 2014 World Cup\n\n A. who is Spain\n B. who is Germany\n C. who is Holland\n D. who is France');
  response = response.toUpperCase();
  var answer = 'B';
  if(answer === response){
    score += parseInt(300);
    alert('CORRECT!');
  } else {
    score -= parseInt(300);
    alert("Sorry, that's incorrect");
  }
  $('#threeRone').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#fourRone", function($event){
  var response = prompt('How many years are between world cups?\n\n A. what is 6\n B. what is 3\n C. what is 2\n D. what is 4');
  response = response.toUpperCase();
  var answer = 'D';
  if(answer === response){
    score += parseInt(400);
    alert('CORRECT!');
  } else {
    score -= parseInt(400);
    alert("Sorry, that's incorrect");
  }
  $('#fourRone').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#fiveRone", function($event){
  var response = prompt('How many clubs play in the Eurpoean Premier League?\n\n A. what is 20\n B. what is 22\n C. what is 18\n D. what is 24');
  response = response.toUpperCase();
  var answer = 'A';
  if(answer === response){
    alert('CORRECT!');
      score += parseInt(500);
  } else {
      score -= parseInt(500);
    alert("Sorry, that's incorrect");
  }
  $('#fiveRone').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#oneRtwo", function($event){
  var response = prompt('This famous actor won his first and only Oscar in the movie "The Revanent"?\n\n A. who is Leonardo Dicapri\n B. who is Denzel Washington\n C. who is Brad Pit\n D. who is Tom Hardy');
  response = response.toUpperCase();
  var answer = 'A';
  if(answer === response){
    alert('CORRECT!');
    score += parseInt(100);
  } else {
    score -= parseInt(100);
    alert("Sorry, that's incorrect");
  }
  $('#oneRtwo').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});
$('.tiles').on('click',"#twoRtwo", function($event){

  var response = prompt("This vocalist names her albums based off her age?\n\n A. who is Beyonce'\n B. who is Taylor Swift\n C. who is Lady Gaga\n D. who is Adele");
  response = response.toUpperCase();
  var answer = 'D';
  if(answer === response){
    score += parseInt(200);
    alert('CORRECT!');
  } else {
    score -= parseInt(200);
    alert("Sorry, that's incorrect");
  }
  $('#twoRtwo').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#threeRtwo", function($event){
  refreshScore();
  var response = prompt('This singer, actor, comedian and producer starred in the movie "Ray"?\n\n A. who is Morgan Freeman\n B. who is Jamie Foxx\n C. who is Michael Jordan\n D. who is Samuel L Jackson');
  response = response.toUpperCase();
  var answer = 'B';
  if(answer === response){
    score += parseInt(300);
    alert('CORRECT!');
  } else {
    score -= parseInt(300);
    alert("Sorry, that's incorrect");
  }
  $('#threeRtwo').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#fourRtwo", function($event){
  var response = prompt('This actor was the original voice of Darth Vader?\n\n A. who is Morgan Freeman\n B. who is James Earl Jones\n C. who is Kevin Hart\n D. who is Matthew Atkins');
  response = response.toUpperCase();
  var answer = 'B';
  if(answer === response){
    score += parseInt(400);
    alert('CORRECT!');
  } else {
    score -= parseInt(400);
    alert("Sorry, that's incorrect");
  }
  $('#fourRtwo').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#fiveRtwo", function($event){
  var response = prompt('This actress stared in the movie The Devil Wears Prada?\n\n A. who is Meryl Streep\n B. who is Jada Pinkett Smith\n C. who is Uma Thurman\n D. who is Angelina Jolie');
  response = response.toUpperCase();
  var answer = 'A';
  if(answer === response){
    alert('CORRECT!');
    score += parseInt(500);
  } else {
    score -= parseInt(500);
    alert("Sorry, that's incorrect");
  }
  $('#fiveRtwo').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});


$('.tiles').on('click',"#oneRthree", function($event){
  var response = prompt('On this day Japenese aircrafts attacked Pearl Harbor ?\n\n A. what is Decemeber 6, 1941\n B. what is October 30, 1941\n C. what is January 15, 1941\n D. what is Decemeber 7, 1941');
  response = response.toUpperCase();
  var answer = 'D';
  if(answer === response){
    score += parseInt(100);
    alert('CORRECT!');
  } else {
    score -= parseInt(100);
    alert("Sorry, that's incorrect");
  }
  $('#oneRthree').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#twoRthree", function($event){
  var response = prompt('On this day America gained independence?\n\n A. what is July 4, 1775\n B. what is July 4, 1776\n C. what is July 4, 1777\n D. what is July 4, 1777');
  response = response.toUpperCase();
  var answer = 'B';
  if(answer === response){
    score += parseInt(200);
    alert('CORRECT!');
  } else {
    score -= parseInt(200);
    alert("Sorry, that's incorrect");
}
$('#twoRthree').on('click',function() {
    $(this).prop("disabled",true);
    $(this).css("background-color", "black");
});
  refreshScore();
});

$('.tiles').on('click',"#threeRthree", function($event){
  var response = prompt('This Atlanta native was known for being the leader of the Civil Rights Movement?\n\n A. who is Andre 3000\n B. who is Dwight Howard\n C. who is Big Boi\n D. who is Martin Luther King Jr.');
  response = response.toUpperCase();
  var answer = 'D';
  if(answer === response){
    score += parseInt(300);
    alert('CORRECT!');
  } else {
    score -= parseInt(300);
    alert("Sorry, that's incorrect");
  }
  $('#threeRthree').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#fourRthree", function($event){
  var response = prompt('This President was the first to wear a full beard while in office?\n\n A. who is Franklin D. Roosevelt\n B. who is Ulysses S. Grant\nC. who is George Bush\n D. who is Abraham Lincoln');
  response = response.toUpperCase();
  var answer = 'D';
  if(answer === response){
    score += parseInt(400);
    alert('CORRECT!');
  } else {
    score -= parseInt(400);
    alert("Sorry, that's incorrect");
  }
  $('#fourRthree').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#fiveRthree", function($event){
  var response = prompt('A man who after escaping slavery became a leader of the abolitionist movement through his orations and writings, including a narrative he wrote of his own life in slavery? \n\n A. who is Kunta Kinte\nB. who is George Washington Carver\nC. who is Fredrick Douglas\nD. who is Nat Turner');
  response = response.toUpperCase();
  var answer = 'C';
  if(answer === response){
    score += parseInt(500);
    alert('CORRECT!');
  } else {
    score -= parseInt(500);
    alert("Sorry, that's incorrect");
  }
  $('#fiveRthree').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});


$('.tiles').on('click',"#oneRfour", function($event){
  var response = prompt('This shark, also known as the white pointer, white shark, or white death?\n\n A. what is the Great White Shark\n B. what is the Tiger shark\n C. what is a Sperm Whale Shark\n D. what is a Hammer Shark');
  response = response.toUpperCase();
  var answer = 'A';
  if(answer === response){
    score += parseInt(100);
    alert('CORRECT!');
  } else {
    score -= parseInt(100);
    alert("Sorry, that's incorrect");
  }
  $('#oneRfour').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#twoRfour", function($event){
  var response = prompt('This male cat is know as the King of the Jungle?\n\n A. what is a Lion\n B. wha is a Tiger\n C. what is Leopard\n D. what is a Cheetah');
  response = response.toUpperCase();
  var answer = 'A';
  if(answer === response){
    score += parseInt(200);
    alert('CORRECT!');
  } else {
    score -= parseInt(200);
    alert("Sorry, that's incorrect");
  }
  $('#twoRfour').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#threeRfour", function($event){
  var response = prompt('This animal is the tallest living terrestrial animals and the largest ruminants?\n\n A. what is a Blue Whale\n B. what is a Giraffe\n C. what is a Bush Elephant\n D. what is a Elephant Seal');
  response = response.toUpperCase();
  var answer = 'B';
  if(answer === response){
    score += parseInt(300);
    alert('CORRECT!');
  } else {
    score -= parseInt(300);
    alert("Sorry, that's incorrect");
  }
  $('#threeRfour').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#fourRfour", function($event){
  var response = prompt('This American bear is less commonly known as the Silvertip Bear?\n\nA. what is a Black Bear\n B. what is a Brown Bear\n C. what is a Polar Bear\n D. what is a Grizzley Bear');
  response = response.toUpperCase();
  var answer = 'D';
  if(answer === response){
    score += parseInt(400);
    alert('CORRECT!');
  } else {
    score -= parseInt(400);
    alert("Sorry, that's incorrect");
  }
  $('#fourRfour').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#fiveRfour", function($event){
  var response = prompt('These animals are large mammals of the family Elephantidae?\n\n A. what are Rhinos\n B. what are Elephants\n C. what are Giraffes\n D. what are Bears');
  response = response.toUpperCase();
  var answer = 'B';
  if(answer === response){
    score += parseInt(500);
    alert('CORRECT!');
  } else {
    score -= parseInt(500);
    alert("Sorry, that's incorrect");
  }
  $('#fiveRfour').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});


$('.tiles').on('click',"#oneRfive", function($event){
  var response = prompt('This Levantine and Egyptian food dip or spread is made from cooked, mashed chickpeas or other beans, blended with tahini, olive oil, lemon juice, salt and garlic? \n\nA. what is mashed beans\n B. what is Hummus\n C. what is Baba Ganoush\nD. what is Bean Dip');
  response = response.toUpperCase();
  var answer = 'B';
  if(answer === response){
    score += parseInt(100);
    alert('CORRECT!');
  } else {
    score -= parseInt(100);
    alert("Sorry, that's incorrect");
  }
  $('#oneRfive').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});
$('.tiles').on('click',"#twoRfive", function($event){
  var response = prompt('This dish is a yeasted flatbread generally topped with tomato sauce and cheese and baked in an oven? \n\n A. what are pancakes\n B. what are waffles\n C. what is Pizza\n D. what is a Baked Potato');
  response = response.toUpperCase();
  var answer = 'C';
  if(answer === response){
    score += parseInt(200);
    alert('CORRECT!');
  } else {
    score -= parseInt(200);
    alert("Sorry, that's incorrect");
  }
  $('#twoRfive').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#threeRfive", function($event){
  var response = prompt('This snack food dish fromnorthern Mexico is composed of chips and melted cheese, and is often served as a snack? \n\n A. what are Nachos\n B. what are Epinadas\n C. what is a Chupalla\n D. what is a Taco');
  response = response.toUpperCase();
  var answer = 'A';
  if(answer === response){
    score += parseInt(300);
    alert('CORRECT!');
  } else {
    score -= parseInt(300);
    alert("Sorry, that's incorrect");
  }
  $('#threeRfive').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#fourRfive", function($event){
  var response = prompt('This U.S. favorie is a meat generally sliced perpendicular to the muscle fibers, potentially including a bone? \n\n A. what is Chicken\n B. what is Ham\n C. what is Lamb\n D. what is Steak');
  response = response.toUpperCase();
  var answer = 'D';
  if(answer === response){
    score += parseInt(400);
    alert('CORRECT!');
  } else {
    score -= parseInt(400);
    alert("Sorry, that's incorrect");
  }
  $('#fourRfive').on('click',function() {
      $(this).prop("disabled",true);
      $(this).css("background-color", "black");
  });
  refreshScore();
});

$('.tiles').on('click',"#fiveRfive", function($event){
  var response = prompt('What country is known for creating the French Fry? \n\n A. what is France\n B. what is Germany\n C. what is England\n D. what is Belgium');
  response = response.toUpperCase();
  var answer = 'D';
  if(answer === response){
    score += parseInt(500);
    alert('CORRECT!');
  } else {
    score -= parseInt(500);
    alert("Sorry, that's incorrect");
  }
  $('#fiveRfive').on('click',function() {
      $(this).prop("disabled",true);
      
  });
  refreshScore();
});
