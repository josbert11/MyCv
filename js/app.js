(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*------------------------------
    Detact Mobile Browser
-------------------------------*/

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  alert('Es un cel');
}
window.onload = function () {
  $('body').removeClass('fade');
};
$(document).ready(function () {
  $('.nav-link').click(function () {
    $.fn.fullpage.moveTo(3);
    var svg_1 = $('.tring-fixed');
    var svg_2 = $('.tring-fixed_2');
    var nav_b = $('#exta');
    svg_1.css('transform', 'translate(-130px)');
    svg_2.css({ transform: "translateX(280px) translateY(500px)" });
    nav_b.css({ left: '-150px' });
    var fixed_menu_in = anime({ targets: ' .nav-fixed', easing: 'easeOutExpo', translateX: 0 });

    nav_b.css({ left: '0' });
  });

  var keyframes = anime({
    targets: '.page-- .rightFade',
    easing: 'easeOutExpo',
    translateX: [{ value: 0, duration: 2500, elasticity: 0 }],
    opacity: {
      value: [0, 1],
      duration: 3500
    }
  });

  var tring = anime({
    targets: ' .tring',
    easing: 'easeOutExpo',
    translateX: [{ value: 0, duration: 3500, elasticity: 0 }],
    opacity: {
      value: [0, 1],
      duration: 3500
    }
  });
  var bd2 = anime({
    targets: '.bd2',
    rotate: '315deg',
    easing: 'easeOutExpo',
    duration: 3000
  });
  var tring2 = anime({
    targets: ' .tring2',
    easing: 'easeOutExpo',
    translateX: [{ value: 0, duration: 3500, elasticity: 0 }],
    opacity: {
      value: [0, 1],
      duration: 3500
    }
  });

  $('#fullpage').fullpage({
    menu: '#menu',
    navigation: true,
    slidesNavigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['- 01', '- 02', '- 03'],
    showActiveTooltip: true,
    lockAnchors: true,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    //Design
    controlArrows: true,
    verticalCentered: true,

    anchors: ['firstPage', 'secondPage', 'threePage'],
    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);
      var svg_1 = $('.tring-fixed');
      var svg_2 = $('.tring-fixed_2');
      var nav_b = $('#exta');
      //using index
      if (index == 1) {
        $('.main-screen-fixed').addClass('is-none');
        svg_1.css('transform', 'translate(-460px)');
        svg_2.css('transform', 'translate(460px)');
        nav_b.css('left', '-150px');
        $('#exta1').css('left', '0');
        $('.name-page').css({ transform: " translateY(0px)" });

        var childNodes = $('#article_2').children();
        for (var i = 0; i < childNodes.length; i++) {
          if (childNodes[i].nodeType !== 6) {
            childNodes[i].classList.remove("active");
          }
        }
      }
      if (index == 2) {
        var childNodes = $('#article_2').children();
        for (var i = 0; i < childNodes.length; i++) {
          if (childNodes[i].nodeType !== 6) {
            childNodes[i].classList.add("active");
          }
        }

        svg_1.css('transform', 'translate(-130px)');
        svg_2.css({ transform: "translateX(280px) translateY(500px)" });
        nav_b.css({ left: '0' });
        var fixed_menu_in = anime({ targets: ' .nav-fixed', easing: 'easeOutExpo', translateX: 0 });
      }
      if (index == 3) {
        var childNodes = $('#article_2').children();
        for (var i = 0; i < childNodes.length; i++) {
          if (childNodes[i].nodeType !== 6) {
            childNodes[i].classList.remove("active");
          }
        }
        svg_1.css({ transform: "translateY(430px) translateX(-230px) rotate(40deg)" });
        svg_2.css({ transform: "translateX(160px) rotate(54deg) translateY(-68px)" });
        nav_b.css({ left: '-150px' });
        var fixed_menu_in = anime({ targets: ' .nav-fixed', easing: 'easeOutExpo', translateX: 0 });
        $('#fp-nav').css('top', '90%');
      }

      //using anchorLink
    },
    onLeave: function (index, nextIndex, direction) {
      var leavingSection = $(this);
      var nav_b = $('#exta');

      //after leaving section 2
      if (index == 1 && direction == 'down') {
        $('.main-screen-fixed').removeClass('is-none');
        $('#fp-nav ul li .fp-tooltip').css('color', '#131116');
      } else if (index == 2 && direction == 'up') {
        $('#fp-nav ul li .fp-tooltip').css('color', '#f8f8f8');
        $('.tring-fixed').removeClass('is-none');
        nav_b.css('left', '-150px');
        //var fixed_menu_out = anime({targets: ' .nav-fixed',easing: 'easeOutExpo',opacity: {value: [0, 1],duration: 500}})
        var fixed_menu_out = anime({ targets: ' .nav-fixed', easing: 'easeOutExpo', translateX: 200 });
      } else if (index == 2 && direction == 'down') {
        $('#fp-nav').css('top', '90%');
      } else if (index == 3 && direction == 'up') {
        $('#fp-nav').css('top', '50%');
        $('.tring-fixed').removeClass('is-none');
        nav_b.css('left', '-150px');
        //var fixed_menu_out = anime({targets: ' .nav-fixed',easing: 'easeOutExpo',opacity: {value: [0, 1],duration: 500}})
        var fixed_menu_out = anime({ targets: ' .nav-fixed', easing: 'easeOutExpo', translateX: 200 });
      }
    }

  });
  var mright = '30px';

  var fader = $('#guide-content');
  var margin = mright;
  var child = 0;
  for (var j = 0; j < child; j++) {
    var child_parent = document.createElement('div');
    child_parent.className = 'child';
    fader.append(child_parent);
    $('.child').css('margin-right', margin);
  }

  //Scroll WOW

});

},{}]},{},[1]);
