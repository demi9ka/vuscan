import { observer } from 'mobx-react-lite'
import { Helmet as HelmetComponent } from 'react-helmet'
import { useTranslation } from 'react-i18next'

export const Helmet = observer(() => {
  const { t } = useTranslation()

  const title = t('seo.title-main')
  const description = t('seo.description')
  const keywords = t('seo.keywords')

  console.log(title, description, keywords)

  return (
    <HelmetComponent>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='https://vuscan.net/level1.webp' />
      <meta property='og:url' content='https://vuscan.net' />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='vuscan' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='https://vuscan.net/level1.webp' />
    </HelmetComponent>
  )
})
