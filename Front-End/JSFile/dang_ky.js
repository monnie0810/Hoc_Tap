function check_Form_dangky() {
    let hoten = document.forms['form_dangky']['txtHoTen'].value;
    let email = document.forms["form_dangky"]["txtEmail"].value;
    let sodienthoai = document.forms["form_dangky"]["txtsodienthoai"].value;
    let diachi = document.forms["form_dangky"]["txtdiachi"].value;
    let matkhau = document.forms["form_dangky"]["txtmatkhau"].value;
    let nhaplaimatkhau = document.forms["form_dangky"]["txtnhaplaimatkhau"].value;
    alert(aAAAAAAAAAA);
    let kq = true;
    // ho ten 
    if (hoten.length == 0) {
        document.getElementById('txtHoTen').style.borderColor = "red";
        document.getElementById('help_hoten').innerHTML = "Bạn chưa nhập số điện thoại !";
        document.getElementById("txtHoTen").style.visibility = "visible";
        kq = false;

    } else if (hoten.length < 5 || hoten.length > 30) {
        document.getElementById('txtHoTen').style.borderColor = "red";
        document.getElementById('help_hoten').innerHTML = "Họ tên phải lớn hơn 5 và nhỏ hơn 30 ký tự";
        document.getElementById("txtHoTen").style.visibility = "visible";
        kq = false;

    } else if (hoten == "Admin") {
        document.getElementById('txtHoTen').style.borderColor = "red";
        document.getElementById('help_hoten').innerHTML = "Không thể đặt tên user là Admin";
        document.getElementById("txtHoTen").style.visibility = "visible";
        kq = false;
    } else {
        document.getElementById('help_hoten').innerHTML = "";

    }
    // email
    if (email == "" || email == null) {
        document.getElementById('txtEmail').style.borderColor = "red";
        document.getElementById('help_email').innerHTML = "Bạn chưa nhập email !";
        document.getElementById("txtEmail").style.visibility = "visible";
        kq = false;
    } else {
        document.getElementById('help_email').innerHTML = "";
    }
    // so dien thoai 
    if (sodienthoai == "" || sodienthoai == null) {
        document.getElementById('txtsodienthoai').style.borderColor = "red";
        document.getElementById('help_sdt').innerHTML = "Bạn chưa nhập số điện thoại !";
        document.getElementById("txtsodienthoai").style.visibility = "visible";
        kq = false;

    } else if (isNaN(sodienthoai)) {
        document.getElementById('txtsodienthoai').style.borderColor = "red";
        document.getElementById('help_sdt').innerHTML = "Số điện thoại chưa đúng !";
        document.getElementById("txtsodienthoai").style.visibility = "visible";
        kq = false;

    } else if (sodienthoai != 10) {
        document.getElementById('txtsodienthoai').style.borderColor = "red";
        document.getElementById('help_sdt').innerHTML = "Số điện thoại chưa đúng !";
        document.getElementById("txtsodienthoai").style.visibility = "visible";
        kq = false;
    } else {
        document.getElementById('help_sdt').innerHTML = "";

    }
    // dia chi 
    if (diachi == "" || diachi == null) {
        document.getElementById('txtdiachi').style.borderColor = "red";
        document.getElementById('help_diachi').innerHTML = "Bạn chưa nhập địa chỉ !";
        document.getElementById("txtdiachi").style.visibility = "visible";
        kq = false;
    } else {
        document.getElementById('help_diachi').innerHTML = "";

    }
    // mat khau 
    if (matkhau == "" || matkhau == null) {
        document.getElementById('txtmatkhau').style.borderColor = "red";
        document.getElementById('help_matkhau').innerHTML = "Bạn chưa nhập mật khẩu !";
        document.getElementById("txtmatkhau").style.visibility = "visible";
        kq = false;

    } else if (matkhau.length < 8 || matkhau.length > 15) {
        document.getElementById('txtmatkhau').style.borderColor = "red";
        document.getElementById('help_matkhau').innerHTML = "Họ tên phải lớn hơn 8 và nhỏ hơn 15 ký tự";
        document.getElementById("txtmatkhau").style.visibility = "visible";
        kq = false;
    } else {
        document.getElementById('help_matkhau').innerHTML = "";

    }
    // nhap lai mat khau 
    if (nhaplaimatkhau == "" || nhaplaimatkhau == null) {
        document.getElementById('txtnhaplaimatkhau').style.borderColor = "red";
        document.getElementById('help_nhapmatkhau').innerHTML = "Bạn chưa nhập mật khẩu !";
        document.getElementById("txtnhaplaimatkhau").style.visibility = "visible";
        kq = false;

    } else if (nhaplaimatkhau != matkhau) {
        document.getElementById('txtnhaplaimatkhau').style.borderColor = "red";
        document.getElementById('help_nhapmatkhau').innerHTML = "Mật khẩu chưa khớp !";
        document.getElementById("txtnhaplaimatkhau").style.visibility = "visible";
        kq = false;

    } else {
        document.getElementById('help_nhapmatkhau').innerHTML = "";

    }
    return kq;
}