//Queen is the object and position is the property of the object. x and y are positions of the queen
const button1 = document.getElementById("button");
button1.addEventListener("click", play());

function move(numberOfSteps, direction) {
  let temp = 0;
  let temp1 = 1;

  var queen = [0, 0];

  var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ];

  switch (direction) {
    case "E":
      temp = queen[1] + numberOfSteps;
      console.log(temp);
      if (temp > 8 || temp < 0) {
        console.log("Out of Boundary");
        document.write("Out of Boundary");
      } else {
        queen[1] = temp;
      }
      break;
    case "W":
      temp = queen[1] - numberOfSteps;
      if (temp > 8 || temp < 0) {
        console.log("Out of Boundary");
        document.write("Out of Boundary");
      } else {
        queen[1] = temp;
      }
      break;
    case "S":
      temp = queen[0] + numberOfSteps;
      if (temp > 8 || temp < 0) {
        console.log("Out of Boundary");
        temp = queen[0] + numberOfSteps;
        document.write("Out of Boundary");
      } else {
        queen[1] = temp;
      }
      break;
    case "N":
      queen[1] = temp;
      if (temp > 8 || temp < 0) {
        break;
        console.log("Out of Boundary");
        temp = queen[0] - numberOfSteps;
        document.write("Out of Boundary");
      } else {
        queen[1] = temp;
      }
      break;
    case "NE":
      temp1 = queen[1] + numberOfSteps;
      temp = queen[0] - numberOfSteps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of Boundary");
        document.write("Out of Boundary");
      } else {
        queen[1] = temp1;
        queen[0] = temp;
      }
      break;
    case "NW":
      temp1 = queen[1] - numberOfSteps;
      temp = queen[0] - numberOfSteps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of Boundary");
        document.write("Out of Boundary");
      } else {
        queen[1] = temp1;
        queen[0] = temp;
      }
      break;
    case "SW":
      temp1 = queen[1] - numberOfSteps;
      temp = queen[0] + numberOfSteps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of Boundary");
        document.write("Out of Boundary");
      } else {
        queen[1] = temp1;
        queen[0] = temp;
      }
      break;
    case "SE":
      temp1 = queen[1] + numberOfSteps;
      temp = queen[0] + numberOfSteps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of Boundary");
        document.write("Out of Boundary");
      } else {
        queen[1] = temp1;
        queen[0] = temp;
      }
      break;
  }
  console.log("Queens position is log(" + temp + "," + temp1 + ")");
  document.write("Queens position is (" + temp + "," + temp1 + ")");
}

function play() {
  var dir = document.getElementById("direction").value;
  var step = document.getElementById("steps").value;
  step = parseInt(step);
  move(step, dir);

  //console.log("Queens Current Position ->" + board[x][queen[1]]);
}
