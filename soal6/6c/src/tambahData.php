<?php 
    include '../koneksi.php';

    $name=$_POST['name'];
    $price=$_POST['price'];
    $id_category=$_POST['id_category'];
    $id_cashier=$_POST['id_cashier'];
    $result['pesan'] = "";

    if ($id_cashier === "") {
        $result['pesan'] = "Cashier harus di pilih !";
    } else if ($id_category === "") {
        $result['pesan'] = "Category harus di pilih !";
    } else if ($name === "") {
        $result['pesan'] = "Nama harus di isi !";
    } else if ($price === "") {
        $result['pesan'] = "Harga harus di isi !";
    } else {
        $queryResult = $conn->query("INSERT INTO product (name,price,id_category,id_cashier) VALUES ('".$name."','".$price."','".$id_category."','".$id_cashier."')");

        if ($queryResult) {
            $result['status'] = true;
        } else {
            $result['status'] = false;
        }
    }

    echo json_encode($result);
?>