$(document).ready(function (){
  var images = [
    "images/fam/fam1.png",
    "images/fam/fam2.png",
    "images/fam/fam3.png",
    "images/fam/fam4.png",
    "images/fam/fam5.png",
    "images/fam/fam6.png",
    "images/fam/fam7.png",
    "images/fam/fam8.png",
    "images/fam/fam9.png",
    "images/fam/fam10.png",
    "images/fam/fam11.png",
    "images/fam/fam12.png",
    "images/fam/fam13.png",
    "images/fam/fam14.png",
    "images/fam/fam15.png",
    "images/fam/fam16.png",
    "images/fam/fam17.png",
    "images/fam/fam18.png",
    "images/fam/fam19.png",
    "images/fam/fam20.png",
    "images/fam/fam21.png",
    "images/fam/fam22.png",
    "images/fam/fam23.png",
    "images/fam/fam24.png",
    "images/fam/fam25.png",
    "images/fam/fam26.png",
    "images/fam/fam27.png",
    "images/fam/fam28.png",
    "images/fam/fam29.png",
    "images/fam/fam30.png",
    "images/fam/fam31.png",
    "images/fam/fam32.png",
    "images/fam/fam33.png",
    "images/fam/fam34.png",
    "images/fam/fam35.png",
    "images/fam/fam36.png",
    "images/fam/fam37.png",
    "images/fam/fam38.png",
    "images/fam/fam39.png",
    "images/fam/fam40.png",
    "images/fam/fam41.png",
    "images/fam/fam42.png",
    "images/fam/fam43.png",
    "images/fam/fam44.png",
    "images/fam/fam45.png",
    "images/fam/fam46.png",
    "images/fam/fam47.png",
    "images/fam/fam48.png",
  ]

  var imageNumber = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
  "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
  "41", "42", "43", "44", "45", "46", "47", "48"
  ]

  var imageIndex = 0;

  $(".next").on("click", function() {
    imageIndex = (imageIndex + 1) % images.length;
    $("#img1").attr("src", images[imageIndex]);
    $("#number_slide").text(imageNumber[imageIndex]);
  });

  $(".prev").on("click", function() {
    imageIndex = (imageIndex - 1) % images.length;
    $("#img1").attr("src", images[imageIndex]);
    $("#number_slide").text(imageNumber[imageIndex]);
    if (imageIndex <= 0) {
      imageIndex = images.length;
    }
    if (numberIndex <= 0) {
      numberIndex = imageNumber.length;
    }
  });

  $("#fam-form").on("submit", function() {
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

    if ( $("#fam-num").prop("validity").valid ) {
      $("#num_error").addClass("hidden");
    } else {
      $("#num_error").removeClass("hidden");
      valid = false;
    };

    if ( $("#why").prop("validity").valid) {
      $("#why_error").addClass("hidden");
    } else {
      $("#why_error").removeClass("hidden");
      valid = false;
    };

    return valid;
  });

});
