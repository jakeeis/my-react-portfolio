import React from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import PageContent from "./components/PageContent";
import Resume from "./components/Resume";

function Page({ currentPage }) {
  const pageRender = () => {
    switch (currentPage.name) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "PageContent":
        return <PageContent />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <h2>{currentPage.name}</h2>
      <PageContent>{pageRender()}</PageContent>
    </div>
  );
}

export default Page;
