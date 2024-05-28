import About from "./ui/about";
import Accompaniement from "./ui/accompaniement";
import Banner from "./ui/banner";
import Career from "./ui/career";
import ContactUs from "./ui/contact-us";
import Faq from "./ui/faq";
import News from "./ui/news";
import Services from "./ui/services";
import Testimonies from "./ui/testimonies";

export function PageHome() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Career />
      <Accompaniement />
      <Testimonies />
      <Faq />
      <ContactUs />
      <News />
    </>
  );
}
