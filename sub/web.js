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
  for (const col of data) {
    console.log(`Col ${data[col]}:`)
    for (const row of col) {
      console.log(`Row ${data[col][row]}:`)
    }
  }
}
