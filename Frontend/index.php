<!DOCTYPE html>
<html lang="en">
<head>
  <title>Upload_Image</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</head>
<body>

<div class="container">
  <div class="row">
    <div class="col">
      <img src="https://miro.medium.com/max/800/1*z9ErVNVw2KPhWN6EXSTr4A.png" style="max-width:20%;" alt="Cinque Terre">
    </div>
  </div>
  
</div>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="index.php">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="index.php">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="About.php">About</a>
      </li>    
    </ul>
  </div>  
</nav>

<div class="container" style="margin-top:30px">
  <div class="row">
    <div class="col-sm-6">
      <h2>About The Service</h2>
      <p>Online classes!!!</p>
      <p>How boring they are!</p>
      <p>And then equally boring is copying the notes from those notes from the photos</p>
      <p>Maybe not anymore?</p>
    </div>

    
    <div class="col-sm-6">
      <h2>Why use our service?</h2>
      <ol>
        <li>No data logging.</li>
        <li>Ad free service.</li>
        <li>Updated regularly</li>
      </ol>
    </div>
    <div class="col-sm-8">
      <h2>Online Image to PDF Converter</h2>
      <p>In the new normal situation, caused by the worldwide pandemic, it is obvious that online class is the only way. </p>
      <p>But with online classes, images are the way of sharing notes. But it comes with obvious cons. Copying the notes is both time and energy consuming.</p>
      <p>We are here to help. We bring you a free online image to PDF converter. </p>
      <br>
      <h2>How to Use</h2>
      <p>Upload the photo in the place provided and upload it</p>
      <p>Wait for a few seconds and your file is prepared.</p>
      <p>Download your PDF.</p>
    </div>
  </div>
</div>
<form class="jumbotron text-center">
  <div class="form-group">
    <label for="UnprocessedImage"><h2>Upload Image Here:-</h2></label>
    <input type="file" class="form-control-file" id="UnprocessedImage">
  </div>
</form>

<footer class="page-footer font-small bg-dark">

  <!-- Copyright -->
  <div class="footer-copyright text-center text-light py-3 c">© 2021 Copyright:
  </div>
  <!-- Copyright -->

</footer>

<div>
  <script>
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    async function Main() {
      const file = document.querySelector('#UnprocessedImage').files[0];
      console.log(await toBase64(file));
    }

    Main();
  </script>
</div>
</body>
</html>