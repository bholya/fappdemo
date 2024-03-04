 // Initialize the datepicker
 $('.datepicker').datepicker({
     format: 'mm/dd/yyyy',
     autoclose: true
 });

  // Initialize the timepicker
 $(document).ready(function () {
     $('#timepicker').timepicker({
         showMeridian: false,
         minuteStep: 1,
         defaultTime: '12:00 AM'
     });

     $('#toggle-btn').on('click', function () {
         $('#timepicker').timepicker('show');
     });
 });