//Get Data
onLoad();
selectCashier();
selectCategory();
function onLoad(){
    var dataHandler=$("#barisData");
    dataHandler.html("");
    $.ajax({
        type : "GET",
        data : "",
        url : 'src/ambilData.php',
        success : function(result){
            var objResult=JSON.parse(result);
            var nomor = 1;
            $.each(objResult, function(key,val){
                var barisBaru=$("<tr>");
                barisBaru.html("<td class='p-4'>"+nomor+"</td><td class='p-4'>"+val.cashier+"</td><td class='p-4'>"+val.product+"</td><td class='p-4'>"+val.category+"</td><td class='p-4'>"+formatNumber(val.price)+"</td><td class='p-4'><a type='button' data-toggle='modal' data-target='#addModal' class='text-success' onclick='pilihData("+val.id+")'><i class='fa fa-edit fa-lg'></i></a><a type='button' class='text-danger ml-4' onclick='hapusData("+val.id+")'><i class='fa fa-trash fa-lg'></i></a></td>");
                dataHandler.append(barisBaru);
                nomor++;
            })
        }
    });
}

//ADD Data
function tombolAdd(){
    $("#pesan").hide();
    $("[name=judul]").text("ADD");
    $("[name=product]").val("");
    $("[name=price]").val("");
    $("[name=cashier]").val("");
    $("[name=category]").val("");
    $("#tombolEdit").hide();
    $("#tombolTambah").show();
}

function tambahData(){
    var cashier = $("[name='cashier']").val();
    var p_name = $("[name='product']").val();
    var category = $("[name='category']").val();
    var price = $("[name='price']").val();

    $.ajax({
        type : "POST",
        data : "name="+p_name+"&price="+price+"&id_category="+category+"&id_cashier="+cashier,
        url : 'src/tambahData.php',
        success : function(result){
            var objResult=JSON.parse(result);
            $("#pesan").show();
            $("#pesan").html(objResult.pesan);
            if (objResult.status) {
                $("#pesan").hide();
                $('#addModal').modal('hide');
                Swal.fire({
                    title: '<h2>Data <span style="color: #fadc9c;">'+p_name+'</span></h2>',
                    html:
                    '<div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div><span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div><div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div></div>' +
                    '<h2>Berhasil Ditambah!</h2>',
                    showConfirmButton: false,
                    width: 600,
                    padding: '5em',
                    heightAuto: false,
                    showCloseButton: true
                });
            } else {
                Swal.fire({
                    title: '<h2>Data <span style="color: #fadc9c;">'+p_name+'</span></h2>',
                    html:
                    '<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div>' +
                    '<h2>Gagal Ditambah!</h2>',
                    showConfirmButton: false,
                    width: 600,
                    padding: '5em',
                    heightAuto: false,
                    showCloseButton: true
                });
            }
            onLoad();
        }
    })
}

//Update Data
function pilihData(idx){
    $("#pesan").hide();
    var id=idx;
    $.ajax({
        type : "POST",
        data : "id="+id,
        url : "src/ambilID.php",
        success : function(result){
            $("[name=judul]").text("EDIT");
            var objResult=JSON.parse(result);
            $("[name=id]").val(objResult.id);
            $("[name=product]").val(objResult.name);
            $("[name=price]").val(objResult.price);
            $("[name=cashier]").val(objResult.id_cashier);
            $("[name=category]").val(objResult.id_category);
            $("#tombolTambah").hide();
            $("#tombolEdit").show();
        }
    })
}

function editData() {
    var id = $("[name='id']").val();
    var cashier = $("[name='cashier']").val();
    var p_name = $("[name='product']").val();
    var category = $("[name='category']").val();
    var price = $("[name='price']").val();

    $.ajax({
        type : "POST",
        data : "id="+id+"&name="+p_name+"&price="+price+"&id_category="+category+"&id_cashier="+cashier,
        url : 'src/updateData.php',
        success : function(result){
            var objResult=JSON.parse(result);
            $("#pesan").show();
            $("#pesan").html(objResult.pesan);
            if (objResult.status) {
                $("#pesan").hide();
                $('#addModal').modal('hide');
                Swal.fire({
                    title: '<h2>Data '+p_name+' ID <span style="color: #fadc9c;">#'+id+'</span></h2>',
                    html:
                    '<div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div><span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div><div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div></div>' +
                    '<h2>Berhasil Dirubah!</h2>',
                    showConfirmButton: false,
                    width: 600,
                    padding: '5em',
                    heightAuto: false,
                    showCloseButton: true
                });
            } else {
                Swal.fire({
                    title: '<h2>Data <span style="color: #fadc9c;">'+p_name+'</span></h2>',
                    html:
                    '<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div>' +
                    '<h2>Gagal Dirubah!</h2>',
                    showConfirmButton: false,
                    width: 600,
                    padding: '5em',
                    heightAuto: false,
                    showCloseButton: true
                });
            }
            onLoad();
        }
    })
}

//Delete Data
function hapusData(id){
    Swal.fire({
        title: 'Apa anda yakin?',
        text: "Data yang akan dihapus tidak dapat kembali!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal'
        }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Terhapus!',
                'Data telah berhasil dihapus.',
                'success'
            )
            $.ajax({
                type : "POST",
                data : "id="+id,
                url : 'src/hapusData.php',
                success : function(result){
                    onLoad();
                }
            })
        }
    })
}

//Select Cashier
function selectCashier(){
    var dataHandler=$("#selectCashier");
    $.ajax({
        type : "GET",
        data : "",
        url : 'src/selectCashier.php',
        success : function(result){
            var objResult=JSON.parse(result);
            $.each(objResult, function(key,val){
                var lineBaru=$("<option value="+val.id+">"+val.name+"</option>");
                dataHandler.append(lineBaru);
            })
        }
    })
}

//Select Category
function selectCategory(){
    var dataHandler=$("#selectCategory");
    $.ajax({
        type : "GET",
        data : "",
        url : 'src/selectCategory.php',
        success : function(result){
            var objResult=JSON.parse(result);
            $.each(objResult, function(key,val){
                var lineBaru=$("<option value="+val.id+">"+val.name+"</option>");
                dataHandler.append(lineBaru);
            })
        }
    })
}

//Rupiah Format
function formatNumber(num) {
    return 'Rp. ' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

//Search
$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});