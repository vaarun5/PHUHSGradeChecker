document.addEventListener('DOMContentLoaded', function(){
    var checkPageButton = document.getElementById('average');
    checkPageButton.addEventListener('click',function(){
        chrome.tabs.getSelected(null, function(tab){
            alert(calculateAverage());
        });
    }, false);
}, false);

function calculateAverage() {
    var grade = "Hello";
    var row = 1;
    setTimeout(() => console.log(document.querySelector("#LOy_row1 > td:nth-child(2)").innerHTML), 1000);
    return grade;
}