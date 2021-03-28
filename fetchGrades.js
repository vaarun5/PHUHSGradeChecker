grades = document.querySelectorAll('[data-col="STU_POINTS"]'); 
scores = [];
for (i = 0; i < grades.length; i++) {
    scores[i] = grades[i].innerHTML; 
}

assignmentName = document.querySelectorAll('[data-col="TITLE"]');
names = [];
for (i = 0; i < assignmentName.length; i++) {
    names[i] = assignmentName[i].innerHTML; 
}

assignmentType = document.querySelectorAll('[data-col="CATEGORY_ID"]');
category = [];
for (i = 0; i < assignmentType.length; i++) {
    category[i] = assignmentType[i].innerHTML; 
}

let arr = [];
for (i = 0 ; i < names.length; i++) {
    arr[i] = {
        name: names[i],
        grades: scores[i],
        type: category[i]
    }
}

arr;