function display_dt() {
  mytime = setTimeout("dt()", 1000);
}
function dt() {
  var x = new Date();
  var month = x.getMonth() + 1;
  var day = x.getDate();
  var year = x.getFullYear() - 2000;
  var hour = x.getHours();
  var minute = x.getMinutes();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  document.getElementById("datetime").innerHTML =
    day + "." + month + "." + year + " " + hour + ":" + minute;
  display_dt();
}

const tooltip = document.getElementById("tooltip");

function copy() {
  navigator.clipboard.writeText("hello@onedoteight.studio").then(() => {
    $(document).ready(function () {
      $("#tooltip").addClass("show");
      setTimeout(() => {
        $("#tooltip").removeClass("show");
      }, 3000);
    });
  });
}

$(document).ready(function () {
  var slideIndex = 0;
  var slides = $(".slide");

  function showSlides() {
    slides.removeClass("show");
    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides.eq(slideIndex - 1).addClass("show");
    setTimeout(showSlides, 400);
  }

  showSlides();
});
