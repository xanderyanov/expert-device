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
  ymaps.ready(init);

  function init() {
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
        // Зададим содержимое заголовка балуна.
        balloonContentHeader:
          '<div class="baloon__top">Экспертный центр ДЕВАЙС</div>' +
          '<div class="baloon__description">Все виды экспертиз</div>',
        // Зададим содержимое основной части балуна.
        balloonContentBody:
          '<div class="baloon__content"><img src="assets/img/logo-map.svg" height="47" width="150">' +
          '<a href="tel:+79376397000">8 (8452) 93-30-88</a>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '<div class="baloon__footer">Саратов, ул. Октябрьская, д.44, офис №6</div>',
        clusterCaption: "Все виды экспертиз",
        // Зададим содержимое всплывающей подсказки.
        hintContent: '<div class="baloon__hit">Экспертный центр ДЕВАЙС</div>'
      },
      {
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        iconImageHref: "assets/img/marker.png",
        // Размеры метки.
        iconImageSize: [31, 50],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-15, -50]
      }
    );
    // myGeoObjects[1] = new ymaps.Placemark([51.551021850477284,46.01745698280331],{
    //     clusterCaption: 'Саратовремеонт',
    //     hintContent: 'Саратовремонт!',
    //     balloonContentBody: 'Саратовремонт, Саратов, Танкистов ул., 37'
    // },{
    //     iconLayout: 'default#image',
    //     iconImageHref: 'assets/img/marker.png',
    //     iconImageSize: [30, 48],
    //     iconImageOffset: [-15, -48]
    // });

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
      // Устанавливаем стандартный макет балуна кластера "Карусель".
      clusterBalloonContentLayout: "cluster#balloonCarousel",
      // Устанавливаем собственный макет.
      //clusterBalloonItemContentLayout: customItemContentLayout,
      // Устанавливаем режим открытия балуна.
      // В данном примере балун никогда не будет открываться в режиме панели.
      clusterBalloonPanelMaxMapArea: 0,
      // Устанавливаем размеры макета контента балуна (в пикселях).
      clusterBalloonContentLayoutWidth: 300,
      clusterBalloonContentLayoutHeight: 200,
      // Устанавливаем максимальное количество элементов в нижней панели на одной странице
      clusterBalloonPagerSize: 5,
      // Настройка внешего вида нижней панели.
      // Режим marker рекомендуется использовать с небольшим количеством элементов.
      clusterBalloonPagerType: "marker"
      // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
      // clusterBalloonCycling: false,
      // Можно отключить отображение меню навигации.
      // clusterBalloonPagerVisible: false
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
  }
}
