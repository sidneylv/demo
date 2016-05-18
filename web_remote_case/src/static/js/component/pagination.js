define(['pagination'], function(){
	/*
	*pagination
	*@param config: {}
	*@param config.id pagintaion id required
	*@param config.api function ajax function required
	*@param config.condition {} ajax请求参数
	*@param config.callback function 处理返回的data数据
	*@param config.config {} pagination config
	*/
	return {
		generate: function(config){
			var options,
				params = {},
				iMaxentries,
				config = config || {};

			options = {
				items_per_page: 10,
				num_display_entries: 5,
				num_edge_entries: 1,
				link_to: 'javascript:;',
				prev_text: '<',
				next_text: '>',													
				load_first_page: false,
				show_jump: true,
				jump_text: '跳转'
			};

			if(config.config) $.extend(options, config.config);

			params.page = 0;
			params.size = options.items_per_page;

			if(config.condition) $.extend(params, config.condition);

			config.api(params)
				.done(function(data){
					iMaxentries = data.total;
					if(typeof config.callback == 'function') config.callback(data);
					options.callback = function(index){
						params.page = index;
						config.api(params)
							.done(function(data){
								if(typeof config.callback == 'function') config.callback(data);
							});						
					};
					$('#' + config.id).pagination(iMaxentries, options);
				})
				.fail(function(){
					console.log('err')
				})
		}
	};
});