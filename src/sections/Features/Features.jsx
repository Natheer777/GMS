import './Features.css'
import {useTranslation} from 'react-i18next'
import { FaHandsHelping } from "react-icons/fa";
import { MdFiberNew } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { GiLifeSupport } from "react-icons/gi";


export default function Features() {
    const [t] = useTranslation()
  return (
    <>
    <div className="container mt-5">
            <h2 className='titleFeatures text-center'>- {t("Features-h")} -</h2>
            <div className="FeaturesDetails">
                <p className='top'><FaHandsHelping /><p></p>{t("Features-1")}</p>
                <p className='top'><MdFiberNew /><p></p>{t("Features-2")}</p>
                <p className='top'><MdOutlineIntegrationInstructions /><p></p>{t("Features-3")}</p>
                <p className='top'><GiLifeSupport /><p></p>{t("Features-4")}</p>
            </div>
        </div>
    </>
  )
}
