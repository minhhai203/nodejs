var phut = prompt("Nhập số phút cần đếm ngược: ");
        var giay = prompt("Nhập số giây cần đếm ngược: ");
        alert("Thời gian đếm ngược của bạn là " + phut + " phút " + ": " + giay + " giây");
        phut =parseInt(phut);
        giay = parseInt(giay);
        var demNguoc = setInterval(function(){
            var phut_txt = phut>=10?phut:"0"+phut;
            var giay_txt = giay>=10?giay:"0"+giay;
            giay--;
            if(giay == -1){
                phut -= 1;
                giay = 59;
            }
            if(phut == 0 && giay == 0){
                clearInterval(demNguoc);
                console.log(" Hết giờ !");
                alert("Hết giờ");
            }
            console.log(phut_txt+":"+giay_txt);
        },1000)