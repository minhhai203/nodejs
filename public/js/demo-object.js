var cart=[];
var product = {
    name : "Mì tôm",
    image : "../images/avt.jpg",
    detail : "Một loại thức ăn gắn liền với sinh viên",
    price : 10000,
    amount : 20,
    category:{
        option1 : "Mì chua cay",
        option2 : "Mì xào hải sản",
        price1 : 15000,
        price2 : 20000,
    },
    addProduct: function(){
        cart.push(Object.create(product));
        console.log("Đã thêm sản phẩm vào giỏ !");
    },
    deleteProduct: function(){
        cart.splice(1,1);
        console.log("Đã xóa khỏi giỏ hàng !");
    },
    addAmount: function(n){
        product.amount += n;
        console.log("Đã thêm "+ n +" sản phẩm! Số sản phẩm hiện tại là: "+product.amount);
    },
    changePrice: function(newPrice){
        product.price = newPrice;
        console.log("Giá sản phẩm mới là: "+newPrice);
    }
}


console.log("Tên sản phẩm: "+ product.name);
console.log("Mô tả: "+ product.detail);
console.log("Giá sản phẩm: "+ product.price);
console.log("Số lượng sản phẩm: "+ product.amount);


product.addProduct();
product.addAmount(10);
product.changePrice(33000);
console.log("Sau khi thay đổi:");
console.log("Giá sản phẩm: "+ product.price);
console.log("Số lượng sản phẩm: "+ product.amount);
console.log("Giỏ hàng :");
for(var i=0;i<cart.length;i++){
    console.log(cart[i]);
}
product.deleteProduct();
console.log("Giỏ hàng sau khi cập nhật:");
for(var i=0;i<cart.length;i++){
    console.log(cart[i]);
}