function loadMore() {
    var p = [];
    $.ajax({ 
        url: "data/category.json",
        method:"GET",
        success:function (rs){ 
            p = rs.data.foods;
            var row = $("#row");
            for (var i = 0; i < p.length; i++) {
                var ct = "<div class=\"item\">\n" +
                    "            <img src=\"" + p[i].image + "\"/>\n" +
                    "            <h2>" + p[i].name + "</h2>\n" +
                    "            <h2>" + p[i].price + "</h2>\n" +
                    "            <a href=\"demojquery3.html\">Chi tiết</a>\n" +
                    "        </div>"; 
                row.append(ct); 
                
            }
        }

    });
}
function loadCategory() {
    var p = [];
    $.ajax({ 
        url: "data/category.json",
        method:"GET",
        success:function (rs){ 
            p = rs.data.category;
            var header = $("#header");
           
                var ct = "<div class=\"item\">\n" +
                    "            <img src=\"" + p.icon + "\"/>\n" +
                    "            <h2>" + p.name + "</h2>\n" +
                    "        </div>"; 
                header.append(ct); 
                
            

        }

    });

}


function loadFoods() {
    var p1 = [];
    $.ajax({ 
        url: "data/food.json",
        method:"GET",
        success:function (rs1){ 
            p1 = rs1.data;
            var food = $("#food");
                var ct = "<div class=\"item\">\n" +
                    "            <img src=\"" + p1.image + "\"/>\n" +
                    "            <h2>" + p1.name + "</h2>\n" +
                    "            <h2>" + p1.price + "</h2>\n" +
                    "        </div>"; 
                food.append(ct); 
        }

    });

}