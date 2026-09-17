const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>Nova</span>Tech
      </div>
      
      <nav className="nav-menu">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      <div className="header-action">
        <a href="#contact" className="header-btn">Get a Quote</a>
      </div>
    </header>
  );
};

export default Header;