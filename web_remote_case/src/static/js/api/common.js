var ll = ll || {};

(function(){
	ll.common = {
		test: _.partial(ll.api, '/static/js/mockData/data.json', 'get')
	};
	
})();