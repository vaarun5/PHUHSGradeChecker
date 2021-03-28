grades = document.querySelectorAll('[data-col="STU_POINTS"]'); 
scores = [];
for (i = 0; i < grades.length; i++) {
    scores[i] = grades[i].innerHTML; 
}
scores; 