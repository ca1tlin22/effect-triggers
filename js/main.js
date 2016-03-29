$('.btn-show-hide').on('click', function () {
  $('.box').toggleClass('is-shown');
});

$('.btn-move').on('click', function () {
  $('.diamond').toggleClass('is-moving');
});

$('.btn-collapse-expand').on('click', function () {
  $('.panel').toggleClass('is-squashed');
});

$('.btn-bounce').on('click', function () {
  $('.circle').toggleClass('bounces');
});

$('.btn-append').on('click', function () {
  $('.list').append('<li>New List Item</li>');
});
