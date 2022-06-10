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
        this.doors;  // ma liste de porte sans la door picked
        this.doorPicked;  // la porte que tu choisis random 1 a 3 dans la liste de doors
        this.openedGoatDoor; // la porte qui va etre ouverte, ne doit pas etre la porte picked ou la doors que is car est true
        this.finalPick;  // 
        this.won;  // boolean
    }
    //Add any method needed
    CreateAllDoors() {
        let doorList = [1, 2, 3];
        console.log(doorList)
        Math.random();
        // let pickedDoorNumber = Math.floor(Math.random() * 3) + 1;
        let randomDoor = Math.floor(Math.random() * 3) + 1;

        let indexOfCarDoor = doorList.indexOf(randomDoor);
        doorList.splice(indexOfCarDoor, 1)

        let goatDoor1 = new Door(doorList[0], false)
        let goatDoor2 = new Door(doorList[1], false)
        let carDoor = new Door(randomDoor, true)




        console.log(randomDoor)
        console.log(indexOfCarDoor)
        console.log(doorList)

        console.log("-----------------------")
        console.log(goatDoor1)
        console.log(goatDoor2)
        console.log(carDoor)

        this.openingGoatDoor(doorList)
        console.log(indexOfGoatDoorOpened, "workikng?")

        

    }

    openingGoatDoor(doorListofGoatDoor) {
        console.log("eeeeeeee")
        console.log(doorListofGoatDoor)
        let randomOpenedDoor = Math.floor(Math.random() * 2) + 1;
        console.log(randomOpenedDoor)

        let indexOfGoatDoorOpened = doorListofGoatDoor.indexOf(randomOpenedDoor)
        return indexOfGoatDoorOpened


    }
}


class Door {
    constructor(number, isCar) {
        this.number = number;  // numero de la porte en question
        this.isCar = isCar;  // boolean 
        this.opened = false;  // si la porte cest ouverte
    }
}


// 2 loop avec une ou la personne change et une ou a personne ne change pas. et ma variable de conteur a part.

numberOfSimulation = 10


// Loop keeping the initial door
for (let i = 0; i < numberOfSimulation; i++) {
    game = new Game
    game.CreateAllDoors()
    console.log("myloopkeeping")

   

  }


// Loop switching the initial door
for (let i = 0; i < numberOfSimulation; i++) {
    

    console.log("myloopswitching")
  }







// // other exemple unrelated just to get back in the game

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }

//     // Getter
//     get area() {
//       return this.calcArea();
//     }
//     get perimeter() {
//       return this.calcPerimeter();
//     }

//     // Method
//     calcArea() {
//       return this.height * this.width;
//     }

//     calcPerimeter() {
//       return this.height + this.width;
//     }
//   }
  


//   const square = new Rectangle(10, 10);
//   let myShape = new Rectangle(5, 5);

// //   calcArea()
  
//   console.log(square.area); // 100
//   console.log("test")
//   console.log(myShape)
//   console.log(myShape.calcPerimeter)

//   console.log("------------------------------")
//   console.log(myShape.perimeter)
//   console.log("------------------------------")
//   x = myShape.calcPerimeter()
//   console.log(x)
//   console.log("------------------------------")
//   console.log(myShape.calcPerimeter())


//   // question a quoi servent les getter et les setter de mes rectangles au final?



