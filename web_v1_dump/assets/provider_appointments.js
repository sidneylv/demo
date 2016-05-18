jQuery(document).ready(function() {
  $("#order_change_delayed_dt").datepicker({ 
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    changeYear: true,
    minDate: 1 
  });
});