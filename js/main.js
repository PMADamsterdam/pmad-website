// PM|AD — kleine interactiescripts (geen frameworks nodig)

document.addEventListener('DOMContentLoaded', () => {
  // Mobiel menu
  const toggle = document.querySelector('.nav-toggle');
  const header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('nav-open');
    });
    document.querySelectorAll('.main-nav a').forEach((link) => {
      link.addEventListener('click', () => header.classList.remove('nav-open'));
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Projectfilter (alleen op projecten.html)
  const filterButtons = document.querySelectorAll('.filters button');
  const projectCards = document.querySelectorAll('.project-card');
  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        projectCards.forEach((card) => {
          const match = filter === 'alle' || card.dataset.category === filter;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  // Contactformulier — verstuurt via fetch() naar Formspree (form.action),
  // met succes-/foutmelding uit de i18n-woordenlijst.
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      const dict = (typeof PMAD_I18N !== 'undefined')
        ? (PMAD_I18N[document.documentElement.lang] || PMAD_I18N.nl)
        : null;
      const successMsg = dict ? dict['common.formSuccess'] : 'Bedankt voor je bericht!';
      const errorMsg = dict ? dict['common.formError'] : 'Er ging iets mis bij het versturen.';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
        .then((response) => {
          if (response.ok) {
            if (status) status.textContent = successMsg;
            form.reset();
          } else {
            if (status) status.textContent = errorMsg;
          }
        })
        .catch(() => {
          if (status) status.textContent = errorMsg;
        });
    });
  }

  // Jaartal in footer
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
