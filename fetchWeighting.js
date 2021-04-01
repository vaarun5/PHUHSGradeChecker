function fetchWeightingNames() {
  tables = document.querySelectorAll("td.GrayDrawHeader");
  assignmentType = tables[0].querySelectorAll("b");
  category = [];
  for (i = 0; i < assignmentType.length; i++) {
    category[i] = assignmentType[i].innerHTML;
  }
  let index = category.indexOf("Weighted Grade");
  split = category.slice(0, index);
  return split;
}


function fetchWeightPercentages() {
  len = fetchWeightingNames().length; 
  tables = document.querySelectorAll("td.GrayDrawHeader");
  assignmentType = tables[0].querySelectorAll("td");
  category = [];
  for (i = 0; i < assignmentType.length; i++) {
    category[i] = assignmentType[i].innerHTML;
  }
  let index = category.indexOf("<b>Weighted Grade</b>");
  split = category.slice(index + 1, index + 1 + len)
  return split;
}

function weightingObject() {
  let percentages = fetchWeightPercentages();
  let names = fetchWeightingNames();
  let weighting = [];
  for (i=0; i<names.length; i++) {
    weighting[i] = {
      category: names[i],
      weight: percentages[i]
    }
  }
  return weighting;
}

weightingObject();
