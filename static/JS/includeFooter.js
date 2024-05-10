document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.createElement('footer'); // Create a footer element
    footerContainer.classList.add('footer'); // Add the CSS class for styling
  
    footerContainer.innerHTML = `
      <h6>Correciones del tp a mi correo: <a href="mailto:ejemplo@gmail.com">carnelosjoaquin@gmail.com</a></h6>
      <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a>
      <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook" aria-hidden="true"></i></a>
      <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube" aria-hidden="true"></i></a>
      Realizado el 09/05/2024
    `;
  
    footerContainer.style.cssText = `
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center; /* Optional: Center content if desired */
    `;

    document.body.appendChild(footerContainer);
  });
  