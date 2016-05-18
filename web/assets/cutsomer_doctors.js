jQuery(document).ready(function() {
  $("input[name='show_resume']").on("click", function(){
    var url = $(this).data().dirUrl;
    window.open(url, '_blank');
  });
  
});