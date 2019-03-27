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



/* ======== slajder========== */
$(window).on('load',function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
/* ======== slajder END========== */


/* ======== menjanje ponude na tri dugmeta========== */
$('.ponuda').hide();
$('#aranzmani').show();
$('.izbor_ponude').click(function(e) {
    e.preventDefault();
    $('.izbor_ponude').removeClass('aktivno');
    $(this).addClass('aktivno');
    $('.ponuda').hide();
    $('#' + $(this).attr('title')).show();
});
/* ======== ponuda END========== */











/* ======== navigacija========== */
$('.burger').on('click', function(event) {
  event.preventDefault();
  /* Act on the event */
  // $('.navigacija').addClass('open');
  // openNav();
   document.getElementById("navigacija").style.display = "block";
 });
$('.navigacija .close').on('click', function(event) {
  event.preventDefault();
  /* Act on the event */
  // $('.navigacija').removeClass('open');
  // closeNav();
  document.getElementById("navigacija").style.display = "none";
});
/* ======== mavigacija end========== */





// /* Open */
// function openNav() {
//   document.getElementById("navigacija").style.display = "block";
// }

// /* Close */
// function closeNav() {
//   document.getElementById("navigacija").style.display = "none";
// }