<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Danh sách Hình thức thanh toán</title>

     <?php include_once(__DIR__.'/../../layouts/styles.php'); ?>
     <!-- DataTable CSS -->
     <link rel="stylesheet" href="/TMT_project/assets/vendor/DataTables/datatables.min.css">
     <link rel="stylesheet" href="/TMT_project/assets/vendor/DataTables/Buttons-1.6.3/css/buttons.bootstrap4.min.css">
</head>
<body>
    
    <!-- header -->
    <?php include_once(__DIR__.'/../../layouts/partials/header.php'); ?>
    <!-- end header -->
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <!-- sidebar -->
                <?php include_once(__DIR__.'/../../layouts/partials/sidebar.php'); ?>
                <!-- end sidebar -->
            </div>
            <div class="col-md-8">
                
                <h1>Nhập thông tin Sản phẩm</h1>
                <?php
                    
                    // Truy vấn database để lấy danh sách
                    // 1. Include file cấu hình kết nối đến database, khởi tạo kết nối $conn
                    // C:\xampp\htdocs\web02\
                    include_once(__DIR__.'/../../../dbconnect.php');

                    // 2. Chuẩn bị QUERY
                    // HERE DOC
                    $sql = <<<EOT
                    SELECT sp.* ,lsp.lsp_ten, nsx.nsx_ten, km.km_ten,km.km_noidung,km.km_tungay,km.km_denngay
                    FROM `sanpham` sp 
                    JOIN `loaisanpham` lsp ON lsp.lsp_ma=sp.lsp_ma
                    JOIN `nhasanxuat` nsx ON nsx.nsx_ma=sp.nsx_ma
                    LEFT JOIN `khuyenmai` km ON km.km_ma=sp.km_ma
                    ORDER BY sp.sp_ma 
EOT;

                    // 3. Yêu cầu PHP thực thi QUERY
                    $result = mysqli_query($conn, $sql);
                
                    // 4. Khi thực thi các truy vấn dạng SELECT, dữ liệu lấy về cần phải phân tích để sử dụng
                    // Thông thường, chúng ta sẽ sử dụng vòng lặp while để duyệt danh sách các dòng dữ liệu được SELECT
                    // Ta sẽ tạo 1 mảng array để chứa các dữ liệu được trả về
                    $data = [];
                    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                        $km_tomtat='';
                        $km_ten =$row['km_ten'];
                        $km_noidung =$row['km_noidung'];
                        $km_tungay =$row['km_tungay'];
                        $km_denngay =$row['km_denngay'];
                        if(!empty($row['km_ten'])){
                            $km_tomtat= sprintf(
                                "khuyen mãi: %s, từ: %s đến %s.",
                                $km_noidung, 
                                date('d-m-Y',strtotime($km_tungay)),
                                date('d-m-Y',strtotime($km_denngay))
                            );                       
                        }

                        $data[] = array(
                            'sp_ma' => $row['sp_ma'],
                            'sp_ten' => $row['sp_ten'],
                            'sp_gia' => number_format($row['sp_gia'],2,".",",") ,
                            'km_ma' => $row['km_ma'],
                            //khoa ngoai
                            'km_ma' => $row['km_ma'],
                            'lsp_ten' => $row['lsp_ten'],
                            'nsx_ten' => $row['nsx_ten'],
                            'km_tomtat' => $km_tomtat,
                        );
                    }

                    // print_r($data);
                    ?>
                    <!-- Thêm sp mới -->
                    <a class="btn btn-primary" href="create.php">Thêm mới</a>
                    <!-- End- Thêm sản phẩm mới -->
                    <table id="tableSP" border="1">
                        <thead>
                            <tr>
                                <th>Mã SP</th>
                                <th>Tên sản phẩm</th>
                                <th>giá sản phẩm</th>
                                <th>loại sản phẩm</th>
                                <th>nhà sản xuất</th>
                                <th>khuyến mãi</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php foreach($data as $sanpham): ?>
                        <tr>
                                <td><?= $sanpham['sp_ma'] ?></td>
                                <td><?= $sanpham['sp_ten'] ?></td>
                                <td><?= $sanpham['sp_gia'] ?></td>
                                <td><?= $sanpham['lsp_ten'] ?></td>
                                <td><?= $sanpham['nsx_ten'] ?></td>
                                <td><?= $sanpham['km_tomtat'] ?></td>
                                <td>
                                    <!-- ?key1=value1&key2=value2... -->
                                    <!-- <a href="xuly_xoa.php?idmuonxoa=<?= $sanpham['sp_ma'] ?>" class="btn btn-danger">Xóa</a> -->
                                   
                                    <a href="form_update.php?idmuonsua=<?= $sanpham['sp_ma'] ?>" class="btn btn-success">Sửa</a>
                                    <button class="btn btn-danger btnDelete" data-sp_ma="<?= $sp['sp_ma'] ?>">  Xóa</button>
                                </td>
                        </tr>
                        <?php endforeach; ?>
                        </tbody>
                       
                    </table>
            </div>
        </div>
    </div>

    <!-- footer -->
    <?php include_once(__DIR__.'/../../layouts/partials/footer.php'); ?>
    <!-- end footer -->

     <?php include_once(__DIR__.'/../../layouts/scripts.php'); ?>
     <script src = "/TMT_project/assets/vendor/DataTables/datatables.min.js"></script>
     <script src = "/TMT_project/assets/vendor/DataTables/Buttons-1.6.3/js/buttons.bootstrap4.min.js"></script>
     <script src = "/TMT_project/assets/vendor/DataTables/pdfmake-0.1.36/pdfmake.min.js"></script>
     <script src = "/TMT_project/assets/vendor/DataTables/pdfmake-0.1.36/vfs_fonts.js"></script>
     <script src="/TMT_project/assets/vendor/sweetalert/sweetalert.min.js"></script>
     <script>
     $(document).ready(function(){
         $('#tableSP').DataTable({
             dom: 'Bfrtip',
             buttons: [
                 'copy', 'excel', 'pdf' 
             ]
         });
        //  //Cảnh báo khi xóa
        //  swal("Hello world!");
         $('.btnDelete').click(function(){
            swal({
                title: "Bạn muốn xóa sản phẩm này?",
                text: "Xóa xong, dữ liệu sẽ không phục hồi được",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) { //Nếu đồng ý xóa
                var sp_ma = $(this).data('sp_ma');
                var url = "xulyDelete.php" + sp_ma;
                //Đều hướng qua trang xóa với REQUEST GET
                location.href = url;
            } else {
                swal("Cẩn thân hơn nhé!");
            }
            });
         });



     });
     
     
     </script>
</body>
</html>