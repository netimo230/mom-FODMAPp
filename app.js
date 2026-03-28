// app.js — helpers & mobile nav
// Mobile bottom nav (graceful fallback)
(function() {
  const isMobile = window.innerWidth <= 900;
  if (!isMobile) return;

  const mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  mobileNav.innerHTML = `
    <button class="mnav-btn active" data-section="dashboard">🏠<span>Accueil</span></button>
    <button class="mnav-btn" data-section="recipes">🍽️<span>Recettes</span></button>
    <button class="mnav-btn" data-section="fridge">🧊<span>Frigo IA</span></button>
    <button class="mnav-btn" data-section="journal">📓<span>Journal</span></button>
  `;
  document.body.appendChild(mobileNav);

  const style = document.createElement('style');
  style.textContent = `
    .mobile-nav {
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 200;
      background: rgba(250,248,243,0.95);
      backdrop-filter: blur(10px);
      border-top: 1px solid #f0ece2;
      display: flex; justify-content: space-around;
      padding: 8px 0 max(8px, env(safe-area-inset-bottom));
    }
    .mnav-btn {
      background: none; border: none; cursor: pointer;
      display: flex; flex-direction: column; align-items: center; gap: 3px;
      font-size: 20px; padding: 4px 12px; border-radius: 10px;
      transition: background 0.2s;
    }
    .mnav-btn span { font-size: 10px; color: #9e8e80; font-family: 'DM Sans', sans-serif; }
    .mnav-btn.active { background: #eef4ee; }
    .main { padding-bottom: 80px; }
  `;
  document.head.appendChild(style);

  mobileNav.querySelectorAll('.mnav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      mobileNav.querySelectorAll('.mnav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.getElementById('section-' + btn.dataset.section).classList.add('active');
    });
  });
})();
