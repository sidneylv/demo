jQuery(document).ready(function() {

  $("#recommend_attachment_form").on('change', 'input[type="file"]', function(){
    readURL($(this)[0]);
  });

  $("#choose_attachment_form").on('change', 'input[type="file"]', function(){
    readURL($(this)[0]);
  });


  $("#recommend_attachment_form").on('click', '#add_attachment_row', function(){
    add_row($(this));
    return false;
  });

  $("#recommend_attachment_form").on('click', '#remove_attachment', function(){
    remove_row($(this));
  });

  $("#choose_attachment_form").on('click', '#add_attachment_row', function(){
    add_row($(this));
    return false;
  })

  $("#choose_attachment_form").on('click', '#remove_attachment', function(){
    remove_row($(this));
  });


});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var file_id = $(input).attr("id");
      imgstr = "<img id='img_" + file_id + "' src='" + e.target.result + "' with='100' height='100' />"
      var souce_picture = $("#choose_picture_preview img[id='img_" + file_id + "']");
      if(souce_picture.length > 0){
        souce_picture.attr("src", e.target.result);
      }else{
        $("#choose_picture_preview").append(imgstr);
      }
    }
    reader.readAsDataURL(input.files[0]);
  }
}

function add_row(control){
  $("#attachment_message").html("");
  var sources_row = control.data("fields");
  if($("#order_attachments").children().length == 0){
    $("#order_attachments").append($(sources_row));
  }else{
    $("#order_attachments").children().last().after($(sources_row));
  }

  var time = new Date().getTime();
  $("#order_attachments").children().last().find('span').each(function(){
    if($(this).children().eq(0).attr("id") != undefined){
      var no = $(this).children().eq(0).attr("id").replace(/\d+/g, time);
      $(this).children().eq(0).attr("id", no);
      $(this).children().eq(0).attr("name", no);
    }
  });
}

function remove_row(control){
  $("#attachment_message").html("");
  var upload_file = control.closest('div').find("input[type='file']");
  $("#choose_picture_preview img[id='img_" + upload_file.attr("id") + "']").remove();
  control.closest('div').remove();
}