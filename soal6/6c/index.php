<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="https://www.arkademy.com/favicon.ico" />
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Arkademy Coffee Shop</title>

    <style>
    /* remove the original arrow */
    select.input-arw {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    /* no standardized syntax available, no ie-friendly solution available */
    }

    select + i.fa {
    float: right;
    margin-top: -30px;
    margin-right: 5px;
    /* this is so when you click on the chevron, your click actually goes on the dropdown menu */
    pointer-events: none;
    /* everything after this is just to cover up the original arrow */
    /* (for browsers that don't support the syntax used above) */
    background-color: #fff;
    padding-right: 5px;
    }

    .text-abu {
        color: rgba(0, 0, 0, 0.3)!important;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(0, 0, 0, 0.3)!important;
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(0, 0, 0, 0.3)!important;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
    color: rgba(0, 0, 0, 0.3)!important;
    }

    .atas > input::-webkit-input-placeholder {
    color: #fff!important;
    }
    
    .atas > input:-moz-placeholder { /* Firefox 18- */
    color: #fff!important;  
    }
    
    .atas > input::-moz-placeholder {  /* Firefox 19+ */
    color: #fff!important;  
    }
    
    .atas > input:-ms-input-placeholder {  
    color: #fff!important;  
    }
    </style>
</head>
<body>
    <div class="shadow sticky-top bg-white">
        <div class="container">
            <div class="row pt-3 pb-3">
                <div class="col-2">
                    <img src="https://www.arkademy.com/img/logo%20arkademy-01.9c1222ba.png" width="auto" height="60" alt="">
                </div>
                <div class="col-8">
                    <form class="mt-2 atas">
                        <input class="form-control form-control-lg" id="myInput" type="search" placeholder="Search" aria-label="Search" style="color:#fff!important;background-color:#cecece!important;">
                    </form>
                </div>
                <div class="col-2">
                    <button class="float-right btn btn-lg shadow pl-5 pr-5 mt-1" data-toggle="modal" data-target="#addModal" style="background-color: #fadc9c;color: #fff;" type="button" onclick="tombolAdd()">ADD</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Add Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
            <div class="modal-content p-2" style="border-radius: 1rem!important;">
            <div class="modal-header border-0">
                <h5 class="modal-title font-weight-bold" name="judul">ADD</h5>
                <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fa fa-times"></i></span>
                </button>
            </div>
            <div class="modal-body border-0 p-3 pl-5 pr-5">
                <div class="container pl-5 pr-5">
                    <div class="alert alert-danger" role="alert" id="pesan"></div>
                    <form>
                        <span style="display:none" name="id"></span>
                        <div class="form-group">
                            <select id="selectCashier" class="form-control input-arw border-top-0 border-right-0 border-left-0 rounded-0 font-weight-bold text-abu" name="cashier">
                                <option value="">- Pilih Cashier -</option>
                            </select>
                            <i class="fa fa-chevron-down"></i>
                        </div>
                        <div class="form-group">
                            <select id="selectCategory" class="form-control input-arw border-top-0 border-right-0 border-left-0 rounded-0 font-weight-bold text-abu" name="category">
                                <option value="">- Pilih Category -</option>
                            </select>
                            <i class="fa fa-chevron-down"></i>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 font-weight-bold text-abu" placeholder="Ice Tea" name="product">
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 font-weight-bold text-abu" placeholder="Rp. 10.000" name="price">
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer border-0">
                <button id="tombolTambah" type="button" class="btn pl-4 pr-4 shadow" style="background-color: #ff8fb2;color: #fff;" onclick="tambahData()">ADD</button>
                <button id="tombolEdit" type="button" class="btn pl-4 pr-4 shadow" style="background-color: #ff8fb2;color: #fff;" onclick="editData()">EDIT</button>
            </div>
            </div>
        </div>
    </div>
    <!-- Content -->
    <div class="container p-5">
        <div class="table-responsive shadow" style="border-radius: 1rem!important;">
            <table class="table table-borderless text-center m-0">
                <thead style="color: #fff;background-color: #fadc9c;border-color: #fadc9c;">
                    <tr>
                        <th scope="col" class="p-4">No</th>
                        <th scope="col" class="p-4">Cashier</th>
                        <th scope="col" class="p-4">Product</th>
                        <th scope="col" class="p-4">Category</th>
                        <th scope="col" class="p-4">Price</th>
                        <th scope="col" class="p-4">Action</th>
                    </tr>
                </thead>
                <tbody id="barisData" class="myTable">                    
                </tbody>
            </table>
        </div>
    </div>
        
    <!-- Optional JavaScript -->
    <!-- Font Awesome -->
    <script src="https://use.fontawesome.com/1b1c434b48.js"></script>
    <!-- Sweet Alert 2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <!-- My JS -->
    <script src="script.js"></script>
</body>
</html>