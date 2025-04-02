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
  for (const col in data) {
    console.log(`${col}:`)
    for (const row in col) {
      console.log(`${row}:`)
    }
  }
}
