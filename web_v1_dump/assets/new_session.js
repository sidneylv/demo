jQuery(document).ready(function() {
  $("#new_user").on('ajax:success', function (e, data, status, xhr) {
    console.log(data)
    console.log(status)
    console.log(xhr)
    if(status == "success"){
      
    }
  });
  $("#new_user").on('ajax:error', function (e, data, status, thrownError) {
    console.log("error")
    console.log(data)
    console.log(status)
    console.log(thrownError)
  });

});