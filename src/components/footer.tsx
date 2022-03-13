export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-up">
        <a href="#" id="scrollToTopButton">
          <span className="arrow_carrot-up" />
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer__logo">
              <a href="./index.html">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer__nav">
              <ul>
                <li className="active">
                  <a href="./index.html">Homepage</a>
                </li>
                <li>
                  <a href="./categories.html">Categories</a>
                </li>
                <li>
                  <a href="./blog.html">Our Blog</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <p>
              Copyright © All rights reserved | This template is made with
              <i className="fa fa-heart" aria-hidden="true" /> by
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
