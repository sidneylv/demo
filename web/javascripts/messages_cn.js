/*
 * Translated default messages for the jQuery validation plugin.
 * Language: CN
 * Author: Fayland Lam <fayland at gmail dot com>
 */
jQuery.extend(jQuery.validator.messages, {
  required: "此处为必填",
  remote: "请修正该字段",
  email: "请输入正确格式的电子邮件",
  url: "请输入合法的网址",
  date: "请输入合法的日期",
  dateISO: "请输入合法的日期 (ISO).",
  number: "请输入合法的数字",
  digits: "只能输入整数",
  creditcard: "请输入合法的信用卡号",
  equalTo: "请再次输入相同的值",
  accept: "请输入拥有合法后缀名的字符串",
  maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),
  minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),
  rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
  range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
  max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
  min: jQuery.validator.format("请输入一个最小为 {0} 的值")
});

function maskpop(divid){
		var getDocumentScrollHeight = $(document).scrollTop();
		 var getPoupHeight = $("#"+divid).height();
		 var getPoupTop = (getDocumentScrollHeight+($(window).height()/2) - getPoupHeight/2)>0 ? (getDocumentScrollHeight + ($(window).height()/2) - (getPoupHeight/2)):0;
		 $("#"+divid).css({"top":getPoupTop});
	$("body").append('<div id="mask" class="mask"></div>');
	$("#"+divid).show();
	
	}
function closemask(divid){
	if($("#mask").length>0){
             $("#mask").remove();
        }
		
	$("#"+divid).hide();

}
/* 更多*/
$(function($){
       $(".showmoreadd").delegate(".morechoose","click",function(){
		$(this).parent("li").css("height","auto");
		$(this).parent(".showmoreadd").parent().css("height","auto");
		$(this).removeClass("morechoose").addClass("lesschoose");
	   });
	   $(".showmoreadd").delegate(".lesschoose","click",function(){
		$(this).parent(".showmoreadd").parent().css("height","20px");
		$(this).removeClass("lesschoose").addClass("morechoose");
	   });
/*展开和输入框清空*/ 
	   $("#showorclose_a").bind("click",function(){
		
		if($("#moreinfo_doct").css("display")=='none'){
		$("#moreinfo_doct").show("fast");
		$(this).find("#flagimgsrc").attr("src","images/new/less.png");
		$(this).find("#txt_flag").html("收起介绍");		
		}
		else {
		$("#moreinfo_doct").hide();
		$(this).find("#flagimgsrc").attr("src","images/new/more.png");
		$(this).find("#txt_flag").html("查看更多");		
			}
		
	   });
	   
     $("#keywords").bind("focus",function(){
			if($(this).val()=='输入疾病、症状、医生姓名、医院……')
			{$(this).val("");}
	   }); 
	   $("#keywords").bind("blur",function(){
			if($(this).val()=='')
			{$(this).val("输入疾病、症状、医生姓名、医院……");}
	   })
/*展开和输入框清空 END*/	
})


	