// date and time

function display_dt() {
  mytime = setTimeout("dt()", 1000);
}

function dt() {
  var x = new Date();

  var utc = x.getTime() + x.getTimezoneOffset() * 60000;
  var gmt2 = new Date(utc + 2 * 60 * 60000);

  var month = gmt2.getMonth() + 1;
  var day = gmt2.getDate();
  var year = gmt2.getFullYear() - 2000;
  var hour = gmt2.getHours();
  var minute = gmt2.getMinutes();

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;

  document.getElementById("datetime").innerHTML =
    day + "." + month + "." + year + " " + hour + ":" + minute;

  display_dt();
} 

// lazy loader desktop

document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.onload = function () {
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
          };
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
  }
});

// tooltip

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

// campaign modal

$(function () {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");

  if (
    utmSource === "qr_code" &&
    utmMedium === "sticker" &&
    utmCampaign === "globetrotter"
  ) {
    $("#campaign").show();
    $("#preload").hide();
  }

  $("#close-campaign").on("click", function () {
    $("#campaign").hide();
    $("#preload").show();
  });
});

// slideshow mobile

$(document).ready(function () {
  var slideIndex = 0;
  var slides = $(".slide");
  var slideshowTimeout;

  slides.each(function (index, slide) {
    $(slide).on("touchstart", preventCopy); // simple touch events
    $(slide).on("gesturestart", preventCopy); // events with more than one finger
  });

  function preventCopy(event) {
    event.preventDefault();
  }

  function showSlides() {
    slides.removeClass("show");
    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides.eq(slideIndex - 1).addClass("show");
    slideshowTimeout = setTimeout(showSlides, 400);
  }

  function startSlideshow() {
    slideshowTimeout = setTimeout(showSlides, 400);
  }

  function stopSlideshow() {
    clearTimeout(slideshowTimeout);
  }

  // Add touchstart and touchend event listeners
  $(".slideshow").on("touchstart", function () {
    stopSlideshow();
  });

  $(".slideshow").on("touchend", function () {
    startSlideshow();
  });

  // Start the slideshow initially
  startSlideshow();
});
