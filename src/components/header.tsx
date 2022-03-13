export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <a href="./index.html">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <a href="./index.html">Homepage</a>
                  </li>
                  <li>
                    <a href="./categories.html">
                      Categories <span className="arrow_carrot-down" />
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="./categories.html">Categories</a>
                      </li>
                      <li>
                        <a href="./anime-details.html">Anime Details</a>
                      </li>
                      <li>
                        <a href="./anime-watching.html">Anime Watching</a>
                      </li>
                      <li>
                        <a href="./blog-details.html">Blog Details</a>
                      </li>
                      <li>
                        <a href="./signup.html">Sign Up</a>
                      </li>
                      <li>
                        <a href="./login.html">Login</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./blog.html">Our Blog</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="header__right">
              <a href="#" className="search-switch">
                <span className="icon_search" />
              </a>
              <a href="./login.html">
                <span className="icon_profile" />
              </a>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap" />
      </div>
    </header>
  );
}
