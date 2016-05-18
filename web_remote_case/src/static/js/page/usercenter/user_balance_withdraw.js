require(['bootstrap'], function(){

	function bindEvent(){
		$('#J_withdraw-introduce').on('click',showWithdrawDialog);
	}

	function showWithdrawDialog(){
		$('#J_withdraw-introduce-dialog').modal('show');
	}

	function init(){
		bindEvent();
	}

	init();
});