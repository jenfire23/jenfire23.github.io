fetch('sub/info.json') // Get website info (data time, update time)
            .then(response => response.json()) // Parse JSON
            .then(function(data) {
                console.log(data) // Work with JSON data
                var time_u = ` ${data["update_time"]} | Website updated`
                var time_d = ` ${data["data_time"]} | Data updated`
                console.log(time_u, time_d)

                var txt_u = document.createElement("div");
                txt_u.appendChild(document.createTextNode(time_u));
                txt_u.id = "time-u"
                var txt_d = document.createElement("div");
                txt_d.appendChild(document.createTextNode(time_d));
                txt_d.id = "time-d"
                var time_s = document.getElementById("times");
                time_s.appendChild(txt_u);
                time_s.appendChild(txt_d);
            })