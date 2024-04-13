import { useTranslation } from "react-i18next";
import "./AboutUs.css"
import { IoPerson } from "react-icons/io5";
import AboutImg from '../../assets/Designer-amico.png'

export default function AboutUs() {
const [t] = useTranslation()
    return (
    <>
      <div className="container" id="about">
      <div className="row">
        <div className="col-lg-7 col-md-6">
          <h2 className="about-title right "><IoPerson /> {t("About-h")}</h2>
          <p className="about-details Tr1 right">- {t("About-p")}</p>           
          <p className="about-details Tr2 right">- {t("About-p2")}</p>           
          <div className="detailsAbout">
            <p className="right Tr3"><i className="bi bi-caret-right-fill"></i> {t("About-details1")}</p>
            <p className="right Tr4"><i className="bi bi-caret-right-fill"></i> {t("About-details2")}</p>
            <p className="Resulte top">{t("Resulte")}</p>
            <a href="#Contact">
          <button className="top">{t("About-btn-contact")}</button>
            </a>
            <a href="#Div">
          <button className="top">{t("About-btn-more")}</button>
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <img className="about-img left" src={AboutImg} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}
