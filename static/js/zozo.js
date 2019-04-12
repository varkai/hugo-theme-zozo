'use strict';

// back-to-top
$(document).ready((function (_this) {
  return function () {
    let bt
    bt = $('#back_to_top')
    if ($(document).width() > 480) {
      $(window).scroll(function () {
        let st
        st = $(window).scrollTop()
        if (st > 30) {
          return bt.css('display', 'block')
        } else {
          return bt.css('display', 'none')
        }
      })
      return bt.click(function () {
        $('body,html').animate({
          scrollTop: 0,
        }, 800)
        return false
      })
    }
  }
})(this))

// fancybox
$(document).ready((function (_this) {
  return function() {
    if ($.fancybox) {
      $('.post_content').each(function() {
        $(this).find('img').each(function() {
          $(this).wrap(`<div class="fancybox"><a href="${this.src}" data-fancybox="gallery" data-caption="${this.title}"></a></div>`);
        });
      });
    }
  };
})(this))
