function fetchGrades() {
  grades = document.querySelectorAll('[data-col="STU_POINTS"]');
  scores = [];
  for (i = 0; i < grades.length; i++) {
    scores[i] = grades[i].innerHTML;
  }
}

function fetchAssignmentName() {
  assignmentName = document.querySelectorAll('[data-col="TITLE"]');
  names = [];
  for (i = 0; i < assignmentName.length; i++) {
    names[i] = assignmentName[i].innerHTML;
  }
  return names;
}

function fetchAsssignmentCategories() {
  assignmentType = document.querySelectorAll('[data-col="CATEGORY_ID"]');
  category = [];
  for (i = 0; i < assignmentType.length; i++) {
    category[i] = assignmentType[i].innerHTML;
  }
  return category;
}

function createGradesObject() {
  let names = fetchAssignmentName();
  let category = fetchAsssignmentCategories();
  let grades = fetchGrades();
  let arr = [];

  for (i = 0; i < names.length; i++) {
    arr[i] = {
      name: names[i],
      grades: scores[i],
      type: category[i],
    };
  }

  return arr;
}

createGradesObject();