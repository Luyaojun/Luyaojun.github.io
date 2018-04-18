$(document).ready(function () {
   $("a.nav-link").on("click", function (event) {
       //alert(event);
       //alert(this);
       $("a.nav-link").removeClass("active");
   });
    $("#Videos").on("click",function () {
        $("#media_container").css("display","block");
    })
});