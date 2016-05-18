jQuery(document).ready(function() {
  $("#user_province").change(function(e){
    fillCities($("#user_province"), $("#user_city"));
  });

  $("#user_city").change(function(e){
    fillRegions($("#user_province"), $("#user_city"), $("#user_region"));
  });
});