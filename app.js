// from data.js
var tableData = data;



// Select the button
var button = d3.select("#button");

button.on("click", function() {
     // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
// Get a reference to the table body
    var tbody = d3.select("tbody");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData)

  filteredData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
 

})