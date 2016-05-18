jQuery(document).ready(function() {

  $(document).tooltip();

  $("input[type=radio]").change(function(){
    $("#order_doctor_id").val($(this).val());
  });

  $("#order_patient_province").change(function(e){
    fillCities($("#order_patient_province"), $("#order_patient_city"));
  });

  $("#order_patient_city").change(function(e){
    fillRegions($("#order_patient_province"), $("#order_patient_city"), $("#order_patient_region"));
  });

  $("#recommend_condition_form").validate({
    errorPlacement: function(label, element) {
        label.addClass('form_hint');
        label.insertAfter(element);
    },
    wrapper: 'span'
  });

  $("#search_doctor_form").validate({
    errorPlacement: function(label, element){
        label.addClass('form_hint');
        label.insertAfter(element);
    },
    wrapper: 'span'
  });

  $("#choose_condition_form").validate({
    errorPlacement: function(label, element) {
        label.addClass('form_hint');
        label.insertAfter(element);
    },
    wrapper: 'span'
  });

  $("#recommend_attachment_prev").on("click", function(){
    $("#attachment_message").html("");
    $("#recommend_attachment_form").hide();
    $("#recommend_condition_form").show();
    window.scrollTo(0, 0);
  });

  $("#recommend_attachment_next").on("click", function(){
    var error_message = verify_attachment();

    if(error_message.length == 0){
      $("#attachment_message").html("");
      $("#recommend_attachment_form").hide();
      $("#recommend_preference_form").show();
      window.scrollTo(0, 0);
    }else{
      $("#attachment_message").html("<div class='hintbox'>"+ error_message +"</div>");
      window.scrollTo(0, 0);
    }
  });

  $("#recommend_preference_prev").on("click", function(){
    $("#recommend_preference_form").hide();
    $("#recommend_attachment_form").show();
    window.scrollTo(0, 0);
  });

  $("#recommend_confirmation_prev").on("click", function(){
    $("#recommend_confirmation_form").hide();
    $("#recommend_preference_form").show();
    window.scrollTo(0, 0);
    $("#recommend_attachment_form div[id='upload_attachment_preview']").append($("#recommend_confirmation_form div[id='choose_picture_preview']"));
    $("#recommend_attachment_form div[id='choose_attachment_upload']").append($("#recommend_confirmation_form div[id='order_attachments']"));
  });

  $(document).on("click", "#choose_doctor_form input[name='show_resume']", function(){
    var url = $(this).data().dirUrl;
    window.open(url, '_blank');
  })

  $(document).on("click", "#choose_consultation_doctor_form input[name='show_resume']", function(){
    var url = $(this).data().dirUrl;
    window.open(url, '_blank');
  });

  $("#choose_confirmation_form").on("submit", function(){
    $('.loading').shCircleLoader();
    $("#choose_confirmation_form div[id='order_attachments']").children().each(function(){
      var file = $(this).find("input[type='file']");
      if(file.val() == ""){
        file.attr("name", "");
        $(this).find("select").attr("name", "");
        $(this).find("input[type='text']").attr("name", "");
      }
    });
  });

  $("#recommend_confirmation_form").on("submit", function(){
    $('.loading').shCircleLoader();
    $("#recommend_confirmation_form div[id='order_attachments']").children().each(function(){
      var file = $(this).find("input[type='file']");
      if(file.val() == ""){
        file.attr("name", "");
        $(this).find("select").attr("name", "");
        $(this).find("input[type='text']").attr("name", "");
      }
    });
    
  });

  $("#consultation_confirmation_form").on("submit", function(){
    $('.loading').shCircleLoader();
    $("#consultation_confirmation_form div[id='order_attachments']").children().each(function(){
      var file = $(this).find("input[type='file']");
      if(file.val() == ""){
        file.attr("name", "");
        $(this).find("select").attr("name", "");
        $(this).find("input[type='text']").attr("name", "");
      }
    });
  });

  $(document).on("click", "#choose_doctor_prev", function(){
    $("#div_choose_doctor").hide();
    $("#choose_condition_form").show();
    window.scrollTo(0, 0);
  })

  $("#choose_attachment_prev").on("click", function(){
    $("#attachment_message").html("");
    $("#choose_attachment_form").hide();
    $("#div_choose_doctor").show();
    window.scrollTo(0, 0);
  });

  $("#choose_attachment_next").on("click", function(){
    var error_message = verify_attachment();

    if(error_message.length == 0){
      $("#attachment_message").html("");
      $("#choose_attachment_form").hide();
      $("#choose_confirmation_form").show();
      window.scrollTo(0, 0);
      load_doctor_info($("#choose_doctor_form"), $("#choose_confirmation_form"), true);
      load_form_data($("#choose_condition_form"), $("#choose_confirmation_form"));

      $("#choose_confirmation_form div[id='attachment_hidden']").append($("#choose_attachment_form div[id='order_attachments']"));
      $("#choose_confirmation_form div[id='confirmation_attachment']").append($("#choose_attachment_form div[id='choose_picture_preview']"));
    }else{
      $("#attachment_message").html("<div class='hintbox'>"+ error_message +"</div>");
      window.scrollTo(0, 0);
    }
  });

  $("#choose_confirmation_prev").on("click", function(){
    $("#choose_attachment_form div[id='upload_attachment_preview']").append($("#choose_confirmation_form div[id='choose_picture_preview']"));
    $("#choose_attachment_form div[id='choose_attachment_upload']").append($("#choose_confirmation_form div[id='order_attachments']"));

    $("#choose_confirmation_form").hide();
    $("#choose_attachment_form").show();
    window.scrollTo(0, 0);
  });

  $("#consultation_attachment_next").on("click", function(){
    var error_message = verify_attachment();

    if(error_message.length == 0){
      $("#choose_attachment_form").hide();
      $("#consultation_confirmation_form").show();
      window.scrollTo(0, 0);
      load_doctor_info($("#choose_consultation_doctor_form"), $("#consultation_confirmation_form"), false);
      load_form_data($("#choose_condition_form"), $("#consultation_confirmation_form"));

      $("#consultation_confirmation_form div[id='attachment_hidden']").append($("#choose_attachment_form div[id='order_attachments']"));
      $("#consultation_confirmation_form div[id='confirmation_attachment']").append($("#choose_attachment_form div[id='choose_picture_preview']"));
    }else{
      $("#attachment_message").html("<div class='hintbox'>"+ error_message +"</div>");
      window.scrollTo(0, 0);
    }
  });

  $("#consultation_confirmation_prev").on("click", function(){
    $("#choose_attachment_form div[id='upload_attachment_preview']").append($("#consultation_confirmation_form div[id='choose_picture_preview']"));
    $("#choose_attachment_form div[id='choose_attachment_upload']").append($("#consultation_confirmation_form div[id='order_attachments']"));

    $("#consultation_confirmation_form").hide();
    $("#choose_attachment_form").show();
    window.scrollTo(0, 0);
  });

  $("#check_patient").on("change", function(){
    patient_no = $(this).val();
    if(patient_no != ""){
      $.ajax("/customer/patients/" + patient_no + ".json").done(function(data){
        $("#order_patient_name").val(data.name);
        $("#order_patient_pid").val(data.pid);
        $("#order_patient_address").val(data.address);
        $("#order_contact_name").val(data.contact_name);
        $("#order_contact_mobile").val(data.contact_mobile);
        $("#order_contact_is").val(data.contact_is);
        $("#order_patient_province").val(data.province);
        $.ajax({
          url: "/districts/cities?province=" + encodeURIComponent($("#order_patient_province").val())
        }).done(function(data_city){
          $("#order_patient_city").empty();
          $(data_city).each(function(index, item){
            $("#order_patient_city").append(new Option(item));
            if(item == data.city){
              $("#order_patient_city").val(item);
            }
          });
        });

        $.ajax({
          url: "/districts/regions?province=" + encodeURIComponent(data.province) + "&city=" + encodeURIComponent(data.city)
        }).done(function(data_region){
          console.log(data_region)
          $("#order_patient_region").empty();
          $(data_region).each(function(index, item){
            $("#order_patient_region").append(new Option(item));
            if(item == data.region){
              $("#order_patient_region").val(item);
            }
          });
        });
      });
    }
  });

});

function load_form_data(sources_form_control, target_form_control){
  sources_form_control.find("input[type='text']").each(function(index, item){
    item = $(item);
    target_form_control.find("input[name='" + item.attr("name") + "']").val(item.val());
    target_form_control.find("label[name='" + item.attr("name") + "']").text(item.val());
  });

  sources_form_control.find("textarea").each(function(index, item){
    item = $(item);

    target_form_control.find("input[name='" + item.attr("name") + "']").val(item.val());
    target_form_control.find("label[name='" + item.attr("name") + "']").text(item.val());
  });

  sources_form_control.find("select").each(function(index, item){
    item = $(item);

    target_form_control.find("input[name='" + item.attr("name") + "']").val(item.val());
    target_form_control.find("label[name='" + item.attr("name") + "']").text(item.val());
  });

  sources_form_control.find("input[type='radio']:checked").each(function(index, item){
    item = $(item);

    target_form_control.find("input[name='" + item.attr("name") + "']").val(item.val());
    target_form_control.find("label[name='" + item.attr("name") + "']").text(item.val());
  });

  var languages = "";
  sources_form_control.find("input[type='checkbox']").each(function(index, item){
    item = $(item);
    if(item.attr("id").substr(0,14) == "ck_preference_"){
      if(item.prop("checked")){
        languages += item.val() + ",";
        target_form_control.find("input[id='hid_confirmation_" + item.attr("id").substr(14,1) +"']").val(item.val());
      }else{
        target_form_control.find("input[id='hid_confirmation_" + item.attr("id").substr(14,1) +"']").remove();
      }
    }else{
      var result = item.prop("checked") ? 1 : 0;
      target_form_control.find("input[name='" + item.attr("name") + "']").val(result);
      if(item.prop("checked")){
        target_form_control.find("label[name='" + item.attr("name") + "']").text("是")
      }else{
        target_form_control.find("label[name='" + item.attr("name") + "']").text("否")
      }
      
    }
  });
  if(languages.length > 0){
    if(languages.substr(languages.length - 1, 1) == ","){
      languages = languages.substr(0, languages.length - 1);
    }
    target_form_control.find("label[name='doctor_languages']").text(languages);
  }
}

function load_doctor_info(form_control, target_form_control, is_appointment){
   checked_doctor_control = form_control.find("input[type='radio']:checked");
   checked_doctor_id = checked_doctor_control.data().doctorNo;
   
   $.ajax("/customer/doctors/" + checked_doctor_id + ".json").done(function(data){
    console.log(data)
    if(data.avatar_path.avatar_path.url != null){
      target_form_control.find("img[name='confirmation_doctor_avatar_path']").attr("src", data.avatar_path.avatar_path.url)
    }
    target_form_control.find("label[name='confirmation_doctor_name']").text(data.name);
    if(data.title != null){
      target_form_control.find("label[name='confirmation_doctor_title']").text(data.title);
    }
    if(data.hospital != null){
      target_form_control.find("label[name='confirmation_doctor_hospital']").text(data.hospital);
    }
    if(data.department != null){
      target_form_control.find("label[name='confirmation_doctor_department']").text(data.department);
    }
    if(data.skills != null){
      target_form_control.find("label[name='confirmation_doctor_skills']").text(data.skills);
    }
    if(data.address != null){
      target_form_control.find("label[name='confirmation_doctor_address']").text(data.address);
    }
    target_form_control.find("input[name='order[doctor_no]'] ").val(data.no);
    if(!is_appointment){
      target_form_control.find("td[id='confirmation_service_price']").html("<h1 class=\"f-18-red\">"+ data.consultation_price +"<span class=\"f-12\">元</span></h1>");
      target_form_control.find("input[name='order[price]']").val(data.consultation_price);
    }
   });

   if(is_appointment){
    checked_schedule_id = checked_doctor_control.data().scheduleId;
    $.ajax("/customer/doctor_schedules/" + checked_schedule_id + ".json").done(function(data){
      target_form_control.find("td[id='confirmation_service_price']").html("<h1 class=\"f-18-red\">"+ data.price +"<span class=\"f-12\">元</span></h1>");
      target_form_control.find("input[name='order[price]']").val(data.price);

      var appointment_time = data.day + " " + data.week + " " + data.start_at + "-" + data.end_at

      target_form_control.find("label[name='confirmation_appointment_time']").text(appointment_time);
      target_form_control.find("input[name='order[appointment_day]']").val(data.day);
      target_form_control.find("input[name='order[appointment_start_time]']").val(data.start_at);
      target_form_control.find("input[name='order[appointment_end_time]']").val(data.end_at);
    });
   }
}

function load_recommend_price(){
  var suggest_doctors_count = $("#recommend_preference_form select[id='order_suggest_doctors_count']").val();
  var unit_price = $("#recommend_confirmation_form input[id='recommend_unit_price']").val();
  var recommend_price = suggest_doctors_count.replace(/[^0-9]/ig,"") * unit_price;
  $("#recommend_confirmation_form td[id='confirmation_appointment_price']").html("<h1 class=\"f-18-red\">"+ recommend_price +"<span class=\"f-12\">元</span>(" + suggest_doctors_count + ")</h1>")
  $("#recommend_confirmation_form input[name='order[price]']").val(recommend_price);
}

function verify_attachment(){
  var attachment_files = $("#order_attachments").find("input[type='file']");
  var error_message = "";
  
  attachment_files.each(function(){
    if($(this).val() != ""){
      var attachment_time = $(this).closest('div').find("input[type='text']");
      var attachment_type = $(this).closest('div').find("select");
      if(attachment_time.val() == ""){
        error_message = "资料获取时间必须填写";
      }
      if(attachment_type.val() == "请选择资料类别"){
        error_message = "资料类别必须选择";
      }
    }
  });
  
  return error_message;
}
