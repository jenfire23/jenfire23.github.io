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
    console.log(ch_labels)
    console.log(ch_data)


    createChart(ch_data, ch_labels, ch_type, type)
  }
}

function createChart(ch_data, ch_labels, type){
  new Chart(ctx, {
    type: type,
    data: {
      labels: ch_labels,
      datasets: [{
        label: '# of Votes',
        data: ch_data,
        borderWidth: 1
      }]
    },
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