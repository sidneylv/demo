require.config({
    baseUrl: '/static/js',
    paths: {
    	'jquery': 'lib/jquery/jquery',
    	'underscore': 'lib/underscore/underscore',        
    	'bootstrap': 'lib/bootstrap/bootstrap',
    	'pagination': 'lib/jquery-pagination/jquery-pagination',     
    },
    shim: {
       	pagination: {
       		deps: ['jquery']
       	} 
    }
});