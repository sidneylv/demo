jQuery(document).ready(function() {
  $("#new_message").validate({
    errorPlacement: function(label, element) {
        label.addClass('form_hint');
        label.insertAfter(element);
    },
    wrapper: 'span'
  });
});