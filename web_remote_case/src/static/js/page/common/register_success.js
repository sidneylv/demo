require([], function(){

	function autoJump(){
		setTimeout(function(){
			window.location.href="/view/common/login.html";
		}, 4000);
	}

	function init(){
		autoJump();
	}

	init();
});