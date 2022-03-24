import Footer from "../../components/footer";
import Header from "../../components/header";
import Loading from "../../components/loading";
import Product from "../../components/product";

export default function HomePage() {
  return (
    <>
      <Loading />
      <Header />
      <Product local={"th_TH"} />
      <Footer />
    </>
  );
}
