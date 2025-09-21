import { Helmet as HelmetComponent } from 'react-helmet'
import { useTranslation } from 'react-i18next'

export const Helmet = () => {
  const { t } = useTranslation()

  const title = t('seo.title-page-not-found')

  return (
    <HelmetComponent>
      <title>{title}</title>
      <meta name='robots' content='noindex, follow' />
    </HelmetComponent>
  )
}
