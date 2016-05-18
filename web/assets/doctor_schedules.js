jQuery(document).ready(function() {
  // $("input[name='edit_schedule']").on("click", function(){
  //   input = $("#price"+$(this).data('week-day'))
  //   if(input.attr('readonly')){
  //     input.removeAttr('readonly');
  //   }
  // });

  // $("input[name='update_schedule']").on("click", function(){
  //   input = $("#price"+$(this).data('week-day'))
  //   if(!input.attr('readonly')){
  //     input.attr('readonly', '');
  //   }
  // });

  $(document).on("click", "#doctor_schedules_table td", function(){
    var radio_button = $(this).find("input[type='radio']");
    if(radio_button.length > 0){
      var doctor_schedule_id = $(radio_button).data().scheduleId;
      var doctor_id = $(radio_button).data().doctorNo;
      var service_price = $(radio_button).data().servicePrice;
      $("td").removeClass("timeon")
      $(this).addClass("timeon");
      
      radio_button.prop("checked", true);
      $("#choose_doctor_form td[name='service_price']").html("");
      $("#choose_doctor_form td[id='doctor_id_" + doctor_id +"']").html("<h1 class=\"f-18-red\">"+ service_price +"<span class=\"f-12\">元</span></h1><p class=\"ico-ques f-12 f-org\" title=\"预约费用由医生自主定价，不同时段、不同职称、不同医院，价格不同，您可以根据自己的实际情况进行选择，就诊通不收取任何预约费用。\">服务说明</p>");
    }
  });

  $(document).on("click", "#choose_consultation_doctor_form input[type='radio']", function(){
    var doctor_id = $(this).data().doctorNo;
    var service_price = $(this).data().servicePrice;
    $("#choose_consultation_doctor_form td[name='service_price']").html("");
    $("#choose_consultation_doctor_form td[id='doctor_id_" + doctor_id +"']").html("<h1 class=\"f-18-red\">"+ service_price +"<span class=\"f-12\">元</span></h1>");
  });

});



