(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Homepage SEO and navigation enhancements. The existing static metadata remains
  // as a fallback; these additions expose the new research and profile pages from
  // the current one-page layout without changing its visual design.
  var isHomepage = location.pathname === '/' || /\/index\.html$/.test(location.pathname);
  if (isHomepage) {
    document.title = 'Kang/Berg Lab | Human Brain Development & Organoids | University of Aberdeen';

    var description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', 'The Kang/Berg Lab at the University of Aberdeen studies human brain development, neural stem cells, neurogenesis, brain organoids, maternal inflammation and neurodegeneration.');
    }

    if (!document.querySelector('link[rel="canonical"]')) {
      var canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', 'https://kangberglab.com/');
      document.head.appendChild(canonical);
    }

    var researchTargets = [
      'neural-stem-cells-neurogenesis.html',
      'human-brain-organoids.html',
      'maternal-inflammation-il17a.html',
      'neurodegeneration-brain-ageing.html'
    ];

    $('#research .research-card').each(function(index) {
      if (!researchTargets[index]) return;
      var $card = $(this);
      if ($card.find('.research-page-link').length) return;
      $('<p class="research-page-link" style="margin-top:1rem;margin-bottom:0;"><a></a></p>')
        .find('a')
        .attr('href', researchTargets[index])
        .text('Read more')
        .end()
        .appendTo($card);
    });

    if ($('#research .research-overview-link').length === 0) {
      $('<p class="research-overview-link" style="margin-top:1.5rem;"><a class="btn btn-primary" href="research.html">Explore all research</a></p>')
        .insertAfter('#research .methods-note');
    }

    $('#members .people-grid-pi .person-card').each(function() {
      var $card = $(this);
      var name = $.trim($card.find('h4').first().text());
      var href = null;
      if (name === 'Eunchai Kang') href = 'eunchai-kang.html';
      if (name === 'Daniel A. Berg') href = 'daniel-berg.html';
      if (href && $card.find('.profile-page-link').length === 0) {
        $('<p class="profile-page-link" style="margin-top:0.65rem;"><a></a></p>')
          .find('a')
          .attr('href', href)
          .text('Full profile')
          .end()
          .appendTo($card.find('div').first());
      }
    });
  }

})(jQuery); // End of use strict
