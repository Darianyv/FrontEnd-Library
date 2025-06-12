import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Sobre nosotros</h3>
            <p>Biblioteca Digital es un proyecto dedicado a promover la lectura y el acceso al conocimiento.</p>
          </div>

          <div className="footer-section contact">
            <h3>Contacto</h3>
            <p><i className="fas fa-envelope"></i>contacto@sombrasyletras.com</p>
            <p><i className="fas fa-phone"></i> +1 234 567 890</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Sombras y letras. Todos los derechos reservados.</p>
        </div>
      </footer>
  )
}
