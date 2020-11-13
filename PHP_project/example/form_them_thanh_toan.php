<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Form them thanh toan</title>
</head>
<body>
    <h1>Them moi hinh thuc thanh taon</h1>
    <form name= "formTT" id="formTT" method ="POST" action="">
       <table border ="1">
           <tr>
               <td><input type="text" name= "txt_httt_ten" id="txt_httt_ten" ></td>
           </tr>
           <tr>
               <td>
               <input type="submit" name="btnSave" id="btnSave" value="Luu Du Lieu">
               </td>
              
           </tr>
       </table>
    </form>
   
<?php 
    if( isset($_POST['btnSave'])){
        $httt_ten = $_POST['txt_httt_ten'];

        include_once(__DIR__.'/../dbconnect.php');

        $sql = "INSERT INTO 'hinhthucthanhtoan' (httt_ten) VALUES (N' $httt_ten');";

        mysqli_query($con , $sql);
    }

?>
</body>
</html>