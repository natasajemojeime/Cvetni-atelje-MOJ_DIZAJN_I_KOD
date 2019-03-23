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