<?php 
    include '../koneksi.php';

    $queryResult = $conn->query("SELECT product.id as id, cashier.name as cashier, product.name as product, category.name as category, price FROM product INNER JOIN cashier ON product.id_cashier = cashier.id INNER JOIN category ON product.id_category = category.id ORDER BY product.id ASC;");
    $result=array();

    while ($fetchData=$queryResult->fetch_assoc()) {
        $result[]=$fetchData;
    }

    echo json_encode($result);
?>