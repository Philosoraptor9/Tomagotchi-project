
const game = {};

let seconds = 0;
let timer;
let pet;

const gameReset = () =>{
    window.location.reload(true);
}

class Tomagotchi {
    constructor(name, eyeColor){
        this.legs = 4;
        this.age = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.name = name;
        this.eyeColor = eyeColor;
        this.alive = true;
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
        if (seconds % 10 === 0){
            pet.age++;
            $('.ageScore').text(pet.age);
            console.log(pet.age);
        }
        if (seconds % 3 === 0){
            pet.hunger++;
            $('.appetiteScore').text(pet.hunger);
            console.log(pet.hunger)
        }
        if (seconds % 4 === 0){
            pet.boredom++;
            $('.attentionScore').text(pet.boredom);
            console.log(pet.boredom)
        }
        if (seconds % 5 === 0){
            pet.sleepiness++;
            $('.tirednessScore').text(pet.sleepiness);
            console.log(pet.sleepiness)
        }
        if (pet.hunger === 10){
            pet.alive = false;
            console.log(`${pet.name} has died of starvation! Game over.`)
            clearInterval(timer);
            return;
        }
        else if (pet.sleepiness === 10){
            pet.alive = false;
            console.log(`${pet.name} has died of fatigue! Game over.`)
            clearInterval(timer);
            return;
        } 
       else if (pet.boredom === 10){
            pet.alive = false;
            console.log(`${pet.name} has died of boredom! Game over.`)
            clearInterval(timer);
            return;
        }
       else if (seconds === 60 && pet.alive === true){
            console.log(`${pet.name} has evolved!!!`)
        }
       else if(seconds > 120){
            clearInterval(timer);
            console.log(`${pet.name} lived a long happy life before dying of natural causes!
             Congrats, you are truly a champion Tomagotchi caretaker. Game over.`);
            return;
        }
        console.log(`${seconds} seconds have passed`)
    }, 1000)
}


$('.start').on('click', startGame);
$('.start').on('click', showTomagotchi);
$('.start').on('click', generateButtons);
$('.start').on('click', startTimer);
$('.start').on('click', createScoreboard);

$(document).on('click', '.feed', function(){
    if (pet.hunger > 0){
    pet.hunger--;
    $('.appetiteScore').text(pet.hunger);
    console.log(pet.hunger);
    }
});

$(document).on('click', '.play', function(){
    if (pet.boredom > 0){
    pet.boredom--;
    $('.attentionScore').text(pet.boredom);
    console.log(pet.boredom);
    }
});

$(document).on('click', '.sleep', function(){
    if (pet.sleepiness > 0){
    pet.sleepiness--;
    $('.tirednessnScore').text(pet.sleepiness);
    console.log(pet.sleepiness);
    }
});

//Remaining objectives
    // display messages on screen
    // animate tomagotchi

// Extras

// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!