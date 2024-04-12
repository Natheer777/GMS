import './Details.css'
import {useTranslation} from 'react-i18next'

export default function Details() {
  const [t] = useTranslation()
  return (
    <>
    <div className="container">
      <div className="row">
        <h2 className="DetailsCourse text-center">
          - {t("Details-Course")} -
        </h2>
        <div className="Course mt-5">
          <p className='left'>{t("Course-1")}</p>
          <p className='right'>{t("Course-2")}</p>
          <p className='left'>{t("Course-3")}</p>
          <p className='right'>{t("Course-4")}</p>
          <p className='left'>{t("Course-5")}</p>
          <p className='right'>{t("Course-6")}</p>
          <p className='left'>{t("Course-7")}</p>
          <p className='right'>{t("Course-8")}</p>
          <p className='left'>{t("Course-9")}</p>
          <p className='right'>{t("Course-10")}</p>
          <p className='left'>{t("Course-11")}</p>
          <p className='right'>{t("Course-12")}</p>

        </div>
      </div>
    </div>
    </>
  )
}
