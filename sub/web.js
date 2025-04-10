const ctx = document.getElementById('myChart');
var type = 'bar'
var webchart


fetch('values.json')
.then(function(response){
    if (response.ok == true) {
        return response.json()
    }
})

.then(function(data){
    console.log(data)
    json_out(data, 1)
})

fetch('info.json')
    .then(response => response.json()) // Parse JSON
    .then(data => console.log(data)) // Work with JSON data
    .catch(error => console.error('Error fetching JSON:', error));

function time_graph() {
  fetch('detail.json')
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

function graph_out(data) {
  var dat = {}
  for (var tp of Object.keys(data)) {
    for (var tp2 of Object.keys(data[tp])) {
      for (var tp3 of Object.keys(data[tp][tp2])) {
        console.log(tp3)
        var lst = []
        for (var tp4 of Object.keys(data[tp][tp2][tp3])) {
          var tp5 = data[tp][tp2][tp3][tp4]
          console.log(`${tp4}  | ${tp5}`)
          lst.push(tp5)
        }
        console.log("------")
        console.log(lst)
        dat[tp4] = lst
        console.log(dat)
      }
    }
  }
}


function json_out(data, cr) {
  var ch_chart = []
  var d_labels = {}
  var d_data = {}
  for (var el of Object.keys(data)) { // json
    console.log(el)
    var ch_labels = []
    var ch_data = []
    for (var col of Object.keys(data[el])) { // column
      console.log(`${col} \----------`);
      new_btn(col)
      for (var row of Object.keys(data[el][col])) { // row
        console.log(`${row}: ${data[el][col][row]}`);
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
    console.log(ch_labels)
    console.log(ch_data)
    console.log(ch_chart)
    console.log(d_labels)
    console.log(d_data)

    //if (cr == 1) {
      createChart(ch_data, ch_labels, ch_type, type)
    //  cr = 0
    //}
  }
  time_graph()
}


function new_btn(col) {
  var element = document.createElement("button");
  element.appendChild(document.createTextNode(col));
  element.id = `votebtn-${col}`
  var page = document.getElementById("votee");
  page.appendChild(element);
}

function createChart(ch_data, ch_labels, ch_type, type){
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