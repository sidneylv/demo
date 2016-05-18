var ll = ll || {};

var utils = {
    /**
     * 请求api
     * @param url 请求地址
     * @param type 请求类型
     * @param dataGet get数据
     * @param dataPost post数据
     * @returns {Promise}
     */
    api: function (url, type, dataGet, dataPost){
        var def = $.Deferred();

        if(dataGet){
            url = url + (~url.indexOf('?') ? '&' : '?') + $.param(dataGet);
        }

        var ajax = $.ajax({
            url: url,
            type: type || 'get',
            dataType: 'json',
            data: dataPost,
            cache: false
        }).done(function(res){
            if(res && res.error_code == ll.error_code.success){
                def.resolve(res);
            }else{
                def.reject(res);
            }
        }).fail(function(e){
            def.reject(e);
        });

        var ret = def.promise();
        ret.abort = ajax.abort;
        return ret;
    },
    /*
    *错误码
    */
    error_code: {
        success: 200
    }
};

$.extend(ll, utils);

if(window.console === undefined){
    window.console = {};
    window.console.log = function(){};
}

