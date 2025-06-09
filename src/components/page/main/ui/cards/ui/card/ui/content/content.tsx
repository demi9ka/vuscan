import { useTranslation } from 'react-i18next'
import css from './content.module.css'

type Props = {
  isRenderErrorBoxShadow: boolean
  logo: string
  id: number
}

export const Content = ({ logo, isRenderErrorBoxShadow, id }: Props) => {
  const { t } = useTranslation()
  return (
    <div className={css.wrapper}>
      <div className={css.avatarWrapper}>
        <div className={css.logoWrapper}>
          <img src={logo} alt='logo'/>
        </div>
        {isRenderErrorBoxShadow ? <div className={css.errorBoxShadow} /> : <></>}
      </div>
      <h3 className={css.title}>{t(`home.levels.${id}.title`)}</h3>
      <p className={css.description}>{t(`home.levels.${id}.description`)}</p>
    </div>
  )
}
