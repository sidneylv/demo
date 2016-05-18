jQuery(document).ready(function() {
  $("#home_mobile").on("focus", function(){
    $(this).removeAttr("placeholder");
  });
  $("#home_mobile").on("blur", function(){
    $(this).attr("placeholder", "输入手机号");
  });
  $("#home_password").on("focus", function(){
    $(this).removeAttr("placeholder");
  });
  $("#home_password").on("blur", function(){
    $(this).attr("placeholder", "输入密码");
  });

  $("#btn_register").on("click", function(){
    window.location.href = $(this).data("url");
  });

});