gradeObject = [];

var future = 1;
var tFuture = [];

function createFutureGrade(){
  tFuture[future] = document.createElement("div");
  let x = document.createElement("input");
  x.setAttribute("value", "hello");
  test = document.createTextNode(
      `Theoretical Assignment ${future}\n`
  );
  inputs = document.createElement("input");
  inputs.setAttribute("value", "0 / 0");
  inputs.id = "gradeInput-" + i;
  tFuture[future].appendChild(test);
  tFuture[future].appendChild(inputs);
  tFuture[future].appendChild(document.createElement("br"));
  document.getElementById("assignmentSection").appendChild(tFuture[future]);
  future++;
}

function removeFuture(){
  document.getElementById("assignmentSection").removeChild(tFuture[tFuture.length-1]);
  tFuture.pop();
  future--;
}
function createGradeEntries(itemsArray) {
  let test = [];
  let x = document.createElement("input");
  x.setAttribute("value", "hello");
  for (i = 0; i < itemsArray.length; i++) {
    test[i] = document.createTextNode(
      `Assignment: ${itemsArray[i].name} (${itemsArray[i].type})\n`
    );
  }
  return test;
}

function fetchGrade() {
  chrome.tabs.executeScript(
    {
      file: "/fetchGrades.js",
    },
    (results) => {
      let objArray = results[0];
      const newDiv = document.createElement("div");
      const newContent = createGradeEntries(objArray);
      let inputs = [];
      for (i = 0; i < objArray.length; i++) {
        inputs[i] = newDiv.appendChild(document.createElement("input"));
      }
      for (i = 0; i < objArray.length; i++) {
        inputs[i].setAttribute("value", objArray[i].grades);
        inputs[i].id = "gradeInput-" + i;
      }
      for (i = 0; i < objArray.length; i++) {
        newDiv.appendChild(newContent[i]);
        newDiv.appendChild(inputs[i]);
        newDiv.appendChild(document.createElement("br"));
      }
      document.getElementById("assignmentSection").innerHTML = "";
      document.getElementById("assignmentSection").appendChild(newDiv);
    }
  );
  future = 1;
  var tFuture = [];
}

function calculateAverage() {
  len = document.querySelectorAll("input");
  gradeInputs = [];
  let x = [];
  for (i = 0; i < len.length; i++) {
    x[i] = document.getElementById(`gradeInput-${i}`);
    gradeInputs[i] = x[i].value;
  }
  let numerator = 0;
  let denominator = 0;
  let split = [];
  let earnedPoints = [];
  let possiblePoints = [];
  for (i=0; i<gradeInputs.length; i++) {
    fraction = gradeInputs[i];
    split[i] = fraction.split('/');
    if (split[i][0] != "NG "){
      earnedPoints[i] = parseFloat(split[i][0]);
      console.log(split[i][0])
      possiblePoints[i] = parseFloat(split[i][1]);
    }
    else{
      earnedPoints[i] = 0;
      possiblePoints[i] = 0;
    }
  }
  for (i = 0; i < earnedPoints.length; i++) {
    numerator = numerator + earnedPoints[i];
    denominator = denominator + possiblePoints[i];
  }
  alert(100 * (numerator/denominator) + "%");
}

document.getElementById("clickme").addEventListener("click", fetchGrade);
document.getElementById("average").addEventListener("click", calculateAverage);
document.getElementById("future").addEventListener("click", createFutureGrade);
document.getElementById("remove").addEventListener("click", removeFuture);