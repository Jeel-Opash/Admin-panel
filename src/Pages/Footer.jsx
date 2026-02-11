
import '../style/Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          &copy; {currentYear} <strong>YourCompany Admin</strong>. All rights reserved.
        </div>
        <div className="footer-links">
          <a href="#">Support</a>
          <a href="#">Privacy</a>
          <span className="footer-version">
            v1.0.0
          </span>
        </div>
      </div>
    </footer>
  );
};
