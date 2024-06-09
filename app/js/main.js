$(function () {
  function closeMenu() {
    $('.menu__list').removeClass('menu__list--active');
    $('.section__inner').removeClass('section__inner--active');
    $('.header').removeClass('on');
    $('.menu__btn-open').removeClass('menu__btn-open--active');
  }

  $('.about__list').slick({
    prevArrow: '<button class="slick-arrow slick-prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none"><path d="M9.21839 1L1 9L9.21839 17" stroke="white" /></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none"><path d="M9.21839 1L1 9L9.21839 17" stroke="white" /></svg></button>',
    autoplay: true
  });

  $('.questions__item-title').on('click', function () {
    var $parentItem = $(this).parent();

    if ($parentItem.hasClass('questions__item--active')) {
      $parentItem.removeClass('questions__item--active');
    } else {
      $('.questions__item').removeClass('questions__item--active');
      $parentItem.addClass('questions__item--active');
    }
  });

  $('#main').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    menu: '#menu__list',
    anchors: ['about', 'benefits', 'characteristics', 'questions', 'contacts']
  });

  $('.menu__btn-open').on('click', function () {
    $('.menu__btn-open').toggleClass('menu__btn-open--active');
    $('.menu__list').toggleClass('menu__list--active');
    $('.section__inner').toggleClass('section__inner--active');
    $('.header').toggleClass('on');
  });

  $('.menu__link').on('click', closeMenu);
  $('.logo').on('click', closeMenu);

  $(window).resize(function () {
    if ($(window).width() > 1100) {
      closeMenu();
    }
  });
});