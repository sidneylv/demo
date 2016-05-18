
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
			if($(this).val()=='输入疾病、症状、医生姓名、医院…')
			{$(this).val("");}
	   }); 
	   $("#keywords").bind("blur",function(){
			if($(this).val()=='')
			{$(this).val("输入疾病、症状、医生姓名、医院…");}
	   });
	   $("#takepic_a").bind("click",function(){
			$("#takepic").show();
	   });
	    $(".cancel_aclk").bind("click",function(){
			$("#takepic,#slecttj,#whytxt").hide();
	   }); 
	   $("#whytxt_a").bind("click",function(){
			$("#whytxt").show();
	   });
	    
	   $(".inputtext").bind("focus",function(){
			
			$(this).parent(".inputwrap").addClass("bor_blue3");
			
	   });
	   $(".inputtext").bind("blur",function(){
			
			$(this).parent(".inputwrap").removeClass("bor_blue3");
	   });
	   $("#slecttj_a").bind("click",function(){
			$("#slecttj").show();
	   });
	    $(".showmore").bind("click",function(){
			if($(this).find(".slessspan").length>0){
				$("#mr").html("收起");
				$(this).find(".iconbg").removeClass("slessspan").addClass("smorespan");
				//alert($(this).parent().parent("li"));
				$(this).parent().parent("li").css("height","auto");
			
			}
			else
			{
				$("#mr").html("更多");
				$(this).find(".iconbg").removeClass("smorespan").addClass("slessspan");	
				$(this).parent().parent("li").css("height","42px");
				}
	   });
})


function getScrollTop() { 
var scrollTop = 0; 
if (document.documentElement && document.documentElement.scrollTop) { 
scrollTop = document.documentElement.scrollTop; 
} 
else if (document.body) { 
scrollTop = document.body.scrollTop; 
} 
return scrollTop; 
} 


function getClientHeight() { 
var clientHeight = 0; 
if (document.body.clientHeight && document.documentElement.clientHeight) { 
clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight); 
} 
else { 
clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight); 
} 
return clientHeight; 
} 


function getScrollHeight() { 
return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); 
} 


