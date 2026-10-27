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
        }, 400, "easeInOutExpo");
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

  // Highlight the current fully funded PhD studentship in the Join us section.
  if ($('#join .col-lg-7').length && $('#phd-studentship-2026').length === 0) {
    var $phdCard = $(
      '<div class="funding-card mb-4" id="phd-studentship-2026">' +
        '<p class="eyebrow mb-2">Open PhD studentship</p>' +
        '<h3>Fully funded PhD: maternal metabolism and the developing human brain</h3>' +
        '<p>We are recruiting a PhD student through the BBSRC EASTBIO Doctoral Training Partnership. The project will explore how maternal metabolism shapes the developing human brain, with a particular focus on the choroid plexus using human iPSC-derived brain organoids.</p>' +
        '<p><strong>Deadline: 16 November 2026</strong> · Open to UK and international applicants.</p>' +
        '<p class="mb-0"><a href="phd-maternal-metabolism-choroid-plexus-organoids.html"><strong>Read about the project</strong></a> &nbsp;·&nbsp; <a href="https://www.findaphd.com/phds/project/eastbio-how-does-maternal-metabolism-shape-the-developing-human-brain-exploring-the-choroid-plexus-using-ipsc-derived-brain-organoids/?p200985" target="_blank" rel="noopener noreferrer">View the FindAPhD advert</a></p>' +
      '</div>'
    );

    $('#join .col-lg-7 .lead').after($phdCard);
  }

  // Older outreach item kept as a lower-priority card at the end of the section.
  if ($('#outreach .outreach-grid').length && $('#dementia-donation-outreach').length === 0) {
    var $dementiaCard = $(
      '<article class="outreach-card" id="dementia-donation-outreach">' +
        '<img src="./img/Dementia_donation_resizedjpg.jpg" alt="Peter and Avril Gray with Eunchai Kang and Daniel Berg at the University of Aberdeen dementia research donation" loading="lazy">' +
        '<div class="outreach-copy">' +
          '<p class="outreach-type">Community support · Dementia research</p>' +
          '<h3><a href="https://www.abdn.ac.uk/news/22725/" target="_blank" rel="noopener noreferrer">Local couple raise funds for dementia research</a></h3>' +
        '</div>' +
      '</article>'
    );

    $dementiaCard.find('img').on('error', function() {
      $(this).hide();
    });

    $('#outreach .outreach-grid').append($dementiaCard);
  }

})(jQuery); // End of use strict
