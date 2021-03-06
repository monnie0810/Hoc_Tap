<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
    // Kiểm tra xem Người dùng có sử dụng Ghi nhớ Đăng nhập không?
    if(isset($_COOKIE['is_logged'])) {
        // Lấy thông tin từ COOKIE từ Web Browser của client gởi đến
        $username_logged = isset($_COOKIE['username_logged']) ? $_COOKIE['username_logged'] : '';
        echo "Xin chào <b>$username_logged</b>! Bạn đã đăng nhập rồi.";
        echo "Bạn sẽ được chuyển đến trang chủ trong 5s;";
        echo '<script>setTimeout(function(){ window.location="/" }, 5000);</script>';
        die;
    }
    ?>
    <h1>Dang Ky</h1>
    <form name= "formDK" id="formDk" method="POST" action="">
        Ten dang nhap
        <input type="text" name="username" id="username">
        <br>
        Mat khau
        <input type="pass" name="pass" id="pass">
        <br>
        <input type="checkbox" name="remember_me" id="remember_me"> Ghi nho tai khoan
        <br>
        <input type="submit" name="btnLogin" id="btnLogin" value="Dang nhap">
    </form>
    <!-- php xu ly -->
    <?php
    // Xử lý nếu người dùng có bấm nút "btnLogin"
    if(isset($_POST['btnLogin'])) {
        // Lấy thông tin người dùng gởi đến Server
        $username = $_POST['username'];
        $password = $_POST['pass'];
        // Đối với checkbox cần kiểm tra xem giá trị có tồn tại hay không?
        // Nếu có thì lấy giá trị do người dùng checked; nếu không thì phải gán giá trị mặc định
        $remember_me = isset($_POST['remember_me']) ? 1 : 0; 
        // Xử lý các logic/Nghiệp vụ ...
        // Nếu username=admin và password=123456 thì đăng nhập thành công
        if($username == 'admin' && $password == '123456') {
            // Hiển thị thông tin chào mừng
              // Nếu người dùng có chọn "Ghi nhớ Đăng nhập"
            // => tiến hành lưu thông tin vào COOKIE và gởi lại người dùng
            if($remember_me == 1) {
                // Thiết lập Cookie "Ghi nhớ đăng nhập" trong 15' ~ 3600s
                setcookie('is_logged', true, time()+ 3600, '/');
                // Thiết lập Cookie "Tên username đã đăng nhập" trong 15' ~ 3600s
                setcookie("username_logged", $username, time()+3600, "/","", 0);
            }
            echo "<h2>Xin chào $username!</h2>";
        } else {
            echo "Đăng nhập thất bại!";
        }
    }
    ?>

</body>
</html>