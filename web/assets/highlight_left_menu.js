var HighlightLeftMenu = function () {
  var handleSelectMenu = function(){
    current_menu = $.cookie('_customer_menu');
    
    if(current_menu != null && current_menu != "menu_dashboard"){
      $("#" + current_menu).addClass("on"); 
    }else{
      $("#menu_dashboard").addClass("on");
    }

    $('body').on('click', 'dl > dd > a', function(e){
      $.removeCookie('_customer_menu', { path: '/' });
      $.cookie('_customer_menu', $(this).attr("id"), { path: '/' });
    });

    $('body').on('click', '.application', function(e){
      $.removeCookie('_customer_menu', { path: '/' });
      $.cookie('_customer_menu', 'menu_dashboard', { path: '/' });
    });

    $('body').on('click', '#header_logo', function(e){
      $.removeCookie('_customer_menu', { path: '/' });
      $.cookie('_customer_menu', 'menu_dashboard', { path: '/' });
    });

    $('body').on('click', '#home_user_name', function(e){
      $.removeCookie('_customer_menu', { path: '/' });
      $.cookie('_customer_menu', 'menu_dashboard', { path: '/' });
    });
    
  }

  return {
    init: function () {
      handleSelectMenu();
    }
  };
}();