const ctx = document.getElementById('myChart');
var type = 'bar'


fetch('values.json')
.then(function(response){
    if (response.ok == true) {
        return response.json()
    }
})

.then(function(data){
    console.log(data)
    json_out(data)
})

function json_out(data) {
  var ch_chart = []
  for (var el of Object.keys(data)) {
    var ch_labels = []
    var ch_data = []
    for (var col of Object.keys(data[el])) {
      console.log(`${col} \----------`);
      for (var row of Object.keys(data[el][col])) {
        console.log(`${row}: ${data[el][col][row]}`);
        var ch_l = row
        var ch_d = data[el][col][row]
        var ch_type = col
        ch_labels.push(ch_l)
        ch_data.push(ch_d)
      }
    }
    ch_chart.push({type: type, data: {labels: ch_labels, datasets: [{label: ch_type, data: ch_data, borderWidth: 1}]}})
    console.log(ch_labels)
    console.log(ch_data)
    console.log(ch_chart)


    createChart(ch_data, ch_labels, ch_type, type, ch_chart)
  }
}

function createChart(ch_data, ch_labels, ch_type, type, ch_chart){
  new Chart(ctx, {
    ch_chart,
    
    options: {
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