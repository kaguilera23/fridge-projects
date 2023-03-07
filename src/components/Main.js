import { useState } from "react";
import Header from "./Header";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import Footer from "./Footer"

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;
        break;
      case "Portfolio":
        return <Portfolio />;
        break;
      case "ContactMe": 
        return <ContactMe />;
        break;
      case "Resume":
        return <Resume />;
        break;
      default: 
        return <AboutMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
