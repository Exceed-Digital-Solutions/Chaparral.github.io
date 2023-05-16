$(document).ready(function() {
    // Add active class to navbar links on click
    $(".navbar-nav li").on("click", function() {
      $(".navbar-nav li").removeClass("active");
      $(this).addClass("active");
    });
  
    // Add active class to navbar link corresponding to current page
    var pathname = window.location.pathname;
    $('.navbar-nav a[href="' + pathname + '"]').addClass('active');
  });
  


  
// For printing images
    function ImagetoPrint(source)
    {
        return "<html><head><title>Chaparral - Products</title><scri"+"pt>function step1(){\n" +
                "setTimeout('step2()', 10);}\n" +
                "function step2(){window.print();window.close()}\n" +
                "</scri" + "pt></head><body onload='step1()'>\n" +
                "<img src='" + source + "' /></body></html>";
    }

    function PrintImage(source)
    {
        var Pagelink = "Chaparral-Products";
        var pwa = window.open(Pagelink, "_new");
        pwa.document.open();
        pwa.document.write(ImagetoPrint(source));
        pwa.document.close();
    }


    
    


 