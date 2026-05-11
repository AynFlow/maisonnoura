/* Maison Noura — theme.js (vanilla, ES modules) */

(() => {
  const header = document.querySelector('.site-header');

  // 1) Header opacity on scroll
  if (header) {
    const threshold = Math.min(window.innerHeight * 0.8, 720);
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > threshold * 0.5 || !document.body.classList.contains('template-index'));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 2) Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // 3) Mobile menu
  const burger = document.querySelector('[data-mobile-menu-toggle]');
  const panel = document.querySelector('[data-mobile-menu]');
  const closeBtn = document.querySelector('[data-mobile-menu-close]');
  const openMenu = () => {
    panel?.classList.add('is-open');
    document.body.classList.add('no-scroll');
    panel?.setAttribute('aria-hidden', 'false');
  };
  const closeMenu = () => {
    panel?.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    panel?.setAttribute('aria-hidden', 'true');
  };
  burger?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel?.classList.contains('is-open')) closeMenu();
  });

  // 4) Cart count
  async function refreshCartCount() {
    const els = document.querySelectorAll('[data-cart-count]');
    if (!els.length) return;
    try {
      const res = await fetch(`${window.Shopify?.routes?.root || '/'}cart.js`);
      if (!res.ok) return;
      const cart = await res.json();
      els.forEach((el) => { el.textContent = cart.item_count; });
    } catch (_) { /* noop */ }
  }
  refreshCartCount();
  document.addEventListener('cart:updated', refreshCartCount);

  // 5) Product form: variant change → update URL + price
  const variantForm = document.querySelector('[data-variant-form]');
  if (variantForm) {
    const priceEl = document.querySelector('[data-product-price]');
    const addBtn = variantForm.querySelector('[data-add-to-cart]');
    const variantInput = variantForm.querySelector('[name="id"]');
    const variants = window.__productVariants || [];

    variantForm.addEventListener('change', () => {
      const opts = [...variantForm.querySelectorAll('[data-option-index]')].map((s) => s.value);
      const match = variants.find((v) => JSON.stringify(v.options) === JSON.stringify(opts));
      if (!match) return;
      variantInput.value = match.id;
      if (priceEl && match.price_formatted) priceEl.innerHTML = match.price_formatted;
      if (addBtn) {
        addBtn.disabled = !match.available;
        addBtn.textContent = match.available ? addBtn.dataset.labelAdd : addBtn.dataset.labelSold;
      }
      const url = new URL(window.location);
      url.searchParams.set('variant', match.id);
      window.history.replaceState({}, '', url);
    });
  }
})();
