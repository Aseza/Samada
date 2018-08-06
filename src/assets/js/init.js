
$(document).ready(function () {
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
	$('.modal').modal();
    $('.collapsible').collapsible();
    $('.datepicker').pickadate({
        selectMonths: true, 
        selectYears: 15,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        formatSubmit: 'yyyy-mm-d',
        closeOnSelect: true, 
        container: undefined, 
      });
            
});
