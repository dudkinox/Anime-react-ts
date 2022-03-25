interface HeaderProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
}

export default function Header({
  language,
  setLanguage,
  setCategory,
}: HeaderProps) {
  const category = [
    {
      name: "ทั้งหมด",
      value: 0,
    },
    {
      name: "ยาโอย",
      value: 1,
    },
    {
      name: "แฟนตาซี",
      value: 2,
    },
    {
      name: "ดราม่า",
      value: 3,
    },
    {
      name: "ต่อสู้",
      value: 4,
    },
    {
      name: "โรแมนติก",
      value: 5,
    },
    {
      name: "Sci-fi/ไซ-ไฟ",
      value: 6,
    },
    {
      name: "ผจญภัย",
      value: 7,
    },
    {
      name: "ประวัติศาสตร์",
      value: 8,
    },
    {
      name: "ตลก",
      value: 9,
    },
    {
      name: "ชีวิตประจำวัน",
      value: 10,
    },
    {
      name: "ดนตรี",
      value: 11,
    },
    {
      name: "โรงเรียน",
      value: 12,
    },
  ];

  const handleOnclick = () => {
    setLanguage((language) => (language === "en_EN" ? "th_TH" : "en_EN"));
  };

  const selectCategory = (href: number) => {
    setCategory(href);
  };

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
                    <a href="#เลือกหมวดหมู่">
                      หมวดหมู่ <span className="arrow_carrot-down" />
                    </a>
                    <ul className="dropdown">
                      {category.map((item, index) => {
                        return (
                          <li key={index}>
                            <a
                              href={`#${item.name}`}
                              onClick={() => selectCategory(item.value)}
                            >
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
              <button
                value={language}
                onClick={handleOnclick}
                style={{
                  background: "transparent",
                  color: "white",
                  border: "none",
                }}
              >
                {language === "en_EN" ? "EN" : "TH"}
              </button>
              <a href="/">
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
