//Doi dau
var doi_dau = false;


//So phep tinh uu tien timf thay
var uu_tien = 0;

// Mang nghi nho cac so hang
var mang_so_index = 0;
var mang_so = new Array();

//Mang ghi nho phep tinh

var mang_pt_index = 0;
var mang_pt = new Array();

//Cai dat su kien
function clickButton(obj) {
    //Object ket qua
    var ketqua = document.getElementById('Ketqua');

    //Chuoi hien tai cua ket qua
    var ketquaStr = ketqua.value;

    // Phim moi
    var phim_moi = '';
    var type = obj.innerHTML;

    //Nhom so
    if (clickButton == '0' ||
        clickButton == '1' ||
        type == '2' ||
        type == '3' ||
        type == '4' ||
        type == '5' ||
        type == '6' ||
        type == '7' ||
        type == '8' ||
        type == '9' ||
        type == '±' ||
        type == ',' ) {

        //Truong hop doi dau
        if (type == '±') {
            //Doi tu tru thanh cong
            if (doi_dau) {
                doi_dau = false;
                phim_moi = phim_moi.substring(1);
            } 
            // Doi tu cong thanh tru
            else {
                doi_dau = true;
                phim_moi = '-'+phim_moi;
            }
        } else {
            phim_moi += type;
        }
        //Thay doi hien thi
        ketqua.value = ketquaStr + phim_moi;


    }



}
