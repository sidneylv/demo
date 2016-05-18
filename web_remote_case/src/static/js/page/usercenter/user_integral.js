require(['bootstrap'], function(){

	function bindEvent() {
		$('#J_integral-convert-list').on('click', 'a', showDialog);
	}

	function showDialog() {
		$('#J_integral-convert-dialog').modal('show');
	}

	function init() {
		bindEvent();
	}

	init();
});