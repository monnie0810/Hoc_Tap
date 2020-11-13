let phonenumber = document.forms["FormContact"]["Phonenumber-user"].value;
let password = document.forms["FormContact"]["Password-user"].value;


function check_Submit() {
    let kq = true
    if (phonenumber == "" || phonenumber == null) {
        document.getElementById('Phonenumber-user').style.borderColor = "red";
        document.getElementById('help_numberphone').innerHTML = "Nhập số điện thoại !"
        document.getElementById("help_numberphone").style.visibility = "visible";
        kq = false;

    }
    if (password == "" || password == null) {
        document.getElementById('Password-user').style.borderColor = "red";
        document.getElementById('help_pass').innerHTML = "Nhập mật khẩu !"
        document.getElementById("help_pass").style.visibility = "visible";
        kq = false;
    }
    return kq;
}