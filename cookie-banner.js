class CookieBanner {
  constructor() {
    this.cookieBanner = document.createElement('div');
    this.cookieBanner.className = 'cookie-banner';
    this.cookieBanner.innerHTML = `
      <div class="cookie-content">
        <p>Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa política de cookies.</p>
        <div class="cookie-buttons">
          <button class="cookie-accept">Aceitar</button>
          <a href="privacy-policy.html" class="cookie-more">Saiba mais</a>
        </div>
      </div>
    `;
  }

  init() {
    if (!this.getCookie('cookieConsent')) {
      document.body.appendChild(this.cookieBanner);
      this.setupEventListeners();
    }
  }

  setupEventListeners() {
    const acceptButton = this.cookieBanner.querySelector('.cookie-accept');
    acceptButton.addEventListener('click', () => {
      this.setCookie('cookieConsent', 'true', 365);
      this.cookieBanner.remove();
    });
  }

  setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
  }

  getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}

// Inicializar o banner de cookies quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = new CookieBanner();
  cookieBanner.init();
});
