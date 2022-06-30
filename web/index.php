<!-- fix : Page lacks the HTML doctype, thus triggering quirks mode -->
<!DOCTYPE html>
<!-- fix : <html> element does not have a [lang] attribute -->
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- fix : Does not have a <meta name="viewport"> tag with width or initial-scale -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- fix : Document doesn't have a <title> element -->
  <title>Document</title>
  <!-- fix : Document does not have a meta description -->
  <meta name="description" content="Put your description here.">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" defer></script>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-CKRNP3S3FS"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-CKRNP3S3FS');
  </script>
</head>

<body>
  <p>
    Hello World!
  </p>
</body>

</html>