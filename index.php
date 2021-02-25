<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
<!-- Font Awesome -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
<!-- Google Fonts -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
<!-- Bootstrap core CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<!-- Material Design Bootstrap -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style1.css">
    <link rel="stylesheet" href="player2.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    <link rel="stylesheet" href="player3.css">
    
   
    <title>Music Player</title>
    
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MusicPlayer</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container ">

    <div class="row mt-5">
        <div class="col-md-12">
            <div class="form-group">
                 <input type="text" class="form-control text-center" placeholder="Search  Your  Song....">
            </div>
         </div>
        
    </div>
</div>
<div class="container-fluid  mt-4">
      <h4 class="font-weight-light text-center">Trending Songs</h4>

</div>
<div class="container images mt- p-5">
<div class="LazyLoad is-visible song-1"><img src="https://a10.gaanacdn.com/images/albums/16/3812116/crop_175x175_3812116.jpg" alt="Saiyaan Ji (Ft. Nushrratt Bharuccha)" title="Saiyaan Ji (Ft. Nushrratt Bharuccha)" class="img"></div>
<div class="LazyLoad is-visible"><img src="https://a10.gaanacdn.com/gn_img/albums/a7LWBzWzXA/LWBkmXYzbz/size_m_1610537704.webp" alt="Saiyaan Ji (Ft. Nushrratt Bharuccha)" title="Saiyaan Ji (Ft. Nushrratt Bharuccha)" class="img"></div>
<div class="LazyLoad is-visible"><img src="https://a10.gaanacdn.com/gn_img/albums/qaLKY23pO4/LKY6GPDw3p/size_m_1610708312.webp" alt="Saiyaan Ji (Ft. Nushrratt Bharuccha)" title="Saiyaan Ji (Ft. Nushrratt Bharuccha)" class="img"></div>


</div>



    
</body>
<footer class="container-fluid"></footer>
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<!-- JQuery -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
<!-- MDB core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>
<script src="main.js"></script>
<script src="player3.js"></script>
<script>

  $(document).ready(function()
  {
    $('.song-1').on('click',function()
    {
      $.ajax({
        url:'player.php',
        type:'post',
        success:function(data)
        {
          $('.images').html(data);
        }
      })
    })
    $(document).on("click",function()
    {
    var x= $('.song-current-play');

    
    })
  })
</script>
</html>