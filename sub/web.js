const ctx = document.getElementById('myChart');                           // Chart element (canvas)
var type = 'doughnut'                                                     // Diagram type
var webchart                                                              // Chart variable
var i_typ = 0

fetch('values.json')// Get values from json
.then(function(response){
    if (response.ok == true) {
        return response.json()
    }
})

.then(function(data){
    console.log(data)
    json_out(data, 1)// Run program
})

//fetch('info.json')// Get website info
//    .then(response => response.json()) // Parse JSON
//    .then(data => console.log(data)) // Work with JSON data
//    .catch(error => console.error('Error fetching JSON:', error));

function time_graph() {// Time graph - does not exist yet
  fetch('detail.json')// Get info for time graph
  .then(function(response){
      if (response.ok == true) {
          return response.json()
      }
  })

  .then(function(data){
      console.log(data)
      graph_out(data)
  })
}

function graph_out(data) {// Building time graph
  var dat = {}
  for (var tp of Object.keys(data)) {
    for (var tp2 of Object.keys(data[tp])) {
      for (var tp3 of Object.keys(data[tp][tp2])) {
        //console.log(tp3)
        var lst = []
        for (var tp4 of Object.keys(data[tp][tp2][tp3])) {
          var tp5 = data[tp][tp2][tp3][tp4]
          //console.log(`${tp4}  | ${tp5}`)
          lst.push(tp5)
        }
        //console.log("------")
        //console.log(lst)
        dat[tp4] = lst
        //console.log(dat)
      }
    }
  }
}


function json_out(data, btn_col, bt) { // Building normal graph
  var ch_chart = []
  var d_labels = {}
  var d_data = {}
  for (var el of Object.keys(data)) { // In values list, every column
    console.log(el)
    var ch_labels = []
    var ch_data = []
    for (var col of Object.keys(data[el])) { // Current column
      console.log(`${col} \----------`);
      if (bt != 1) {new_btn(data, col)}
      for (var row of Object.keys(data[el][col])) { // Rows in column
        //console.log(`${row}: ${data[el][col][row]}`);
        var ch_l = row
        var ch_d = data[el][col][row]
        var ch_type = col
        ch_labels.push(ch_l)
        ch_data.push(ch_d)
      }
      var coll = data[el][col]
      console.log(col)
      d_labels[col] = ch_labels
      d_data[col] = ch_data
    }
    console.log(ch_labels)// Console logs fpr testing
    console.log(ch_data)
    console.log(ch_chart)
    console.log(d_labels)
    console.log(d_data)
    console.log(d_data["Fach"])
    console.log(d_labels["Fach"])

    var chart_l = d_labels[btn_col]
    var chart_d = d_data[btn_col]

    console.log(btn_col)

    createChart(chart_d, chart_l, btn_col, change_typ()) // Create Chart with the parameters
               // Value - Label - Column - ChartType
  }
  time_graph()
}


function new_btn(data, col) { // Create buttons above (for column change) | data for json_out | col as name
  var element = document.createElement("button");// create button
  element.appendChild(document.createTextNode(col));// col from json_out as text
  element.id = `votebtn-${col}`// create unique button id
  element.addEventListener('click', function () {json_out(data, col, 1)}) // add click function
  var page = document.getElementById("votee"); // find button container
  page.appendChild(element); // add button to container
}

function change_typ() {
  var typs = ["bar", "doughnut", "line"]
  console.log(i_typ)
  console.log(type)
  if (i_typ != 2) {
    i_typ += 1
    console.log(i_typ)
  }
  else {i_typ = 0
    console.log(i_typ)
  }
  type = typs[i_typ]
  console.log(i_typ)
  console.log(type)
  return type
}




function createChart(ch_data, ch_labels, ch_type, type){// chart function, using chart.js (reference link in start.html)
  if (webchart) {
    webchart.destroy()
  }

  webchart = new Chart(ctx, {
    type: type,
    data: {
      labels: ch_labels,
      datasets: [{
        label: ch_type,
        data: ch_data,
        borderWidth: 1
      }]
    },
    
    options: {
      animation: {duration: 0},
      indexAxis: 'x',
      scales: {
        x: {
          stacked: true
      },
        y: {
          beginAtZero: true
        }
      },
      maintainAspectRatio: false
    }
  });
}