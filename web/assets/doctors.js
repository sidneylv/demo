jQuery(document).ready(function() {
  $("#edit_doctor_form").on('change', 'input[type="file"]', function(){
    readURL($(this)[0]);
  });

  $("#edit_doctor_form").validate({
    errorPlacement: function(label, element) {
        label.addClass('form_hint');
        label.insertAfter(element);
    },
    wrapper: 'span'
  });
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var file_id = $(input).attr("id");
      imgstr = "<img id='img_" + file_id + "' src='" + e.target.result + "' with='120' height='160' />"
      var souce_picture = $("#picture_preview img[id='img_" + file_id + "']");
      if(souce_picture.length > 0){
        souce_picture.attr("src", e.target.result);
      }else{
        $("#picture_preview").html(imgstr);
      }
    }
    reader.readAsDataURL(input.files[0]);
  }
  
}
