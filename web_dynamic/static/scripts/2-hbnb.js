$(function () {
  const amenitiesDict = {};

  $('DIV.amenities DIV.popover INPUT').click(function () {
    const amenityId = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');

    if ($(this).is(':checked')) {
      amenitiesDict[amenityId] = amenityName;
    } else {
      delete amenitiesDict[amenityId];
    }

    $('DIV.amenities H4').text(Object.values(amenitiesDict).join(', '));
  });

  $.get('http://172.28.50.11:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
