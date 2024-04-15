import "./Divisions.css"
import {useTranslation} from 'react-i18next'
import img1 from '../../assets/Slogan/FAMILIES-removebg-preview.webp'
import img2 from '../../assets/Slogan/MASSING1-removebg-preview.webp'
import img3 from '../../assets/Slogan/MODEL_IN_PLACE1-removebg-preview.webp'
import img4 from '../../assets/Slogan/MODELING1-removebg-preview.webp'
import img5 from '../../assets/Slogan/TOPOSURFACE1-removebg-preview.webp'

// import img1 from "../../assets/Slogan/img1.jpg"
// import img2 from "../../assets/Slogan/img2.jpg"
// import img3 from "../../assets/Slogan/img3.jpg"
// import img4 from "../../assets/Slogan/img4.jpg"
// import img5 from "../../assets/Slogan/img5.jpg"


// import { MdFamilyRestroom } from "react-icons/md";
// import { FaPlaceOfWorship } from "react-icons/fa6";
// import { MdOutlineIntegrationInstructions } from "react-icons/md";
// import { TbTopologyRing2 } from "react-icons/tb";
// import { FaModx } from "react-icons/fa";

export default function Divisions() {
    const [t] = useTranslation()
  return (
    <>
        <div className="container mt-5">
            <h2 className='titleDivision text-center'>- {t("Divisions-h")} -</h2>
            <div className="DivisionDetails">
                <div className="top"><p className="Svg Svg1"><img src={img1} alt="" /></p><p>{t("Division-1")}</p></div>
                <div className="top"><p className="Svg Svg2"><img src={img2} alt="" /></p><p>{t("Division-2")}</p></div>
                <div className="top"><p className="Svg Svg3"><img src={img3} alt="" /></p><p>{t("Division-3")}</p></div>
                <div className="top"><p className="Svg Svg4"><img src={img4} alt="" /></p><p>{t("Division-4")}</p></div>
                <div className="top"><p className="Svg Svg5"><img src={img5} alt="" /></p><p>{t("Division-5")}</p></div>
            </div>
        </div>
    </>
  )
}
