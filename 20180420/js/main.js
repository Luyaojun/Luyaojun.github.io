$(document).ready(function () {
   $("a.nav-link").on("click", function (event) {
       //alert(event);
       //alert(this);
       $("a.nav-link").removeClass("active");
       $(this).addClass("active");
   });
    $("#Videos").on("click", function () {
        $("#media_container").css("display","block");
        $("#books_container").css("display","none");
    });
    $("#Books").on("click", function () {
        $("#media_container").css("display","none");
        $("#books_container").css("display","block");
    });

    $(".list-group-item").on("click", function () {
        $(".list-group-item").removeClass("active");
        $(this).addClass("active");
        // if (this.innerHTML == "THE TCP/IP GUIDE"){
        //     window.location.href = "http://index-of.es/Magazines/hakin9/books/No.Starch.TCP.IP.Guide.Oct.2005.pdf";
        // }
    });
    //var video_player = videojs("#Video-bar");
    //var player_width = $(".col-md-12").css("width");
    //video_player.width();
});