import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Loading from "../../components/loading";
import Product from "../../components/product";

export default function HomePage() {
  const [language, setLanguage] = useState("th_TH");
  const [category, setCategory] = useState(0);

  useEffect(() => {});

  return (
    <>
      <Loading />
      <Header
        language={language}
        setLanguage={setLanguage}
        setCategory={setCategory}
      />
      <Product local={language} category={category} />
      <Footer />
    </>
  );
}
