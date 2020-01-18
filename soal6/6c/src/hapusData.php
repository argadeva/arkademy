<?php 
    include '../koneksi.php';

    $id=$_POST['id'];
    $conn->query("DELETE FROM product WHERE id=".$id);
?>