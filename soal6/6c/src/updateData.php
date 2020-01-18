<?php 
    include '../koneksi.php';

    $id=$_POST['id'];
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
        $queryResult = $conn->query("UPDATE product SET name='".$name."', price='".$price."', id_category='".$id_category."', id_cashier='".$id_cashier."' WHERE id='".$id."'");

        if ($queryResult) {
            $result['status'] = true;
        } else {
            $result['status'] = false;
        }
    }

    echo json_encode($result);
?>