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
    createChart(data, type)
})



addData()

function addData(chart, label, newData) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(newData);
  });
  chart.update();
}





function createChart(data, type){
new Chart1(ctx, {
  type: type,
  data: {
    labels: Object.keys(data),
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
}