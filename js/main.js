/* ======== modal date picker ========== */
var dateToday = new Date();
$( function() {
  $( "#datum" ).datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat:'dd-M-yy',
    minDate: dateToday
  });
});
/* ======== modal date picker END========== */





/* ======== modal open i close========== */
$('.CTA').on('click', function(event) {
  event.preventDefault();
  /* Act on the event */
  $('.modal').addClass('open');
});
$('.modal .close').on('click', function(event) {
  event.preventDefault();
  /* Act on the event */
  $('.modal').removeClass('open');
});
/* ======== modal open i close END========== */