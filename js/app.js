console.log('online')
let seconds = 0;
const timePassing = setInterval(() => {
    seconds++;
    if (seconds % 5 === 0){
        console.log("Every 5 seconds something happens!")
    }
    if(seconds > 10){
        clearInterval(timePassing);
        console.log("Done!");
        return;
    }
    console.log("Time is passing")
}, 500)

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

const goku = new Tomagotchi('goku', 'green');



// Onclick - Start game button disappears
    // Instantiate Tomagotchi, prompt user to name
    // Display image of Tomagotchi, age 0
    // Generate hunger, sleepiness, boredom indicators starting at 0 (T dies when hunger, sleepiness, or boredom reach 10)
    // Generate 'Feed,' 'Turn off the Light', 'Play with your pet' buttons
    // Start timer to increase each of above + age
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