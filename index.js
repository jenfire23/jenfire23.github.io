fetch('sub/info.json')
            .then(response => response.json()) // Parse JSON
            .then(function(data) {
                console.log(data) // Work with JSON data
                var time_u = data["update_time"]
                var time_d = data["data_time"]
                console.log(time_u, time_d)
                document.getElementById("txt-u").innerHTML = JSON.stringify(time_u)
                document.getElementById("txt-d").innerHTML = JSON.stringify(time_d)
            })