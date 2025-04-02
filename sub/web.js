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
    console.log(`${el}:`);
    for (var col of Object.keys(data[el])) {
      console.log(`  ${col}: ${data[el][col]}`);
      for (var row of Object.keys(data[el][col])) {
        console.log(`  ${row}: ${data[el][col][row]}`);
      }
    }
  }
}