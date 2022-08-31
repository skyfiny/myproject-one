/**
 * demo.js
 * https://coidea.website
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, COIDEA
 * https://coidea.website
 */

// init variables
var tl = new TimelineMax({ paused: true, reversed: true }),
    tlContent = new TimelineMax(),
    hamburger = $('#hamburger'),
    link = $('h2').find('a');

// fadeIn body
tlContent.to('body', 1, { autoAlpha: 1 });

// navigation animation
tl.staggerTo('.product', 0.75, {
ease: Back.easeOut.config(1.7),
transformOrigin: 'right top',
cycle: {
  x: function(index, target) {
    return target.dataset.index * 64;
  },
  y: function(index, target) {
    return target.dataset.index * 6;
  },
  rotation: function(index, target) {
    return target.dataset.index * -2;
  }
}
}, -0.125);

// show content on load
$(function() {
  tlContent.play();
});

// trigger navigation
hamburger.on('click', function() {
  tl.reversed() ? tl.play() : tl.reverse();
  $(this).toggleClass('active');
});


// extra - link trigger for change page animation

link.click(linkClicked);

function linkClicked(e) {
  // prevent default click event across multiple browsers
  if (!e) var e = window.event;
    e.cancelBubble = true;
    e.returnValue = false;
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (e.preventDefault) {
    e.preventDefault();
  }

  var thishref = this.getAttribute('href');

  // reverse our main timeline
  tl.reverse().timeScale(2);
  // fadeOut body
  TweenMax.to('body', 1, {
    autoAlpha: 0,
    onComplete: goToNextPage,
    onCompleteParams: [thishref]
  }, "+=2.5");

  // prevent default click event
  return false;
}

function goToNextPage(href) {
  window.location = href;
}