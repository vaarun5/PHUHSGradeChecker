gradeObject = [];

function createGradeEntries(itemsArray) {
  let test = [];
  for (i = 0; i < itemsArray.length; i++) {
    test[i] = document.createTextNode(
      `Assignment: ${itemsArray[i].name}: ${itemsArray[i].grades} : ${itemsArray[i].type}`
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
      for (i = 0; i < objArray.length; i++) {
        newDiv.appendChild(newContent[i]);
        newDiv.appendChild(document.createElement("br"));
      }
      document.getElementById("assignmentSection").innerHTML = "";
      document.getElementById("assignmentSection").appendChild(newDiv);
    }
  );
}

function calculateAverage() {
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
        earnedPoints[i] = parseInt(split[i][0]);
        possiblePoints[i] = parseInt(split[i][1]);
      }
      for (i = 0; i < earnedPoints.length; i++) {
        numerator = numerator + earnedPoints[i];
        denominator = denominator + possiblePoints[i];
      }
      alert((100 * numerator) / denominator + "%");
    }
  );
};

document.getElementById("clickme").addEventListener("click", fetchGrade);
document.getElementById("average").addEventListener("click", calculateAverage);
