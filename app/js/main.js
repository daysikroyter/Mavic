$(function () {
  $('.about__list').slick({
    prevArrow: '<button class="slick-arrow slick-prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none"><path d="M9.21839 1L1 9L9.21839 17" stroke="white" /></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none"><path d="M9.21839 1L1 9L9.21839 17" stroke="white" /></svg></button>',
    autoplay: true
  });

  $('.questions__item-title').on('click', function () {
    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().addClass('questions__item--active');
  });

  $('#main').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    anchors: ['about', 'benefits', 'characteristics', 'questions', 'contacts']
  });
});