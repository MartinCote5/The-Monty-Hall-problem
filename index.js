class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = [];
    }
}


class Game {
    constructor() {
        this.doors = []  
        this.doorPicked;
        this.openedGoatDoor;
        this.finalPick;  
        this.won;
    }
    //Add any method needed
    CreateAllDoors() {
        let doorList = [1, 2, 3];
        let randomDoorIndex = Math.floor(Math.random() * 3);
        let carDoor = new Door(doorList[randomDoorIndex], true)
        doorList.splice(randomDoorIndex, 1)
        let goatDoor1 = new Door(doorList[0], false)
        let goatDoor2 = new Door(doorList[1], false)
        this.doors.push(goatDoor1, goatDoor2, carDoor)
    }

    pickDoor() {
        let randomDoorIndex = Math.floor(Math.random() * 3);
        this.doorPicked = this.doors[randomDoorIndex]
        this.doors.splice(randomDoorIndex, 1)
    }

    openingGoatDoor() {
        if (this.doors[0].isCar == false) {
            this.openedGoatDoor = this.doors[0]
            this.doors.splice(0, 1)
        } else {
            this.openedGoatDoor = this.doors[1]
            this.doors.splice(1, 1)
        }  
    }

    changingDoor() {
        this.doorPicked = this.doors[0]
    }

    winOrLose() {
        if (this.doorPicked.isCar == true) {
            return true
        } else {
            return false 
        }
    }
}


class Door {
    constructor(number, isCar) {
        this.number = number; 
        this.isCar = isCar;  
        this.opened = false; 
    }
}


// 2 different loops where the chosen door keeps one the first one and changed in the second loop
// Simulation Start
numberOfSimulation = 555
let stats = new Statistics


// Loop keeping the initial door
for (let i = 0; i < numberOfSimulation; i++) {
    game = new Game
    game.CreateAllDoors()
    game.pickDoor()
    game.openingGoatDoor()
    if(game.winOrLose()) {
        stats.gamesWithSameDoorWon.push(game)
    } else {
        stats.gamesWithSameDoorLost.push(game)    
    }
}
//calculate the result without changing door
percentageOfWonWithoutChangingDoor = stats.gamesWithSameDoorWon.length /(stats.gamesWithSameDoorWon.length+ stats.gamesWithSameDoorLost.length) * 100 


// Loop switching the initial door
for (let i = 0; i < numberOfSimulation; i++) {
    game = new Game
    game.CreateAllDoors()
    game.pickDoor()
    game.openingGoatDoor()
    game.changingDoor()
    if(game.winOrLose()) {
        stats.gamesWithDoorChangeWon.push(game)
    } else {
        stats.gamesWithDoorChangeLost.push(game)    
    }
  }
  //calculate the result while changing door
  percentageOfWonWhileChangingDoor = stats.gamesWithDoorChangeWon.length /(stats.gamesWithDoorChangeWon.length+ stats.gamesWithDoorChangeLost.length) * 100 


  //logging the result
  console.log(`game won without changing door is ${percentageOfWonWithoutChangingDoor} %`)
  console.log(`game won while changing door is ${percentageOfWonWhileChangingDoor} %`)
  