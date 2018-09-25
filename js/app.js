
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
    $('#start').remove();
    console.log(pet)
}

const showTomagotchi = () => {
    const $section = $('<section/>').addClass('gameImage');
    $('body').append($section);
    $section.append('<img src = "images/Agum.png">')
}

const generateButtons = () => {
    const $div = $('<div/>').addClass('controls');
    const $button1 = $('<button/>');
    const $button2 = $('<button/>');
    const $button3 = $('<button/>');

    $('body').append($div);

    $div.append($button1);
    $button1.text('feed your pet');
    $div.append($button2);
    $button2.text('play with your pet');
    $div.append($button3);
    $button3.text('turn off the lights')
}

const createScoreboard = () => {
    const $aside = $('<aside/>');
    const $div1 = $('<div id = ageScore/>').addClass('score');
    const $div2 = $('<div id = appetiteScore/>').addClass('score');
    const $div3 = $('<div id = attentionScore/>').addClass('score');
    const $div4 = $('<div id = tirednessScore/>').addClass('score');

    const $aging = pet.age;
    const $hungerScore = pet.hunger;
    const $boredomScore = pet.boredom;
    const $fatigueScore = pet.sleepiness;
    
    $('body').append($aside);
    $('aside').append($div1);
    $div1.append($aging);
    $('aside').append($div2);
    $div2.append($hungerScore);
    $('aside').append($div3);
    $div3.append($boredomScore);
    $('aside').append($div4);
    $div4.append($fatigueScore);
}

const startTimer = () => {
    timer = setInterval(() => {
        seconds++;
        if (seconds % 5 === 0){
            pet.age++;
            $('#ageScore').append(pet.age);
            console.log(pet.age);
        }
        if (seconds % 5 === 0){
            pet.hunger++;
            $('#appetiteScore').append(pet.hunger);
            console.log(pet.hunger)
        }
        if (seconds % 5 === 0){
            pet.boredom++;
            $('#attentionScore').append(pet.boredom);
            console.log(pet.boredom)
        }
        if (seconds % 5 === 0){
            pet.sleepiness++;
            $('#tirednessScore').append(pet.sleepiness);
            console.log(pet.sleepiness)
        }
        if(seconds > 30){
            clearInterval(timer);
            console.log("Done!");
            return;
        }
        console.log("Time is passing")
    }, 1000)
}



$('#start').on('click', startGame);
$('#start').on('click', showTomagotchi);
$('#start').on('click', generateButtons);
$('#start').on('click', startTimer);
$('#start').on('click', createScoreboard);



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