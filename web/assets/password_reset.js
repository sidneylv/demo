jQuery(document).ready(function() {
  $("#send_reset_verification_button").click(function(){
    $(this).attr("href", $(this).data("url") + "?mobile=" + $("#user_mobile").val());
  });
});