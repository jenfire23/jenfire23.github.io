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
  for (var col of Object.keys(data)) {
    console.log(`${col}:`);
    for (var row of Object.keys(data[col])) {
      console.log(`  ${row}: ${data[col][row]}`);
    }
  }
}