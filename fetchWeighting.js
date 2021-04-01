function fetchWeightingNames() {
  assignmentType = document.querySelectorAll("td > b");
  category = [];
  for (i = 0; i < assignmentType.length; i++) {
    category[i] = assignmentType[i].innerHTML;
  }
  return category;
}

function fetchWeightPercentages() {
  tables = document.querySelectorAll("td.GrayDrawHeader");
  assignmentType = tables[0].querySelectorAll('b');
  category = [];
  for (i = 0; i < assignmentType.length; i++) {
    category[i] = assignmentType[i].innerHTML;
  }
  let index = category.indexOf("Weighted Grade");
  split = category.slice(0, index);
  return split;
}

fetchWeightPercentages();
