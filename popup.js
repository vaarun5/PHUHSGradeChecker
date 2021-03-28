document.addEventListener('DOMContentLoaded', function(){
    var checkPageButton = document.getElementById('average');
    checkPageButton.addEventListener('click',function(){
        chrome.tabs.getSelected(null, function(tab){
            alert(calculateAverage());
        });
    }, false);
}, false);

function calculateAverage() {
    var grade = "Hi";
    var row = 1;
    //setTimeout(() => grade = document.querySelector("#LOy_row1 > td:nth-child(2)").innerHTML, 1000);
    grade =  String(document.getElementsByClassName("lo_export_csv")[0].getAttribute("href"));
    return grade;
}


function fetchGrade() {
    chrome.tabs.executeScript(
      {
        file: "/fetchGrades.js"
      }
    );
  }
  
  document.getElementById("clickme").addEventListener("click", fetchGrade);