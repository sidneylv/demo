require(["component/dialog","component/pagination","bootstrap"],function(n,t){function e(){d.on("click",o),f.on("click",a),p.on("click",i),_.on("click",s),$(".J-checkReason").on("click",c)}function o(){new n({type:"success",text:"保存成功"})}function a(){$("#J_publishForm").modal("show")}function i(){$("#J_returnForm").modal("show")}function c(){var n=$(this),t=$("#"+n.attr("data-target"));$(".J-return-reason").hide(),t.show()}function s(n){var t=$(n.target),e=60;n.preventDefault(),m=setInterval(function(){e>1?(t.text("再次获取("+--e+")"),t.prop("disabled",!0),t.addClass("btn-default--disabled")):1>=e&&l()},1e3)}function l(){clearInterval(m),_.text("获取验证码"),_.prop("disabled",!1),_.removeClass("btn-default--disabled")}function r(){t.generate({id:"J_pagination-records-all",api:ll.common.test,config:{num_edge_entries:0,num_display_entries:0,show_info:!0,first_text:"首页",prev_text:"上一页",next_text:"下一页",last_text:"尾页",show_jump:!1,className:"pagination--second"},condition:{},callback:function(n){console.log(n)}})}function u(){r(),e()}var d=$("#J_save"),f=$("#J_publish"),p=$("#J_return"),_=$("#J_btn-sc"),m=null;u()});