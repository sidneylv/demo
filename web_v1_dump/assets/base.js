jQuery(document).ready(function() {
  $('form').on('click', '.remove_fields', function(e){
    $(this).prev('input[type=hidden]').val('1');
    $(this).closest('tr').hide();

    return e.preventDefault();
  });

  $('form').on('click', '.add_fields', function(e){
    var regexp, time;
    time = new Date().getTime();
    regexp = new RegExp($(this).data('id'), 'g');
    
    $(this).closest('tr').before($(this).data('fields').replace(regexp, time));

    return e.preventDefault();
  });
});

function fillProvinces(province_control){
  $.ajax({
    url: '/districts/provinces'
  }).done(function(data){
    $(province_control).empty();
    $(data).each(function(index, item){
      $(province_control).append(new Option(item));
    });
    $(province_control).change();
  });
}

function fillCities(province_control, city_control){
  $.ajax({
    url: "/districts/cities?province=" + encodeURIComponent($(province_control).val())
  }).done(function(data){
    $(city_control).empty();
    $(data).each(function(index, item){
      $(city_control).append(new Option(item));
    });
    $(city_control).change();
  });
}

function fillRegions(province_control, city_control, region_control){
  var province_val = encodeURIComponent($(province_control).val());
  var city_val = encodeURIComponent($(city_control).val());
  $.ajax({
    url: "/districts/regions?province=" + province_val + "&city=" + city_val
  }).done(function(data){
    $(region_control).empty();
    $(data).each(function(index, item){
      $(region_control).append(new Option(item));
    });
    $(region_control).change();
  });
}

function openwindow(url, name, iwidth, iheight){
  var itop = (window.screen.height - 30 - iheight) / 2;
  var ileft = (window.screen.width - 10 - iwidth) / 2;
  window.open(url, name, 'height='+ iheight +',width='+ iwidth +',top='+ itop +',left='+ ileft +',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
}