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

//database
var mssql = require("mssql");
var ConnectionConfig = {
    server: 'MINHHAI',
    authentication: {
        type: 'default',
        options: { userName: 'sa', password: 'sa123' },
    },
    database: 'T2104E',
    options: { encrypt: false },
};

mssql.connect(ConnectionConfig,function (err){
    if(err) console.log(err)
    else console.log("Connected")
})
//routing sql
var sql = new mssql.Request();

app.get("/data-khach-hang",function (req,res){
    // can lay danh sach khach hang
    var txt_sql = "select * from KhachHang;";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.send(rs.recordset);
    })
});
var count = 0;

// app.get('/',function (req, res) {
//     // res.sendFile(__dirname+"/public/ThoiTiet2.html");
//     count++;
//     res.render("home",{
//         count: count,
//         products: products
//     });
// });
app.get("/",function (req,res){
    count++;
    // lay thong tin tu form tim kiem
    var kw = req.query.keyword||"";
    // can lay danh sach khach hang
    var txt_sql = "select * from KhachHang where TenKH like '%"+kw+"%';";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("home",{
            count: count,
            khachhangs:rs.recordset // array
        })
    })
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


//Thêm Khách hàng
//1.Tạo giao diện form để nạp thông tin
app.get('/them-khach-hang', (req, res) => {
  res.render("themkhachhang");
})

//2 tạo routing 
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/luu-khach-hang', function (req, res) {
    var ten = req.body.TenKH;
    var cmt = req.body.SoCMT;
    var dc = req.body.DiaChi;
    var txt_sql = "Insert into KhachHang(TenKH,SoCMT,DiaChi) values (N'"+ten+"','"+cmt+"',N'"+dc+"');";
    sql.query(txt_sql, function(err,rs){
        if(err) res.status(403).send('Errors');
        else res.redirect("/");
    })
})

//Chi tiết khách hàng
app.get("/chi-tiet-khach-hang",function (req,res){
    var id = req.query.id;
    var txt_sql = "select * from KhachHang where SoCMT = "+id+";";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else if(rs.recordset.length > 0){
            res.render("chitietkhachhang",{
                p:rs.recordset[0]
            })
        }else res.status(404).send('Not found?');
    })
})
//Update Khách Hàng
app.get("/update-khach-hang",function (req,res){
    var id = req.query.id;
    var txt_sql = "select * from KhachHang where SoCMT = "+id+";";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else if(rs.recordset.length > 0){
            res.render("updateKH",{
                p:rs.recordset[0]
            })
        }else res.status(404).send('Not found?');
    })
})
app.post('/update-khach-hang-thanh-cong', function (req, res) {
    var ten = req.body.TenKH;
    var cmt = req.body.SoCMT;
    var dc = req.body.DiaChi;
    var txt_sql = "Update KhachHang set TenKH = N'"+ten+"',DiaChi =N'"+dc+"' where SoCMT ='"+cmt+"';";
    sql.query(txt_sql, function(err,rs){
        if(err) res.status(403).send('Errors');
        else res.redirect("/");
    })
})
//Xóa khách hàng
app.post('/xoa-khach-hang', function (req, res) {
    var id = req.query.id;
    var txt_sql = "Delete from KhachHang where SoCMT='"+id+"';";
    sql.query(txt_sql, function(err,rs){
        if(err) res.status(403).send('Errors');
        else res.redirect("/");
    })
})