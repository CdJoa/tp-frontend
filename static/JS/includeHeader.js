document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop();
  const headerContainer = document.createElement('nav');
  headerContainer.classList.add('navbar', 'navbar-expand-sm', 'bg-dark', 'navbar-dark');
  headerContainer.innerHTML = `
  <div class="container-fluid">
  <a class="navbar-brand ${currentPage === 'index.html' ? 'active' : ''}" href="index.html">El TP de Joaquin</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link ${currentPage === 'Consignas.html' ? 'active' : ''}" href="Consignas.html">Consignas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link ${currentPage === 'Formulario.html' ? 'active' : ''}" href="Formulario.html">Formulario</a>
      </li>
      <li class="nav-item">
        <a class="nav-link ${currentPage === 'Contacto.html' ? 'active' : ''}" href="Contacto.html">Contacto</a>
      </li>
    </ul>
  </div>
</div>
  `;
  document.body.insertBefore(headerContainer, document.body.firstChild);
});