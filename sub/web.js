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
  for (var col of data) {
    console.log(`${data[col]}:`)
    for (var row of col) {
      console.log(`${data[col][row]}:`)
    }
  }
}
