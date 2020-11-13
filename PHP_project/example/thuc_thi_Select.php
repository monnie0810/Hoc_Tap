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
    $sql = <<<EOT
    SELECT nsx_ma , nsx_ten FROM `nhasanxuat`

EOT;
    //Ye cau php thuc thi QUERY
    $result = mysqli_query($con, $sql);

    //
    $data = [];
    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
        $data[] = array(
            'ma' => $row['nsx_ma'],
            'ten' => $row['nsx_ten'],
        );
    }

    //print  
?>

<table border ="1">
    <tr>
        <th> Ma Nha San Xuat</th>
        <th>Ten Nha San Xuat</th>
        <th>Hanh Dong</th>
    </tr>
    <?php foreach($data as $nsx):?>
    <tr>
        <td>
            <?php
                echo $nsx['ma'];
            ?>
        </td>
        <td>
        <?php
                echo $nsx['ten'];
            ?>
        </td>
        <td>
            <a href="xulyXOA.php?idmuonxoa=<? echo $nsx['ma'] ?>">Xóa</a>
            <a href="form_update.php?idmuonsua=<? echo $nsx['ma']?>">Sửa</a>
        </td>

    </tr>
    <?php endforeach?>



</table>
</body>
</html>