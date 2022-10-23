export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <a href="/">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <a href="/">Homepage</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div id="mobile-menu-wrap" />
        </div>
      </div>
    </header>
  );
}
