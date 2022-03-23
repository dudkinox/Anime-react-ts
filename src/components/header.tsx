export default function Header() {
  const category = [
    {
      name: "ยาโอย",
      value: 0,
    },
    {
      name: "แฟนตาซี",
      value: 1,
    },
    {
      name: "ดราม่า",
      value: 2,
    },
    {
      name: "ต่อสู้",
      value: 3,
    },
    {
      name: "โรแมนติก",
      value: 4,
    },
    {
      name: "Sci-fi/ไซ-ไฟ",
      value: 5,
    },
    {
      name: "ผจญภัย",
      value: 6,
    },
    {
      name: "ประวัติศาสตร์",
      value: 7,
    },
    {
      name: "ตลก",
      value: 8,
    },
    {
      name: "ชีวิตประจำวัน",
      value: 9,
    },
    {
      name: "ดนตรี",
      value: 10,
    },
    {
      name: "โรงเรียน",
      value: 11,
    },
  ];

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
                  <li>
                    <a href="/categories">
                      หมวดหมู่ <span className="arrow_carrot-down" />
                    </a>
                    <ul className="dropdown">
                      {category.map((item) => {
                        return (
                          <li>
                            <a href={`/categories#${item.value}`}>
                              {item.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
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
