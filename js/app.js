
let seconds = 0;
let timer;
let pet;


class Tomagotchi {
    constructor(name, eyeColor){
        this.legs = 4;
        this.age = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.name = name;
        this.eyeColor = eyeColor
    }
    greet (){
        console.log('Hi Person!')
    }
}

const startGame = () => {
    const nameIt = prompt("Name your Tomagotchi to begin!");
    pet = new Tomagotchi(nameIt, 'color');
    $('.start').remove();
    console.log(pet)
}

const showTomagotchi = () => {
    const $section = $('<section/>').addClass('gameImage');
    $('body').append($section);
    $section.append('<img src = "images/Agum.png">')
}

const generateButtons = () => {
    const $div = $('<div/>').addClass('controls');
    const $button1 = $('<button class = feed/>');
    const $button2 = $('<button class = play/>');
    const $button3 = $('<button class = sleep/>');

    $('body').append($div);

    $div.append($button1);
    $button1.text('feed your pet');
    $div.append($button2);
    $button2.text('play with your pet');
    $div.append($button3);
    $button3.text('turn off the lights')
}

const createScoreboard = () => {
    const $aging = pet.age;
    const $hungerScore = pet.hunger;
    const $boredomScore = pet.boredom;
    const $fatigueScore = pet.sleepiness;
    $('.ageScore').append($aging);
    $('.appetiteScore').append($hungerScore);
    $('.attentionScore').append($boredomScore);
    $('.tirednessScore').append($fatigueScore);
}

const startTimer = () => {
    timer = setInterval(() => {
        seconds++;
        if (seconds % 5 === 0){
            pet.age++;
            $('.ageScore').text(pet.age);
            console.log(pet.age);
        }
        if (seconds % 5 === 0){
            pet.hunger++;
            $('.appetiteScore').text(pet.hunger);
            console.log(pet.hunger)
        }
        if (seconds % 5 === 0){
            pet.boredom++;
            $('.attentionScore').text(pet.boredom);
            console.log(pet.boredom)
        }
        if (seconds % 5 === 0){
            pet.sleepiness++;
            $('.tirednessScore').text(pet.sleepiness);
            console.log(pet.sleepiness)
        }
        if(seconds > 50){
            clearInterval(timer);
            console.log("Done!");
            return;
        }
        console.log("Time is passing")
    }, 1000)
}

// const feedTomagotchi = () => {
  
// }

// const playWithTomagotchi = () => {
//     pet.boredom--;
// }

// const sleepTomagotchi = () => {
//     pet.sleepiness--;
// }

$('.start').on('click', startGame);
$('.start').on('click', showTomagotchi);
$('.start').on('click', generateButtons);
$('.start').on('click', startTimer);
$('.start').on('click', createScoreboard);

$(document).on('click', '.feed', function(){
    pet.hunger--;
    $('.appetiteScore').text(pet.hunger);
    console.log(pet.hunger);
});

$(document).on('click', '.play', function(){
    pet.boredom--;
    $('.attentionScore').text(pet.boredom);
    console.log(pet.boredom);
});

$(document).on('click', '.sleep', function(){
    pet.sleepiness--;
    $('.tirednessnScore').text(pet.sleepiness);
    console.log(pet.sleepiness);
});


// Onclick - Start game button disappears
    // Instantiate Tomagotchi, prompt user to name
    // Display scoreboard - age, hunger, boredom, sleepiness
    // Start animation for pet to move 

// Once age reaches certain interval, evolve
    // image changes
    // hunger, sleepiness, and boredom reset to 0

// Onclick 'Feed'
    // Hunger goes down by 1(?)

// Onclick 'Turn off light'
    // Sleepiness goes down by 1 at interval

// Onclick 'Play with your pet'
    // boredom goes down by 2 each click

// Boredom/hunger/sleepiness reach 10; Tomagotchi dies
    // display message 'Your tomagotchi died of boredom/hunger/sleepiness'
    // reset to start game screen

// Extras

// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!