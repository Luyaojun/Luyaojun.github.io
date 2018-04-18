$(document).ready(function () {
   $("a.nav-link").on("click", function (event) {
       //alert(event);
       //alert(this);
       $("a.nav-link").removeClass("active");
       $(this).addClass("active");
   });
    $("#Videos").on("click",function () {
        $("#media_container").css("display","block");
    });
    $("#Books").on("click",function () {
        $("#media_container").css("display","none");
    });
});