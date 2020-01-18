<?php 
    include '../koneksi.php';

    $queryResult = $conn->query("SELECT * FROM cashier");
    $result=array();

    while ($fetchData=$queryResult->fetch_assoc()) {
        $result[]=$fetchData;
    }

    echo json_encode($result);
?>