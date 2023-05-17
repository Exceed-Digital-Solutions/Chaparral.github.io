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


//Banners Functions on product page
    function ContemporaryFunction() {
      var contemporary = document.getElementById("contemp-banner");
      var traditional = document.getElementById("traditional-banner");
      var framedWall = document.getElementById("framed-wall-banner");
      var cutSize = document.getElementById("cut-to-size-banner");
     
      if (contemporary.style.display === "none") {
        contemporary.style.display = "block";
        traditional.style.display = "none";
        framedWall.style.display = "none";
        cutSize.style.display = "none";
      }
      
     }     
    
     function TradFunction() {
      var contemporary = document.getElementById("contemp-banner");
      var traditional = document.getElementById("traditional-banner");
      var framedWall = document.getElementById("framed-wall-banner");
      var cutSize = document.getElementById("cut-to-size-banner");
     
      if (traditional.style.display === "block") {
        traditional.style.display = "block";
        
      } else {        
        traditional.style.display = "block";
        contemporary.style.display = "none";
        framedWall.style.display = "none";
        cutSize.style.display = "none";
      }
    }

    function FramedWallFunction() {
      var contemporary = document.getElementById("contemp-banner");
      var traditional = document.getElementById("traditional-banner");
      var framedWall = document.getElementById("framed-wall-banner");
      var cutSize = document.getElementById("cut-to-size-banner");
     
      if (framedWall.style.display === "block") {
        framedWall.style.display = "block";
        
      } else {        
        traditional.style.display = "none";
        contemporary.style.display = "none";
        framedWall.style.display = "block";
        cutSize.style.display = "none";
      }
    }

    function CutSizeFunction() {
      var contemporary = document.getElementById("contemp-banner");
      var traditional = document.getElementById("traditional-banner");
      var framedWall = document.getElementById("framed-wall-banner");
      var cutSize = document.getElementById("cut-to-size-banner");
     
      if (cutSize.style.display === "block") {
        cutSize.style.display = "block";
        
      } else {        
        traditional.style.display = "none";
        contemporary.style.display = "none";
        framedWall.style.display = "none";
        cutSize.style.display = "block";
      }
    }