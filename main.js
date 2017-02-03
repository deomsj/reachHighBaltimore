$(document).ready(function(){
  $('.nav-toggle').on('click', function(){
    $('.mobile-nav').toggleClass('show');
  });

  $('.dropper').on('click', function(){
    $(this).find('.drop-down').toggleClass('show');
  });

  $('.main-display').on('click', function(){
    let currentSrc = $(this).attr('src');
    console.log(currentSrc);
    let nextSrc = $('.thumbs').find("[src='"+currentSrc+"']").next().attr('src');
    console.log(nextSrc);
    $(this).attr('src',nextSrc);
  });

  $('.thumb').on('click', function(){
    let thisSrc = $(this).attr('src');
    $('.main-display').attr('src',thisSrc);
  });

});