var express = require("express");
var app = express();// Tao 1 ung dung express tu modul
var port = process.env.PORT || 5000;
app.listen(port,function(){
    console.log("Server is running on port 5000...");
});
// Cấp quyền truy cập file
app.use(express.static("public"));
//Báo sẽ sử dụng ejs làm view engine
app.set("view engine","ejs");
var count = 0;
var products = [
        {
            id:1,
            name:"product 1",
            image:"/images/minhhai2.jpg"
        },
        {
            id:2,
            name:"product 2",
            image:"/images/minhhai2.jpg"
        },
        {
            id:3,
            name:"product 3",
            image:"/images/minhhai2.jpg"
        },
        {
            id:4,
            name:"product 4",
            image:"/images/minhhai2.jpg"
        }
    ];

app.get('/',function (req, res) {
    // res.sendFile(__dirname+"/public/ThoiTiet2.html");
    count++;
    res.render("home",{
        count: count,
        products: products
    });
});
app.get('/a1', function(req, res){
    res.sendFile(__dirname+"/public/Assignment1.html");
});
app.get('/a4', function(req, res){
    res.sendFile(__dirname+"/public/AssignmentS4.html");
});
app.get('/a6', function(req, res){
    res.sendFile(__dirname+"/public/AssignmentS6.html");
});
app.get('/a6-3', function(req, res){
    res.sendFile(__dirname+"/public/AssignmentS6_3.html");
});
app.get('/thoitiet', function(req, res){
    res.sendFile(__dirname+"/public/ThoiTiet2.html");
});
app.get('/thoitiet-1', function(req, res){
    res.sendFile(__dirname+"/public/ThoiTiet.html");
});
app.get('/chi-tiet', function(req, res)  {
    var msp = req.query.id;
    var p ={};
    for(var i=0;i<products.length;i++){
        if(products[i].id == msp){
            p=products[i];
            break;
        }
    }
    res.render("chitiet",{
        msp:msp,
        p:p
    });
})
//tham so tinh
app.get('/chi-tiet2/:id', function(req, res)  {
    var msp = req.params.id;
    var p ={};
    for(var i=0;i<products.length;i++){
        if(products[i].id == msp){
            p=products[i];
            break;
        }
    }
    res.render("chitiet",{
        msp:msp,
        p:p
    });
})
