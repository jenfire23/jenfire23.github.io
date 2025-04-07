fetch('sub/info.json')
            .then(response => response.json()) // Parse JSON
            .then(data => console.log(data)) // Work with JSON data
            .catch(error => console.error('Error fetching JSON:', error));
            var time_u = data["update_time"]
            var time_d = data["data_time"]
            console.log(time_u, time_d)

        document.getElementById("time-u").innerHTML = time_u
        document.getElementById("time-d").innerHTML = time_d