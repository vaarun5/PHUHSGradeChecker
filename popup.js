document.addEventListener(
  "DOMContentLoaded",
  function () {
    var checkPageButton = document.getElementById("average");
    checkPageButton.addEventListener(
      "click",
      function () {
        chrome.tabs.getSelected(null, function (tab) {
          alert(calculateAverage());
        });
      },
      false
    );
  },
  false
);

function calculateAverage() {
  var grade = "Hi";
  var row = 1;
  //setTimeout(() => grade = document.querySelector("#LOy_row1 > td:nth-child(2)").innerHTML, 1000);
  grade = String(
    document.getElementsByClassName("lo_export_csv")[0].getAttribute("href")
  );
  return grade;
}

allGrades = [];

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
      } 
      document.body.insertAdjacentElement("afterend", newDiv);
      console.log(results[0][0]);
    }
  );
}

document.getElementById("clickme").addEventListener("click", fetchGrade);