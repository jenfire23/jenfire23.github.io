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
        var ch_l = data[el][col]
        var ch_d = data[el][col][row]
        ch_labels.push(ch_l)
        ch_data.push(ch_d)
      }
    }
    console.log(ch_labels)
    console.log(ch_data)
  }
}