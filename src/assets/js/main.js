// $(window).on("load", function () {

// });

$(function () {


  $(".menuButton").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".topMenu__outer").slideUp(200);
      $("body").removeClass("stop");
    } else {
      $(this).addClass("open");
      $(".topMenu__outer").slideDown(200);
      $("body").addClass("stop");
    }
  });

  $(".go_to1").on("click", function () {
    var scroll_el = $(".go_adr1");
    // headerHeight = $(".header__area").height();
    if ($(scroll_el).length != 0) {
      $("html, body").animate({ scrollTop: $(scroll_el).offset().top /*- headerHeight*/ }, 1000);
    }
    return false;
  });

  $("table").wrap('<div class="table_outer"></div>');

  $(".toTop").hide();
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 0) {
      $(".toTop").fadeIn();
    } else {
      $(".toTop").fadeOut();
    }
  });
  $(".toTop").click(function() {
    $("body,html").animate({ scrollTop: 0 }, 400);
    return false;
  });
});

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

if ($(".map__area").length) {
  ymaps.ready(init1);

  function init1() {
    var myMap = new ymaps.Map("map", {
      center: [51.53106409505919,46.04686637979697],
      zoom: 17,
      controls: ["zoomControl"]
    });

    myMap.behaviors.disable("scrollZoom");
    if (isMobile.any()) {
      myMap.behaviors.disable("drag");
    }

    var myGeoObjects = [];

    myGeoObjects[0] = new ymaps.Placemark(
      [51.53106409505919,46.04686637979697],
      {
        balloonContentHeader:
          '<div class="baloon__top">Экспертный центр ДЕВАЙС</div>' +
          '<div class="baloon__description">Все виды экспертиз</div>',
        balloonContentBody:
          '<div class="baloon__content"><img src="assets/img/logo-map.svg" height="47" width="150">' +
          '<a href="tel:+79376397000">8 (8452) 93-30-88</a>',
        balloonContentFooter: '<div class="baloon__footer">Саратов, ул. Октябрьская, д.44, офис №6</div>',
        clusterCaption: "Все виды экспертиз",
        hintContent: '<div class="baloon__hit">Экспертный центр ДЕВАЙС</div>'
      },
      {

        iconLayout: "default#image",
        iconImageHref: "assets/img/marker.png",
        iconImageSize: [31, 50],
        iconImageOffset: [-15, -50]
      }
    );
    var clusterIcons = [
      {
        href: "/images/pointer.png",
        size: [31, 40],
        offset: [0, 0]
      }
    ];

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
      clusterBalloonContentLayout: "cluster#balloonCarousel",
      clusterBalloonPanelMaxMapArea: 0,
      clusterBalloonContentLayoutWidth: 300,
      clusterBalloonContentLayoutHeight: 200,
      clusterBalloonPagerSize: 5,
      clusterBalloonPagerType: "marker"
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
  }
}

if ($(".map__area").length) {
  ymaps.ready(init2);

  function init2() {
    var myMap = new ymaps.Map("map2", {
      center: [55.708194031615065,37.6542404351959],
      zoom: 17,
      controls: ["zoomControl"]
    });

    myMap.behaviors.disable("scrollZoom");
    if (isMobile.any()) {
      myMap.behaviors.disable("drag");
    }

    var myGeoObjects = [];

    myGeoObjects[0] = new ymaps.Placemark(
      [55.70807893624359,37.65165478570555],
      {
        balloonContentHeader:
          '<div class="baloon__top">Экспертный центр ДЕВАЙС</div>' +
          '<div class="baloon__description">Все виды экспертиз</div>',
        balloonContentBody:
          '<div class="baloon__content"><img src="assets/img/logo-map.svg" height="47" width="150">' +
          '<a href="tel:+74993913088">8 (499) 391-30-88</a>',
        balloonContentFooter: '<div class="baloon__footer">Москва, ул. Ленинская Слобода, 19, 2 этаж, офис №287-1</div>',
        clusterCaption: "Все виды экспертиз",
        hintContent: '<div class="baloon__hit">Экспертный центр ДЕВАЙС</div>'
      },
      {

        iconLayout: "default#image",
        iconImageHref: "assets/img/marker.png",
        iconImageSize: [31, 50],
        iconImageOffset: [-15, -50]
      }
    );
    var clusterIcons = [
      {
        href: "/images/pointer.png",
        size: [31, 40],
        offset: [0, 0]
      }
    ];

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
      clusterBalloonContentLayout: "cluster#balloonCarousel",
      clusterBalloonPanelMaxMapArea: 0,
      clusterBalloonContentLayoutWidth: 300,
      clusterBalloonContentLayoutHeight: 200,
      clusterBalloonPagerSize: 5,
      clusterBalloonPagerType: "marker"
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
  }
}
