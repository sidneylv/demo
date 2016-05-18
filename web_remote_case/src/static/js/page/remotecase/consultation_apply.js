require(['component/pagination', 'bootstrap'], function(page){
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
	}

	init();
});