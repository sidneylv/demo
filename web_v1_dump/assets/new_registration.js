jQuery(document).ready(function() {
  $("#send_verification_button").click(function(){
    $(this).attr("href", $(this).data("url") + "?mobile=" + $("#user_mobile").val());
  });
});