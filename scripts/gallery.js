$(document).ready(function (){
  var images = [
    "images/events/maf/1.jpg",
    "images/events/maf/2.jpg",
    "images/events/maf/3.jpg",
    "images/events/maf/4.jpg",
    "images/events/maf/5.jpg",
    "images/events/maf/6.jpg",
    "images/events/maf/7.jpg",
    "images/events/maf/8.jpg",
    "images/events/maf/9.jpg",
  ]
  var imageIndex = 0;

  $(".next").on("click", function() {
    imageIndex = (imageIndex + 1) % images.length;
    $("#img1").attr("src", images[imageIndex]);
  });

  $(".prev").on("click", function() {
    imageIndex = (imageIndex - 1) % images.length;
    $("#img1").attr("src", images[imageIndex]);
    if (imageIndex <= 0) {
      imageIndex = images.length;
    }
  });
})
