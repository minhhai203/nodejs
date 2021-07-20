$.ajax({
    url:"https://api.openweathermap.org/data/2.5/weather",
        method:"GET",
        data:{
            q:"Hanoi,vietnam",
            units:"metric",
            appid:"09a71427c59d38d6a34f89b47d75975c"
        },//noi truyen tham so
        success:function(rs){
        var nhietdo = rs.main.temp;
        var nhietdoMin = rs.main.temp  ;
        var nhietdoMax = rs.main.temp ;
        $("#nhietdo").text(nhietdo);
        $("#min").text(nhietdoMin);
        $("#max").text(nhietdoMax);
        $("#hum").text(rs.main.humidity);
        $("#wind").text(rs.wind.speed);
        $("#city").text(rs.name+","+rs.sys.country);
            for(var i=0;i<rs.weather.length;i++){
                $("#desc").text(rs.weather[i].main+","+rs.weather[i].description);
            }
        var row = $("img-weather");
            var icon = rs.weather[0].icon;
            console.log(icon);
            var ct = "<img class=\"icon1\" src=\"https://openweathermap.org/img/w/"+ icon +".png\">";
            row.append(ct);      
    }
});

function loadWeather() {
    var p = [];
    $.ajax({ 
        url:"https://api.openweathermap.org/data/2.5/forecast",
        method:"GET",
        data:{
            q:"Hanoi,vietnam",
            units:"metric",
            appid:"09a71427c59d38d6a34f89b47d75975c"
        },//noi truyen tham so
        success:function (rs){ 
            p = rs.list;
            var row = $("#weather");
            for (var i = 0; i < p.length; i++) {
                var icon = p[i].weather[0].icon;
                console.log(icon);
                var ct = "<div class=\"item col-sm-3\">\n" +
                    "            <span class=\"time\">" + p[i].dt_txt + "</span>\n" +
                    "            <br>\n" +
                    "            <img class=\"icon\" src=\"https://openweathermap.org/img/wn/"+ icon +"@2x.png\">\n" +
                    "            <h3 class=\"temp-max\">" + p[i].main.temp_max + " <sup>o</sup><sup>C</sup></h3>\n" +
                    "            <span class=\"temp-min\">" + p[i].main.temp_min + "</span>\n" +
                    "        </div>"; 
                row.append(ct); 
                
            }
        }

    });
}

loadWeather();
