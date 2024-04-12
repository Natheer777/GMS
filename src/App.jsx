import { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import {Home} from './pages/index'
import './App.css'
import HashLoader from "react-spinners/HashLoader";
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";



const languages = [
  
  {
    code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      country_code: "ar",
    },
  ];
  function App() {
  
    const [t] = useTranslation();

    //////////////////////////////////

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }, []);
  

////////////////////////////////////////

    useEffect(() => {
      const up = document.querySelectorAll(".up");
  
      const handleScroll = () => {
        window.scrollY >= 120
          ? up.forEach((item) => item.classList.add("look"))
          : up.forEach((item) => item.classList.remove("look"));
      };
  
      const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
  
      window.addEventListener("scroll", handleScroll);
      up.forEach((item) => item.addEventListener("click", handleScrollToTop));
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        up.forEach((item) =>
          item.removeEventListener("click", handleScrollToTop)
        );
      };
    }, []);
    useEffect(() => {
      const up = document.querySelectorAll(".social");
  
      const handleScroll = () => {
        window.scrollY >= 200
          ? up.forEach((item) => item.classList.add("look"))
          : up.forEach((item) => item.classList.remove("look"));
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

/////////////////////////////////////////////////

    useEffect(() => {
      setInterval(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            } else {
              entry.target.classList.remove("show");
            }
          });
        });
  
        const leftElements = document.querySelectorAll(".left");
        const rightElements = document.querySelectorAll(".right");
        const hiddenElements = document.querySelectorAll(".hidden");
        const topElements = document.querySelectorAll(".top");
        leftElements.forEach((el) => observer.observe(el));
        rightElements.forEach((el) => observer.observe(el));
        hiddenElements.forEach((el) => observer.observe(el));
        topElements.forEach((el) => observer.observe(el));
  
        return () => {
          leftElements.forEach((el) => observer.unobserve(el));
          rightElements.forEach((el) => observer.unobserve(el));
          hiddenElements.forEach((el) => observer.unobserve(el));
          topElements.forEach((el) => observer.unobserve(el));
        };
      });
    }, []);

  ///////////////////////////////
  const currentLanguageCode = cookies.get("i18next") || "ar";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  // const [t] = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

//////////////////////////////////////

const [showIcons, setShowIcons] = useState(false);

const toggleIcons = () => {
  setShowIcons(!showIcons);
};

  return (
    <>

<div className="social">
        <ul onClick={toggleIcons} style={{ cursor: "pointer" }}>
          <li className="click">
            <IoChatbubbleEllipsesOutline />
          </li>
          {showIcons && (
            <>
              <li className="line top">
                <a href="">
                  <FaTelegram/>
                </a>
              </li>
              <li className="email top">
                <a href="mailto:gaithaldabbas11@gmail.com">
                  <MdEmail />
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    
    {loading ?(
      <HashLoader
      style={{}}
      className='loading'
      color={"#fa3a28"}
      loading={loading}
      size={30}
      aria-label='Loading Spinner'
      data-testid="loading"
      />
    ) : (
      <>
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  )}
  </>
  )
}

export default App
