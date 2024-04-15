import "./Divisions.css"
import {useTranslation} from 'react-i18next'


import { MdFamilyRestroom } from "react-icons/md";
import { FaPlaceOfWorship } from "react-icons/fa6";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { TbTopologyRing2 } from "react-icons/tb";
import { FaModx } from "react-icons/fa";

export default function Divisions() {
    const [t] = useTranslation()
  return (
    <>
        <div className="container mt-5">
            <h2 className='titleDivision text-center'>- {t("Divisions-h")} -</h2>
            <div className="DivisionDetails">
                <div className="top"><p className="Svg Svg1"><MdFamilyRestroom /></p><p>{t("Division-1")}</p></div>
                <div className="top"><p className="Svg Svg2"><FaPlaceOfWorship /></p><p>{t("Division-2")}</p></div>
                <div className="top"><p className="Svg Svg3"><MdOutlineIntegrationInstructions /></p><p>{t("Division-3")}</p></div>
                <div className="top"><p className="Svg Svg4"><TbTopologyRing2 /></p><p>{t("Division-4")}</p></div>
                <div className="top"><p className="Svg Svg5"><FaModx /></p><p>{t("Division-5")}</p></div>
            </div>
        </div>
    </>
  )
}
