gradeObject = [];

function createGradeEntries(itemsArray) {
  let test = [];
  let x = document.createElement("input");
  x.setAttribute("value", "hello");
  for (i = 0; i < itemsArray.length; i++) {
    test[i] = document.createTextNode(
      `Assignment: ${itemsArray[i].name}: ${itemsArray[i].type}`
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
    earnedPoints[i] = parseFloat(split[i][0]);
    possiblePoints[i] = parseFloat(split[i][1]);
  }
  for (i = 0; i < earnedPoints.length; i++) {
    numerator = numerator + earnedPoints[i];
    denominator = denominator + possiblePoints[i];
  }
  alert(100 * (numerator/denominator) + "%");
}

/*function calculateAverage() {
  chrome.tabs.executeScript(
    {
      file: "/fetchGrades.js",
    },
    (results) => {
      arrayGrades = results[0];
      let sum = 0;
      let numerator = 0;
      let denominator = 0;
      let split = [];
      let earnedPoints = [];
      let possiblePoints = [];

      for (i = 0; i < arrayGrades.length; i++) {
        fraction = arrayGrades[i].grades;
        split[i] = fraction.split("/");
        earnedPoints[i] = parseFloat(split[i][0]);
        possiblePoints[i] = parseFloat(split[i][1]);
      }
      for (i = 0; i < earnedPoints.length; i++) {
        numerator = numerator + earnedPoints[i];
        denominator = denominator + possiblePoints[i];
      }
      alert((100 * numerator) / denominator + "%");
    }
  );
};*/

document.getElementById("clickme").addEventListener("click", fetchGrade);
document.getElementById("average").addEventListener("click", calculateAverage);
