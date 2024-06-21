import logo from './beeLogo.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-warning p-3">
        <div className="container-fluid gap-3">
          <a className="navbar-brand" href="#"><img src={logo} alt="Logo-Bee" style={{width: '50px', height: '50px'}}/></a>
       
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;