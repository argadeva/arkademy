<?php 
    include '../koneksi.php';

    $id=$_POST['id'];
    $queryResult = $conn->query("SELECT * FROM product WHERE id=".$id);
    $fetchData = $queryResult->fetch_assoc();
    $result=$fetchData;

    echo json_encode($result);

?>