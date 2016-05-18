require(['component/dialog', 'component/pagination', 'bootstrap'], function(Dialog, page){
	var $saveBtn = $('#J_save');
	var $publishBtn = $('#J_publish');
	var $returnBtn = $('#J_return');
	var $verifyCodeBtn = $('#J_btn-sc');
	var timer = null;


	function bindEvent(){
		$saveBtn.on('click', handleSave);
		$publishBtn.on('click', showPublishDialog);
		$returnBtn.on('click', showReturnDialog);
		$verifyCodeBtn.on('click', getVerifyCode);
		$('.J-checkReason').on('click', checkReason);
	}

	function handleSave(){
		new Dialog({
			type: 'success',
			text: '保存成功'
		})
	}

	function showPublishDialog(){
		$('#J_publishForm').modal('show');
	}

	function showReturnDialog(){
		$('#J_returnForm').modal('show');
	}

	function checkReason(e){
		var $this = $(this),
			$target = $('#' + $this.attr('data-target'));

		$('.J-return-reason').hide();
		$target.show();
	}

	function resetCheckReason(){
		$('.J-return-reason').hide();
		$('.J-return-reason:first').show();
		$('.J-checkReason').prop('checked', false);
		$('.J-checkReason:first').prop('checked', true);
		$('.J-return-input').val('');
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
		$verifyCodeBtn.text('获取验证码');
		$verifyCodeBtn.prop('disabled', false);
		$verifyCodeBtn.removeClass('btn-default--disabled');
	}

	function getRecordsList(){
		page.generate({
			id: 'J_pagination-records-all',
			api: ll.common.test,
			config: {
				num_edge_entries: 0,
				num_display_entries: 0,				
				show_info: true,				
				first_text: '首页',
				prev_text: '上一页',
				next_text: '下一页',
				last_text: '尾页',
				show_jump: false,
				className: 'pagination--second'
			},
			condition: {},
			callback: function(data){
				console.log(data);
			}
		});
	}

	function init(){
		getRecordsList();		
		bindEvent();
	}

	init();
});