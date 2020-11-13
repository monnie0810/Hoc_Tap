<?php
        // Tao ket noi

        include_once(__DIR__.'/../../dbconnect.php');
    //Cau truy van SQL
    $sqlTongsokhachhang = "select count(*) as Soluong FROM `khachhang` ;";
// 3. Thực thi câu truy vấn SQL để lấy về dữ liệu
$result = mysqli_query($conn, $sqlTongsokhachhang);
// 4. Khi thực thi các truy vấn dạng SELECT, dữ liệu lấy về cần phải phân tích để sử dụng
// Thông thường, chúng ta sẽ sử dụng vòng lặp while để duyệt danh sách các dòng dữ liệu được SELECT
// Ta sẽ tạo 1 mảng array để chứa các dữ liệu được trả về
$dataTongsokhachhang = [];
while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
{
    $dataTongsokhachhang[] = array(
        'Soluong' => $row['Soluong']
    );
}
// 5. Chuyển đổi dữ liệu về định dạng JSON
// Dữ liệu JSON, từ array PHP -> JSON 
echo json_encode($dataTongsokhachhang[0]);





?>