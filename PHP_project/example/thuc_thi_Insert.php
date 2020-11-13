<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Thuc thi</title>
</head>
<body>
<h1>Insert PHP</h1>
    <?php 
    include_once(__DIR__ . '/../dbconnect.php');

    //2.Chuan bi Query
    $tenNSX = 'Vsmart';
    $sql = "INSERT INTO nhasanxuat (nsx_ten) VALUES (N'$tenNSX');";

    mysqli_query($con, $sql);
?>
</body>
</html>