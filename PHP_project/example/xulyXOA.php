<?php
 

    $idmuonxoa = $_GET['idmuonxoa'];
    include_once(__DIR__.'/../dbconnect.php');

    $sql = <<<EOT
    DELETE FROM `nhasanxuat` WHERE nsx_ma= $idmuonxoa;
EOT;
    var_dump($sql);
    die;
    // 3. Yêu cầu PHP thực thi QUERY
    mysqli_query($con, $sql);
    // Redirect (điều hướng) về trang bạn mong muốn
    // header('location:thuc_thi_Select.php');

?>
