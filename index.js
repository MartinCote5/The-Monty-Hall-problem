// class Statistics {
//     constructor() {
//         this.gamesWithSameDoorWon = [];
//         this.gamesWithSameDoorLost = [];
//         this.gamesWithDoorChangeWon = [];
//         this.gamesWithDoorChangeLost = [];
//     }
// }


// class Game {
//     constructor() {
//         this.doors;
//         this.doorPicked;
//         this.openedGoatDoor;
//         this.finalPick;
//         this.won;
//     }
//     //Add any method needed
// }


// class Door {
//     constructor(number, isCar) {
//         this.number = number;
//         this.isCar = isCar;
//         this.opened = false;
//     }
// }





class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    // Getter
    get area() {
      return this.calcArea();
    }
    get perimeter() {
      return this.calcPerimeter();
    }

    // Method
    calcArea() {
      return this.height * this.width;
    }

    calcPerimeter() {
      return this.height + this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  let myShape = new Rectangle(5, 5);

  calcArea()
  
  console.log(square.area); // 100
  console.log("test")
  console.log(myShape)
  console.log(myShape.calcPerimeter)
  console.log(myShape.perimeter)


