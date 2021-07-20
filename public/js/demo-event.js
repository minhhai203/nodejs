var reward  = [
    "Lamboghini v8",
    "SH 150i",
    "Honda Dream",
    "Tủ lạnh Toshiba",
    "Chuột máy tính Fuhlen",
    "Bút bi Thiên long"
]
var demNguoc = 50;
function quayThuong(){
    //gift.innerText =   reward[Math.floor(Math.random() * reward.length)];

    var ngauNhien = setInterval(function() {        
        gift.innerText =   reward[Math.floor(Math.random() * reward.length)];
        demNguoc--;
        if(demNguoc<=0){
            alert("Bạn đã trúng " + gift.innerText);
            clearInterval(ngauNhien);   
        }
        
    },100)
    
}
