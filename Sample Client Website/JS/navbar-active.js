document.addEventListener('DOMContentLoaded', function () {
  try {
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    let page = location.pathname.split('/').pop().toLowerCase();
    if (!page) page = '1splash.html';

    links.forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      const linkName = href.split('/').pop().toLowerCase();
      if (linkName === page) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  } catch (e) {
    // silent fail on pages without nav structure
    console && console.warn && console.warn('navbar-active script error', e);
  }
});
