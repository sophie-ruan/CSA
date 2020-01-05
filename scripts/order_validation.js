$(document).ready(function () {
$("#order").on("submit", function() {
  var valid = true;

  if ( $("#name").prop("validity").valid ) {
    $("#name_error").addClass("hidden");
  } else {
    $("#name_error").removeClass("hidden");
    valid = false;
  };

  if ( $("#email").prop("validity").valid ) {
    $("#email_error").addClass("hidden");
  } else {
    $("#email_error").removeClass("hidden");
    valid = false;
  };

  if ( $("#date").prop("validity").valid ) {
    $("#date_error").addClass("hidden");
  } else {
    $("#date_error").removeClass("hidden");
    valid = false;
  };

  if ( $("#time").prop("validity").valid ) {
    $("#time_error").addClass("hidden");
  } else {
    $("#time_error").removeClass("hidden");
    valid = false;
  };

  return valid;
});

});
