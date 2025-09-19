import { Helmet } from 'react-helmet'
import { observer } from 'mobx-react-lite'

type Props = {
  title: string
  description: string
  keywords: string
}

export const Seo = observer(({ title, description, keywords }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='https://vuscan.net/level1.webp' />
      <meta property='og:url' content='https:/vuscan.net' />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='vuscan' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='https://vuscan.net/level1.webp' />

      <link rel='canonical' href='https://vuscan.net/ru' />
      <link rel='alternate' hrefLang='ru' href='https://vuscan.net/ru' />
      <link rel='alternate' hrefLang='en' href='https://vuscan.net/en' />
      <link rel='alternate' hrefLang='he' href='https://vuscan.net/he' />
      <link rel='alternate' hrefLang='x-default' href='https://vuscan.net/en' />
    </Helmet>
  )
})
