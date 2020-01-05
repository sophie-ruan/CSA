$(document).ready(function () {
  var images = ["images/about/sub1.jpg", "images/about/sub2.jpg", "images/about/sub3.jpg", "images/about/sub4.jpg"]
  var imageText = ["Join our csa fam!! -- Juliana Kim", "FINALLY FAM! -- Michelle Zhao", "love u eboard -- Sarah Tien", "looks so good! -- Kathleen Li"]
  var imageNumber = ["1 / 4", "2 / 4", "3 / 4", "4 / 4"]
  var imageIndex = 0;
  var textIndex = 0;
  var numberIndex = 0;

$(".next").on("click", function() {

   console.log('sf')
   imageIndex = (imageIndex + 1) % images.length;
   textIndex = (textIndex + 1) % imageText.length;
   numberIndex = (numberIndex + 1) % imageNumber.length;
   console.log(imageIndex)
   $("#img1").attr("src", images[imageIndex]);
   $("#stext").text(imageText[textIndex]);
   $("#number_slide").text(imageNumber[numberIndex]);
  });

  $(".prev").on("click", function() {
   imageIndex = (imageIndex - 1) % images.length;
   textIndex = (textIndex - 1) % imageText.length;
   numberIndex = (numberIndex - 1) % imageNumber.length;
   $("#img1").attr("src", images[imageIndex]);
   $("#stext").text(imageText[textIndex]);
   $("#number_slide").text(imageNumber[numberIndex]);
   if (imageIndex <= 0){
     imageIndex = images.length;
   }
   if (textIndex <= 0){
     textIndex = imageText.length;
   }
   if (numberIndex <= 0){
     numberIndex = imageNumber.length;
   }
  });
  $("#questionform").on("submit", function() {
    var valid = true;

    if ( $("#question").prop("validity").valid ) {
      $("#question_error").addClass("hidden");
    } else {
      $("#question_error").removeClass("hidden");
      valid = false;
    };
    return valid;
  });
  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
})
