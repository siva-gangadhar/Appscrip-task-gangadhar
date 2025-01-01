import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./index.css";
import BottomBar from "./components/BottomBar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Sidebar from "./components/SideBar";
import ProductDiscover from "./components/ProducDiscover";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const getFilterName = () => {
    if(isMobile) {
      return 'Filter'
    } else if (!isMobile && isOpen) {
      return 'Hide Filter'
    } else {
      return 'Show Filter'
    }
  };
  return (
    <div>
      <Header />
      {/* <ProductDiscover /> */}
      <main>
        <div className="app-container">
          <div className="filter-btn" onClick={toggleSidebar}>
              {getFilterName()}
            </div>
            <div className="container">
              <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} isMobile={isMobile} />
                <div className={`main-content ${!isMobile ? 'desktop' : ''} ${(isOpen && !isMobile) ? 'sidebar-open': ''}`}>
                  <ProductList />
              </div>
            </div>
              
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;