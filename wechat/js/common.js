	$(function () {
$(".sel_acon").bind("click", function () {showsel();});
$("#masksx,#sure_sx").bind("click", function () {closel();});

$(".seldlist dd a").bind("click", function () {
$(this).parent("dd").find("a").removeClass("on");$(this).addClass("on");

});

$("#selks").bind("click", function () {showselks();});
$("#maskks,#selks_clo,#floks a").bind("click", function () {closelks();});
$(".totop").bind("click", function () { $('html, body').animate({scrollTop:0},200)});

})
function showsel(){
		$("#masksx").show();
		$("#flosx").show();
	}
function closel(){
		$("#masksx").hide();		
		$("#flosx").hide();
	}

function showselks(){
	//var getscroll =parseInt($(document).scrollTop());
	//$("#floks").css({"top":getscroll+0});		
		$("#maskks").show();
		$("#floks").show();
	}
function closelks(){
		$("#maskks").hide();		
		$("#floks").hide();
	}

$(".hasdelt input:first").bind("keyup",function(e){
            if($(this).val().length>0){$(this).parent(".hasdelt").find(".delinput").show();}
            else{$(".delinput").hide();}
           
       });
       $(".delinput").bind("click",function(){
            $(".hasdelt input").eq(0).val("");
            $(".hasdelt input").eq(0).focus();
       		$(".delinput").hide();
       	});
