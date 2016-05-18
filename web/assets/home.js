jQuery(document).ready(function() {
  $("#home_mobile").on("focus", function(){
    $(this).removeAttr("placeholder");
  });
  $("#home_mobile").on("blur", function(){
    $(this).attr("placeholder", "输入手机号");
  });
  $("#home_password").on("focus", function(){
    $(this).removeAttr("placeholder");
  });
  $("#home_password").on("blur", function(){
    $(this).attr("placeholder", "输入密码");
  });

  $("#btn_register").on("click", function(){
    window.location.href = $(this).data("url");
  });

});


/* 切换*/
$(function($){
        var getAdvlength = $(".thebgpic").length, Advtime = 3000;
        var getAdvHeight =$("#advchange .banner_7_wrap").height(); 		
			
        if(getAdvlength>=2){
                var index = 1 ;
                var mytime = null;
                $("#chgbutts a").eq(0).addClass("on").siblings("a").removeClass("on");
                $("#chgbutts a").click(function(){index = $("#obkList a").index(this);advFun(index)});               
				$("#chgbutts a").bind("mouseenter mouseover",function(){index = $("#chgbutts a").index(this);advFun(index);if(mytime){clearInterval(mytime)}});
				$("#chgbutts a").bind("mouseleave",function(){mytime = setInterval(function(){advFun(index);index++;if(index==getAdvlength){index=0}},Advtime);});
                 mytime = setInterval(function(){advFun(index);index++;if(index==getAdvlength){index=0}},Advtime);
                }
                function advFun(n){
								$(".thebgpic").eq(n).siblings().stop(true,true).animate({opacity : 0},1000).css("z-index","9");$(".thebgpic").eq(n).show().stop(true,true).animate({opacity : 1},1000).css("z-index","11");
                                $("#chgbutts a").eq(n).addClass("on").siblings("a").removeClass("on");	
                        }
	
		$("#keywords").bind("focus",function(){
			if($(this).val()=='输入疾病、症状、医生姓名、医院……')
			{$(this).val("");}
	   }); 
	   $("#keywords").bind("blur",function(){
			if($(this).val()=='')
			{$(this).val("输入疾病、症状、医生姓名、医院……");}
	   })
})