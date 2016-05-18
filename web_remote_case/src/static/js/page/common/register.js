require(['bootstrap'], function(){
	var $verifyCodeButton = $('#J_btn-verifyCode'),
		timer = null;

	function bindEvent(){
		$verifyCodeButton.on('click', getVerifyCode);
	}

	function getVerifyCode(e){
		var $this = $(e.target),
			count = 60;

		e.preventDefault();
		timer = setInterval(function(){
			if(count > 1){
				$this.text('再次获取(' + (--count) + ')');
				$this.prop('disabled', true);
				$this.addClass('btn-default--disabled');
			}else if(count <= 1){
				resetVerifyCode();
			}			
		}, 1000);		
	}

	function resetVerifyCode(){
		clearInterval(timer);
		$verifyCodeButton.text('获取验证码');
		$verifyCodeButton.prop('disabled', false);
		$verifyCodeButton.removeClass('btn-default--disabled');
	}

	function init(){
		bindEvent();
	}

	init();
});